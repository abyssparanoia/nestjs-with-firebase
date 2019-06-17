import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { Request } from 'express';
import {CreateUserDto} from './dto/create-user';
import {UsersService} from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all users';
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
      this.usersService.create(createUserDto);
  }
}
