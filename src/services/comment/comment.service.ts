import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comments } from 'src/sequelize/comment.schema';
import { Posts } from 'src/sequelize/post.schema';
import { Users } from 'src/sequelize/user.schema';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comments)
    private commentModel: typeof Comments,
  ) {}

  /**
   * Get all comments
   *
   * @returns Promise
   */
  all(): Promise<Comments[]> {
    return this.commentModel.findAll({ include: [Posts, Users] });
  }

  /**
   * Get a comment by id
   *
   * @param number id
   *
   * @returns Promise
   */
  find(id: number): Promise<Comments | null> {
    return this.commentModel.findOne({
      where: { id },
      include: [Posts, Users],
    });
  }

  /**
   * Create a new comment
   *
   * @param Comments request
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
  async store(request: Comments): Promise<Comments | NotAcceptableException> {
    const user = await Users.findOne({
      where: { id: request.user_id },
    });
    const post = await Posts.findOne({
      where: { id: request.post_id },
    });

    if (!user || !post) {
      return new NotAcceptableException('User or post unknown');
    }

    return await this.commentModel.create({
      body: request.body,
      user_id: request.user_id,
      post_id: request.post_id,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  /**
   * Update a comment
   *
   * @param number id
   * @param Posts request
   */
  async update(
    id: number,
    request: Comments,
  ): Promise<Comments | NotFoundException | NotAcceptableException> {
    const comment = await this.commentModel.findOne({
      where: { id },
    });

    if (!comment) {
      return new NotFoundException('Comment not found');
    }

    const user = await Users.findOne({
      where: { id: request.user_id },
    });

    const post = await Posts.findOne({
      where: { id: request.post_id },
    });

    if (!user || !post) {
      return new NotAcceptableException('User or post unknown');
    } else {
      await this.commentModel.update(
        {
          body: request.body,
          user_id: request.user_id,
          post_id: request.post_id,
          updated_at: new Date(),
        },
        { where: { id } },
      );

      return await this.commentModel.findOne({
        where: { id },
      });
    }
  }

  /**
   * Delete a comment
   *
   * @param number id
   *
   * @returns Promise
   * @throws NotFoundException
   */
  async destroy(id: number): Promise<any> {
    const comment = await this.commentModel.findOne({
      where: { id },
    });

    if (!comment) {
      return new NotFoundException("This comment doesn't exist");
    }

    return await this.commentModel
      .destroy({
        where: { id },
      })
      .then((response) => {
        return 'Comment deleted';
      });
  }
}
