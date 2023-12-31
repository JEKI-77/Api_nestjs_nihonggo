import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    return await this.usersService.findOne(email, password);
  }

  async login(user: any) {
    try {
      const payload = {
        username: user.username,
        email: user.email,
        password: user.password,
        sub: user.id,
        role: user.role,
      };
      return {
        ...payload,
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new Error(`Error logging in ${error} user ${error.message}`);
    }
  }
}
