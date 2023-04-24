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
//import { CommentPipe } from 'src/pipes/comment/comment.pipe';
import { Likes } from 'src/sequelize/like.schema';
import { LikeService } from 'src/services/like/like.service';
import {Comments} from "../../sequelize/comment.schema";
//import commentValidator from 'src/validations/comment/comment.validation';

@Controller('likes')
export class LikeController {
    constructor(private readonly likeService: LikeService) {}

    /**
     * Return a listing of all likes
     *
     * @returns Promise
     */
    @Get()
    @HttpCode(200)
    index(): Promise<Likes[]> {
        return this.likeService.all();
    }
}
