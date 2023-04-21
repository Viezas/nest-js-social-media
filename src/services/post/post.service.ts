import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from 'src/sequelize/category.schema';
import { Comments } from 'src/sequelize/comment.schema';
import { Posts } from 'src/sequelize/post.schema';
import { Users } from 'src/sequelize/user.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Posts)
    private postModel: typeof Posts,
  ) {}

  /**
   * Get all posts
   *
   * @returns Promise
   */
  all(): Promise<Posts[]> {
    return this.postModel.findAll({ include: [Users, Categories, Comments] });
  }

  /**
   * Get a post by id
   *
   * @param number id
   *
   * @returns Promise
   */
  find(id: number): Promise<Posts | null> {
    return this.postModel.findOne({
      where: { id },
      include: [Users, Categories, Comments],
    });
  }

  /**
   * Create a new post
   *
   * @param Posts request
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
  async store(request: Posts): Promise<Posts | NotAcceptableException> {
    const user = await Users.findOne({
      where: { id: request.user_id },
    });
    const category = await Categories.findOne({
      where: { id: request.category_id },
    });

    if (!user || !category) {
      return new NotAcceptableException('User or category unknown');
    }

    return await this.postModel.create({
      title: request.title,
      description: request.description,
      video_url: request.video_url,
      user_id: request.user_id,
      category_id: request.category_id,
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  /**
   * Update a post
   *
   * @param number id
   * @param Posts request
   */
  async update(
    id: number,
    request: Posts,
  ): Promise<Posts | NotFoundException | NotAcceptableException> {
    const post = await this.postModel.findOne({
      where: { id },
    });

    if (!post) {
      return new NotFoundException('Post not found');
    }

    const user = await Users.findOne({
      where: { id: request.user_id },
    });

    const category = await Categories.findOne({
      where: { id: request.category_id },
    });

    if (!user || !category) {
      return new NotAcceptableException('User or category unknown');
    } else {
      await this.postModel.update(
        {
          title: request.title,
          description: request.description,
          video_url: request.video_url,
          user_id: request.user_id,
          category_id: request.category_id,
          updated_at: new Date(),
        },
        { where: { id } },
      );

      return await this.postModel.findOne({
        where: { id },
      });
    }
  }

  /**
   * Delete a post
   *
   * @param number id
   *
   * @returns Promise
   * @throws NotFoundException
   */
  async destroy(id: number): Promise<any> {
    const post = await this.postModel.findOne({
      where: { id },
    });

    if (!post) {
      return new NotFoundException("This post doesn't exist");
    }

    return await this.postModel
      .destroy({
        where: { id },
      })
      .then((response) => {
        return 'Post deleted';
      });
  }
}
