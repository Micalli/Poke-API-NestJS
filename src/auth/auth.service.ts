import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async checkCredentials(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
    };
  }
}
