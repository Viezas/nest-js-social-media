import {
    Injectable,
    NotAcceptableException,
    NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/sequelize/user.schema';
import { Likes } from "../../sequelize/like.schema";
import {Comments} from "../../sequelize/comment.schema";
import {Posts} from "../../sequelize/post.schema";

@Injectable()
export class LikeService {

    constructor(
        @InjectModel(Likes)
        private likeModel: typeof Likes,
    ) {}


    /**
     * Get all likes
     * @returns {Likes} Promise
     */
    all(): Promise<Likes[]> {
        return this.likeModel.findAll({ include: [Users] });
    }


    /**
     * Get a like by id
     * @param {number} id
     * @returns {Likes} Promise
     */
    find(id: number): Promise<Likes | null> {
        return this.likeModel.findOne({
            where: { id },
            include: [Users],
        });
    }


    /**
     * Create a new like
     * @param {Likes} request
     * @returns {Likes} Promise
     * @throws NotAcceptableException
     */
    async store(request: Likes): Promise<Likes | NotAcceptableException>  {
        const user = await Users.findOne({
            where: { id: request.user_id },
        });

        if (!user) {
            return new NotAcceptableException('User unknown');
        }

        return await this.likeModel.create({
            user_id: request.user_id,
            likeable_type: request.likeable_type,
            likeable_id: request.likeable_id,
            created_at: new Date(),
            updated_at: new Date(),
        });
    }


    /**
     * Delete a like
     * @param {number} id
     * @returns {any} Promise
     * @throws NotFoundException
     */
    async destroy(id: number): Promise<any> {
        const like = await this.likeModel.findOne({
            where: { id },
        });

        if (!like) {
            return new NotFoundException("This like doesn't exist");
        }

        return await this.likeModel
            .destroy({
                where: { id },
            })
            .then((response) => {
                return 'Like deleted';
            });
    }
}
