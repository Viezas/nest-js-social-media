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
import { Likes } from 'src/sequelize/like.schema';
import { LikeService } from 'src/services/like/like.service';
import likeValidator from 'src/validations/like/like.validation';
import { LikePipe } from "../../pipes/like/like.pipe";

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


    /**
     * Return a like by id
     * @param {number} id
     * @returns Promise
     */
    @Get(':id')
    @HttpCode(200)
    show(
        @Param('id', ParseIntPipe)
            id: number,
    ): Promise<Likes | null> {
        return this.likeService.find(id);
    }


    /**
     * Create a new like from request body
     * @param {Likes} request
     * @returns Likes
     */
    @Post('store')
    @HttpCode(201)
    @UsePipes(new LikePipe(likeValidator))
    store(@Body() request: Likes): Promise<Likes | NotAcceptableException> {
        return this.likeService.store(request).then((like) => {
            return like;
        });
    }
}
