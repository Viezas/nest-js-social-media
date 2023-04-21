import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotAcceptableException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { PostPipe } from 'src/pipes/post/post.pipe';
import { Posts } from 'src/sequelize/post.schema';
import { PostService } from 'src/services/post/post.service';
import postValidator from 'src/validations/post/user.validation';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  /**
   * Return a listing of all posts
   *
   * @returns Promise
   */
  @Get()
  @HttpCode(200)
  index(): Promise<Posts[]> {
    return this.postService.all();
  }

  /**
   * Return a post by id
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
  ): Promise<Posts | null> {
    return this.postService.find(id);
  }

  /**
   * Create a new post from request body
   *
   * @param Posts request
   * @returns Posts
   */
  @Post('store')
  @HttpCode(201)
  @UsePipes(new PostPipe(postValidator))
  store(@Body() request: Posts): Promise<Posts | NotAcceptableException> {
    return this.postService.store(request).then((post) => {
      return post;
    });
  }

  /**
   * Update a post by id
   *
   * @param number id
   * @param Categories request
   * @returns Promise
   */
  @Put(':id/update')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() request: Posts,
  ): Promise<Posts | NotFoundException | NotAcceptableException> {
    return this.postService.update(id, request).then((post) => {
      return post;
    });
  }

  /**
   * Delete a post by id
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
  ): Promise<Posts> {
    return this.postService.destroy(id);
  }
}
