import { Controller, Get, HttpCode, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Users } from './user.entity';
import { DatabaseType } from 'typeorm';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  index(): Promise<Users[]> {
    return this.userService.all();
  }

  @Get(':id')
  @HttpCode(200)
  show(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Users | null> {
    return this.userService.find(id);
  }
}
