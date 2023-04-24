import {
  Controller,
  Get,
  HttpCode,
} from '@nestjs/common';
import { FollowerService } from 'src/services/follower/follower.service';
import { Followers } from 'src/sequelize/follower.schema';

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
  index(): Promise<Followers[]> {
    return this.followerService.all();
  }
}