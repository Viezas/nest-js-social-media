import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categories } from 'src/sequelize/category.schema';
import { Posts } from 'src/sequelize/post.schema';
const uniqueFields = ['name'];

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Categories)
    private categoryModel: typeof Categories,
  ) {}

  /**
   * Get all categories
   *
   * @returns Promise
   */
  all(): Promise<Categories[]> {
    return this.categoryModel.findAll({ include: [Posts] });
  }

  /**
   * Get a category by id
   *
   * @param number id
   *
   * @returns Promise
   */
  find(id: number): Promise<Categories | null> {
    return this.categoryModel.findOne({
      where: { id },
      include: [Posts],
    });
  }

  /**
   * Create a new category
   *
   * @param Categories request
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
  async store(
    request: Categories,
  ): Promise<Categories | NotAcceptableException> {
    let category_exists = false;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const category_found = await this.categoryModel.findOne({
        where: {
          [field]: request[field],
        },
      });
      if (category_found) {
        category_exists = true;
        break;
      }
    }

    if (category_exists) {
      return new NotAcceptableException(
        'Cannot create a new category with provided data',
      );
    } else {
      return await this.categoryModel.create({
        name: request.name,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }

  /**
   * Update a category
   *
   * @param number id
   * @param Categories request
   */
  async update(
    id: number,
    request: Categories,
  ): Promise<Categories | NotFoundException | NotAcceptableException> {
    const category = await this.categoryModel.findOne({
      where: { id },
    });
    if (!category) {
      return new NotFoundException('Category not found');
    }

    let update_category = true;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const category_found = await this.categoryModel.findOne({
        where: {
          [field]: request[field],
        },
      });
      if (category_found && category_found.id !== category.id) {
        update_category = false;
        break;
      }
    }

    if (!update_category) {
      return new NotAcceptableException(
        'Cannot update the category with provided data',
      );
    } else {
      await this.categoryModel.update(
        {
          name: request.name,
          created_at: new Date(),
          updated_at: new Date(),
        },
        { where: { id } },
      );
      return await this.categoryModel.findOne({
        where: { id },
      });
    }
  }

  /**
   * Delete a category
   *
   * @param number id
   *
   * @returns Promise
   * @throws NotFoundException
   */
  async destroy(id: number): Promise<any> {
    const category = await this.categoryModel.findOne({
      where: { id },
    });
    if (!category) {
      return new NotFoundException("This category doesn't exist");
    }
    return await this.categoryModel
      .destroy({
        where: { id },
      })
      .then((response) => {
        return 'Category deleted';
      });
  }
}
