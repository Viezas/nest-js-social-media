import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FollowerController } from 'src/controllers/follower/follower.controller';
import { user_followers } from 'src/sequelize/follower.schema';
import { FollowerService } from 'src/services/follower/follower.service';

@Module({
  imports: [SequelizeModule.forFeature([user_followers])],
  providers: [FollowerService],
  controllers: [FollowerController],
  exports: [SequelizeModule],
})
export class FollowerModule {}
