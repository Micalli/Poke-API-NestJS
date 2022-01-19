import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.checkCredentials(username, password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas!');
    }
    return user;
  }
}
