import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './sequelize/user.schema';
import { CategoryModule } from './modules/category/category.module';
import { Categories } from './sequelize/category.schema';
import { PostModule } from './modules/post/post.module';
import { Posts } from './sequelize/post.schema';
import { CommentModule } from './modules/comment/comment.module';
import { Comments } from './sequelize/comment.schema';
import { LikeModule } from './modules/like/like.module';
import { Likes } from './sequelize/like.schema';
import { FollowerModule } from './modules/follower/follower.module';
import { user_followers } from './sequelize/follower.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Users, Categories, Posts, Comments, user_followers],
      define: {
        timestamps: false
      }
    }),
    UserModule,
    CategoryModule,
    PostModule,
    CommentModule,
    FollowerModule,
    LikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
