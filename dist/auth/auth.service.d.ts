import { UsersService } from '../user/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        token: string;
        username: any;
        email: any;
        password: any;
        sub: any;
        role: any;
    }>;
}
