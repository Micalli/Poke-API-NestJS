import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './entities/user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    let user = new User();
    user.email = createUserDto.email;
    user.password = bcrypt.hashSync(createUserDto.password, 8);

    await this.usersRepository.save(user);
    const { password, ...result } = user;
    return result;
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email: email });
  }
}
