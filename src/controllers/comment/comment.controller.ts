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
import { CommentPipe } from 'src/pipes/comment/comment.pipe';
import { Comments } from 'src/sequelize/comment.schema';
import { CommentService } from 'src/services/comment/comment.service';
import commentValidator from 'src/validations/comment/comment.validation';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /**
   * Return a listing of all comments
   *
   * @returns Promise
   */
  @Get()
  @HttpCode(200)
  index(): Promise<Comments[]> {
    return this.commentService.all();
  }

  /**
   * Return a comment by id
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
  ): Promise<Comments | null> {
    return this.commentService.find(id);
  }

  /**
   * Create a new comment from request body
   *
   * @param Comments request
   * @returns Comments
   */
  @Post('store')
  @HttpCode(201)
  @UsePipes(new CommentPipe(commentValidator))
  store(@Body() request: Comments): Promise<Comments | NotAcceptableException> {
    return this.commentService.store(request).then((comment) => {
      return comment;
    });
  }

  /**
   * update a comment by id
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
    @Body() request: Comments,
  ): Promise<Comments | NotFoundException | NotAcceptableException> {
    return this.commentService.update(id, request).then((comment) => {
      return comment;
    });
  }

  /**
   * Delete a comment by id
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
  ): Promise<Comments> {
    return this.commentService.destroy(id);
  }
}
