import { Repository } from 'typeorm';
import { User } from './user.entity';
import { userDTO } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    postUsers(data: userDTO): Promise<any>;
}
