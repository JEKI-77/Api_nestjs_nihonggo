import { UserService } from './user.service';
import { userDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("./user.entity").User[]>;
    postUsers(data: userDTO): Promise<import("./user.entity").User>;
}
