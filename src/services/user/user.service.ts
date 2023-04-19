import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/user.schema';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');
const uniqueFields = ['email', 'username', 'phone'];

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  /**
   * Get all users
   *
   * @returns Promise
   */
  all(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  /**
   * Get a user by id
   *
   * @param number id
   *
   * @returns Promise
   */
  find(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  /**
   * Create a new user
   *
   * @param Users user
   *
   * @returns Promise
   * @throws NotAcceptableException
   */
  async store(request: Users): Promise<any> {
    let user_exists = false;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const user_found = await this.usersRepository.findOneBy({
        [field]: request[field],
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
      request.password = this.hashPassword(request.password);
      request.created_at = new Date();
      request.updated_at = new Date();
      return await this.usersRepository.save(request);
    }
  }

  /**
   * Update a user
   * @param number id
   * @param Users user
   */
  async update(id: number, request: Users) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      return new NotFoundException('User not found');
    }

    let update_user = true;

    for (let i = 0; i < uniqueFields.length; i++) {
      const field = uniqueFields[i];
      const user_found = await this.usersRepository.findOneBy({
        [field]: request[field],
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
      request.password = this.hashPassword(request.password);
      request.updated_at = new Date();
      await this.usersRepository.update(
        {
          id: user.id,
        },
        request,
      );
      return await this.usersRepository.findOneBy({ id });
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
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      return new NotFoundException("This user doesn't exist");
    }
    return await this.usersRepository.delete(id).then((response) => {
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
