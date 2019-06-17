import { Get, Post, Body, Controller, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto'
import { Request } from 'express'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  findAll() {
    return this.userService.findAll()
  }

  @Post('users')
  // eslint-disable-next-line nestjs/use-validation-pipe
  create(@Req() request: Request, @Body('user') userDto: CreateUserDto) {
    return this.userService.create(request.firebaseUser.uid, userDto)
  }
}
