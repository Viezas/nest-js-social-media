import {
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from 'src/sequelize/comment.schema';
import { Followers } from 'src/sequelize/follower.schema';
import { Posts } from 'src/sequelize/post.schema';
import { Users } from 'src/sequelize/user.schema';
// const bcrypt = require('bcrypt');
// const uniqueFields = ['email', 'username', 'phone'];

@Injectable()
export class FollowerService {
  constructor(
    @InjectModel(Followers)
    private followerModel: typeof Followers,
  ) {}

  /**
   * Get all followers
   *
   * @returns Promise
   */
  all(): Promise<Followers[]> {
    return this.followerModel.findAll();
  }
}