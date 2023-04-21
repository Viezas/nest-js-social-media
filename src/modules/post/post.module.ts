import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostController } from 'src/controllers/post/post.controller';
import { Posts } from 'src/sequelize/post.schema';
import { PostService } from 'src/services/post/post.service';

@Module({
  imports: [SequelizeModule.forFeature([Posts])],
  providers: [PostService],
  controllers: [PostController],
  exports: [SequelizeModule],
})
export class PostModule {}
