import { Controller, Get, Post, Put, Patch, Delete, HttpCode, Param, Body, ParseIntPipe } from '@nestjs/common';
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

  @Post('create')
  addUser(@Body() user: Users) {
    return this.userService.createUser(user);
  }

  @Delete(':id/delete')
  @HttpCode(200)
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id/update')
  @HttpCode(200)
  patchUser(@Param('id') id: number, @Body() user: Users) {
    return this.userService.patchUser(id, user);
  }
/*
  @Put(':id')
  @HttpCode(200)
  putUser(@Param('id') id: number, @Body() user: Users) {
    return this.userService.putUser(id, user);
  }
*/
}
