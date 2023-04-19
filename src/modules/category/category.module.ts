import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from 'src/controllers/category/category.controller';
import { Categories } from 'src/sequelize/category.schema';
import { CategoryService } from 'src/services/category/category.service';

@Module({
  imports: [SequelizeModule.forFeature([Categories])],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [SequelizeModule],
})
export class CategoryModule {}
