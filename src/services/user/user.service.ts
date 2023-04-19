import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/sequelize/user.schema';
const bcrypt = require('bcrypt');
const uniqueFields = ['email', 'username', 'phone'];

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}

  /**
   * Get all users
   *
   * @returns Promise
   */
  all(): Promise<Users[]> {
    return this.userModel.findAll();
  }

  /**
   * Get a user by id
   *
   * @param number id
   *
   * @returns Promise
   */
  find(id: number): Promise<Users | null> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  /**
   * Create a new user
   *
   * @param Users request
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
  async store(request: Users): Promise<Users | NotAcceptableException> {
    let user_exists = false;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const user_found = await this.userModel.findOne({
        where: {
          [field]: request[field],
        },
      });
      if (user_found) {
        user_exists = true;
        break;
      }
    }

    if (user_exists) {
      return new NotAcceptableException(
        'Cannot create a new user with provided data',
      );
    } else {
      return await this.userModel.create({
        first_name: request.first_name,
        last_name: request.last_name,
        username: request.username,
        email: request.email,
        password: this.hashPassword(request.password),
        phone: request.phone,
        pfp_url: request.pfp_url,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }

  /**
   * Update a user
   *
   * @param number id
   * @param Users request
   */
  async update(
    id: number,
    request: Users,
  ): Promise<Users | NotFoundException | NotAcceptableException> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    if (!user) {
      return new NotFoundException('User not found');
    }

    let update_user = true;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const user_found = await this.userModel.findOne({
        where: {
          [field]: request[field],
        },
      });
      if (user_found && user_found.id !== user.id) {
        update_user = false;
        break;
      }
    }

    if (!update_user) {
      return new NotAcceptableException(
        'Cannot update the user with provided data',
      );
    } else {
      await this.userModel.update(
        {
          first_name: request.first_name,
          last_name: request.last_name,
          username: request.username,
          email: request.email,
          password: this.hashPassword(request.password),
          phone: request.phone,
          pfp_url: request.pfp_url,
          created_at: new Date(),
          updated_at: new Date(),
        },
        { where: { id } },
      );
      return await this.userModel.findOne({
        where: { id },
      });
    }
  }

  /**
   * Delete a user
   *
   * @param number id
   *
   * @returns Promise
   * @throws NotFoundException
   */
  async destroy(id: number): Promise<any> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    if (!user) {
      return new NotFoundException("This user doesn't exist");
    }
    return await this.userModel
      .destroy({
        where: { id },
      })
      .then((response) => {
        return 'User deleted';
      });
  }

  /**
   * Hash a password
   *
   * @param string password
   *
   * @returns string
   */
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 12);
  }
}
