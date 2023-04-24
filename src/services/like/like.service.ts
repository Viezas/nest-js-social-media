import {
    Injectable,
    NotAcceptableException,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/sequelize/user.schema';
import { Likes } from "../../sequelize/like.schema";

@Injectable()
export class LikeService {
    constructor(
        @InjectModel(Likes)
        private likeModel: typeof Likes,
    ) {}

    /**
     * Get all likes
     *
     * @returns Promise
     */
    all(): Promise<Likes[]> {
        return this.likeModel.findAll({ include: [Users] });
    }


}
