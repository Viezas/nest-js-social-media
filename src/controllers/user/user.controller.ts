import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Param,
  ParseIntPipe,
  Put,
  UsePipes,
} from '@nestjs/common';
import { UserPipe } from 'src/pipes/user/user.pipe';
import { UserService } from 'src/services/user/user.service';
import { Users } from 'src/typeorm/user.schema';
import userValidator from 'src/validations/user/user.validation';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Return a listing of all users
   *
   * @returns Promise
   */
  @Get()
  @HttpCode(200)
  index(): Promise<Users[]> {
    return this.userService.all();
  }

  /**
   * Return a user by id
   *
   * @param number id
   *
   * @returns Promise
   */
  @Get(':id')
  @HttpCode(200)
  show(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Users | null> {
    return this.userService.find(id);
  }

  /**
   * Create a new user from request body
   *
   * @param Users request
   * @returns Users
   */
  @Post('store')
  @HttpCode(201)
  @UsePipes(new UserPipe(userValidator))
  store(@Body() request: Users): Promise<Users> {
    return this.userService.store(request).then((user) => {
      return user;
    });
  }

  @Put(':id/update')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() request: Users,
  ) {
    return this.userService.update(id, request).then((user) => {
      return user;
    });
  }

  /**
   * Delete a user by id
   *
   * @param number id
   *
   * @returns Promise
   */
  @Delete(':id/destroy')
  @HttpCode(200)
  destroy(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Users> {
    return this.userService.destroy(id);
  }
}
