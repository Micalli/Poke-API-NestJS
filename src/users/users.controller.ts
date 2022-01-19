import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('singin')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
