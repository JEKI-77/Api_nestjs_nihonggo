// user.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  postUsers(@Body() data: userDTO) {
    return this.userService.postUsers(data);
  }
}
