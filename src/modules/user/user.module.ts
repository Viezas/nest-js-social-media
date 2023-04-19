import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/services/user/user.service';
import { Users } from 'src/sequelize/user.schema';
@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UserService],
  controllers: [UserController],
  exports: [SequelizeModule],
})
export class UserModule {}
