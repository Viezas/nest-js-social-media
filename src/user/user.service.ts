import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  /**
   * Get all users
   */
  async all(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  /**
   * Get one user
   * @param id: id: id of user
   */
  find(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  /**
   * Add one user
   * @param user: a new user
   */
  async createUser(user: Users): Promise<any> {
    user.password = bcrypt.hashSync(user.password, 12) //saltRounds = 12
    await this.usersRepository.insert(user);
    return { addUsers: 1, user: user };
  }

  /**
   * Delete one user
   * @param id: id of user
   */
  async deleteUser(id: number): Promise<any> {
    const userToDelete = await this.usersRepository.findOneBy({ id });
    // If the element with the given id is not found, throws a NotFoundException error
    if (!userToDelete)
      return new NotFoundException("id introuvable");
    await this.usersRepository.delete(id);
    return { deletedUsers: 1, nbUsers: await this.usersRepository.count() };
  }

  /**
   * Update one user
   * @param id: id of user
   * @param user: user updated
   */
  async patchUser(id: number, user: Users) {
    const userToUpdate = await this.usersRepository.findOneBy({ id });
    // If the element with the given id is not found, throws a NotFoundException error
    if (!userToUpdate)
      return new NotFoundException("id introuvable");
    // Update a single property
    if (user.first_name) userToUpdate.first_name = user.first_name;
    if (user.last_name) userToUpdate.last_name = user.last_name;
    if (user.username) userToUpdate.username = user.username;
    if (user.email) userToUpdate.email = user.email;
    if (user.password) userToUpdate.password = bcrypt.hashSync(user.password, 12) //saltRounds = 12
    if (user.phone) userToUpdate.phone = user.phone;
    if (user.pfp_url) userToUpdate.pfp_url = user.pfp_url;
    if (user.remember_token) userToUpdate.remember_token = user.remember_token;
    await this.usersRepository.save(userToUpdate)
    return { updateUsers: 1, user: userToUpdate };
  }
/*
  async putUser(id: number, user: Users) {
    const userToUpdate = await this.usersRepository.findOneBy({ id });
    // If the element with the given id is not found, throws a NotFoundException error
    if (!userToUpdate)
      return new NotFoundException('did you find this user 🥶');
    // Update a single property
    userToUpdate.first_name = user.first_name
    userToUpdate.last_name = user.last_name
    userToUpdate.username = user.username
    userToUpdate.email = user.email
    userToUpdate.password = bcrypt.hashSync(user.password, 12) //saltRounds = 12
    userToUpdate.phone = user.phone
    userToUpdate.pfp_url = user.pfp_url
    userToUpdate.remember_token = user.remember_token;
    await this.usersRepository.save(userToUpdate)
    return { updateUsers: 1, user: userToUpdate };
  }
 */
}
