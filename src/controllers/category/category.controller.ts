import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Param,
  ParseIntPipe,
  Put,
  UsePipes,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CategoryPipe } from 'src/pipes/category/category.pipe';
import { Categories } from 'src/sequelize/category.schema';
import { CategoryService } from 'src/services/category/category.service';
import categoryValidator from 'src/validations/category/category.validation';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Return a listing of all categories
   *
   * @returns Promise
   */
  @Get()
  @HttpCode(200)
  index(): Promise<Categories[]> {
    return this.categoryService.all();
  }

  /**
   * Return a category by id
   *
   * @param number id
   *
   * @returns Promise
   */
  @Get(':id')
  @HttpCode(200)
  show(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Categories | null> {
    return this.categoryService.find(id);
  }

  /**
   * Create a new category from request body
   *
   * @param Categories request
   * @returns Categories
   */
  @Post('store')
  @HttpCode(201)
  @UsePipes(new CategoryPipe(categoryValidator))
  store(
    @Body() request: Categories,
  ): Promise<Categories | NotAcceptableException> {
    return this.categoryService.store(request).then((category) => {
      return category;
    });
  }

  /**
   * Upodate a category by id
   *
   * @param number id
   * @param Categories request
   * @returns Promise
   */
  @Put(':id/update')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe)
    id: number,
    @Body() request: Categories,
  ): Promise<Categories | NotFoundException | NotAcceptableException> {
    return this.categoryService.update(id, request).then((user) => {
      return user;
    });
  }

  /**
   * Delete a category by id
   *
   * @param number id
   *
   * @returns Promise
   */
  @Delete(':id/destroy')
  @HttpCode(200)
  destroy(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<Categories> {
    return this.categoryService.destroy(id);
  }
}
