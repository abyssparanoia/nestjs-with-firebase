import { Get, Post, Body, Controller } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  findAll() {
    return this.userService.findAll()
  }

  @Post('users')
  // eslint-disable-next-line nestjs/use-validation-pipe
  create(@Body('user') userDto: CreateUserDto) {
    return this.userService.create(userDto)
  }
}
