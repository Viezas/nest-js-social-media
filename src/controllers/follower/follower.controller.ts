import {
  Controller,
  Get,
  Post,
  Delete,
  HttpCode,
  Param,
  ParseIntPipe,
  NotAcceptableException,
  Body,
  UsePipes,
} from '@nestjs/common';
import { FollowerService } from 'src/services/follower/follower.service';
import { user_followers } from 'src/sequelize/follower.schema';
import { FollowerPipe } from 'src/pipes/follower/follower.pipe';
import followerValidator from 'src/validations/follower/follower.validation';

@Controller('followers')
export class FollowerController {
  constructor(private readonly followerService: FollowerService) {}

   /**
      * Return a listing of all followers
      *
      * @returns Promise
      */
   @Get()
   @HttpCode(200)
   index(): Promise<user_followers[]> {
      return this.followerService.all();
   }

      /**
      * Return a follower by id
      *
      * @param number id
      *
      * @returns Promise
      */
   @Get(':id')
   @HttpCode(200)
   show(
      @Param('id', ParseIntPipe)
      user_id: number,
   ): Promise<user_followers | null> {
      return this.followerService.find(user_id);
   }

    /**
   * Create a new relation user - follower from request body
   *
   * @param user_followers request
   * @returns user_followers
   */
   @Post('store')
   @HttpCode(201)
   @UsePipes(new FollowerPipe(followerValidator))
   store(@Body() request: user_followers): Promise<user_followers | NotAcceptableException> {
      return this.followerService.store(request).then((user) => {
         return user;
      });
   }


    /**
   * Delete a follower by user_id and following_id
   *
   * @param number user_id
   * @param number following_id
   *
   * @returns Promise
   */
   @Delete(':user_id/:following_id/destroy')
   @HttpCode(200)
   destroy(
      @Param('user_id', ParseIntPipe) user_id: number,
      @Param('following_id', ParseIntPipe) following_id: number,
   ): Promise<user_followers> {
      return this.followerService.destroy(user_id, following_id);
   }
}