import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, getRepository } from 'typeorm'
import { validate } from 'class-validator'
import { HttpException } from '@nestjs/common/exceptions/http.exception'
import { HttpStatus } from '@nestjs/common'
import { UserEntity } from './user.entity'
import { CreateUserDto } from './dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async create(uid: string, dto: CreateUserDto): Promise<void> {
    const { username, age, avatarUrl } = dto

    const qb = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.id = :id', { id: uid })
      .limit(1)

    const user = await qb.getOne()

    if (user) {
      const errorBody = { id: `user has already exist UserID ${uid}` }
      throw new HttpException({ message: 'Input data validation failed', errorBody }, HttpStatus.CONFLICT)
    }

    const newUser = new UserEntity()

    newUser.id = uid
    newUser.username = username
    newUser.age = age
    newUser.avatarUrl = avatarUrl

    const errors = await validate(newUser)
    if (errors.length > 0) {
      const errorBody = { username: 'Userinput is not valid.' }
      throw new HttpException({ message: 'Input data validation failed', errorBody }, HttpStatus.BAD_REQUEST)
    } else {
      await this.userRepository.save(newUser)
      return
    }
  }
}
