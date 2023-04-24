import {
  Injectable, NotAcceptableException, NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { user_followers } from 'src/sequelize/follower.schema';
const uniqueFields = ['user_id', 'following_id'];



@Injectable()
export class FollowerService {
  constructor(
    @InjectModel(user_followers)
    private followerModel: typeof user_followers,
  ) {}

  /**
   * Get all followers
   *
   * @returns Promise
   */
  all(): Promise<user_followers[]> {
    return this.followerModel.findAll();
  }

    /**
   * Get a follower by id
   *
   * @param number id
   *
   * @returns Promise
   */
   find(user_id: number): Promise<user_followers | null> {
      return this.followerModel.findOne({
         where: { user_id },
      });
   }

   /**
   * Create a new relation user - follower
   *
   * @param user_followers request
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
   async store(request: user_followers): Promise<user_followers | NotAcceptableException> {
    let user_followers_exists = false;

    for (let i = 0; i < uniqueFields.length; i++) {
      const user_followers_found = await this.followerModel.findOne({
        where: {
         user_id : request.user_id, 
        following_id : request.following_id,
        },
      });

      if (user_followers_found) {
        user_followers_exists = true;
        break;
      }
    }

    if (user_followers_exists) {
      return new NotAcceptableException(
        'Cannot create a new relation user-follower with provided data',
      );
    } else {
      return await this.followerModel.create({
        user_id : request.user_id, 
        following_id : request.following_id
      });
    }
  }
  
    /**
   * Delete a follower
   *
   * @param number user_id
   * @param number following_id
   *
   * @returns Promise
   * @throws NotFoundException
   */
   async destroy(user_id: number, following_id: number): Promise<any> {
      const follower = await this.followerModel.findOne({
         where: { 
            user_id : user_id, 
            following_id : following_id
         },
      });
      if (!follower) {
         return new NotFoundException("This user_followers doesn't exist");
      }
      return await this.followerModel
         .destroy({
         where: { user_id, following_id },
         })
         .then((response) => {
         return 'user_followers deleted';
         });
   }
}