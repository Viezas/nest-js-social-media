import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LikeController } from 'src/controllers/like/like.controller';
import { Likes } from 'src/sequelize/like.schema';
import { LikeService } from 'src/services/like/like.service';

@Module({
    imports: [SequelizeModule.forFeature([Likes])],
    providers: [LikeService],
    controllers: [LikeController],
    exports: [SequelizeModule],
})
export class LikeModule {}
