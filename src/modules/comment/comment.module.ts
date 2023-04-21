import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentController } from 'src/controllers/comment/comment.controller';
import { Comments } from 'src/sequelize/comment.schema';
import { CommentService } from 'src/services/comment/comment.service';

@Module({
  imports: [SequelizeModule.forFeature([Comments])],
  providers: [CommentService],
  controllers: [CommentController],
  exports: [SequelizeModule],
})
export class CommentModule {}
