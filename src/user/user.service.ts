import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async all(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  find(id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async createUser(user: Users): Promise<any> {
    await this.usersRepository.insert(user);
  }

  async deleteUser(id: number): Promise<any> {
    const userToDelete = await this.usersRepository.findOneBy({ id });
    // Si l'élément avec l'id donné n'est pas trouvé, renvoie une erreur NotFoundException
    if (!userToDelete)
      return new NotFoundException('did you find this user 🥶');
    await this.usersRepository.delete(id);
    return { deletedUsers: 1, nbUsers: await this.usersRepository.count() };
  }

  async patchUser(id: number, user: Users) {
    const userToUpdate = await this.usersRepository.findOneBy({ id });
    // Si l'élément avec l'id donné n'est pas trouvé, renvoie une erreur NotFoundException
    if (!userToUpdate)
      return new NotFoundException('did you find this user 🥶');
    // Mettre à jour une seule propriété
    if (user.first_name) userToUpdate.first_name = user.first_name;
    if (user.last_name) userToUpdate.last_name = user.last_name;
    if (user.username) userToUpdate.username = user.username;
    if (user.email) userToUpdate.email = user.email;
    if (user.password) userToUpdate.password = user.password;
    if (user.phone) userToUpdate.phone = user.phone;
    if (user.pfp_url) userToUpdate.pfp_url = user.pfp_url;
    await this.usersRepository.save(userToUpdate)
    return { updateUsers: 1, user: userToUpdate };
  }

  async putUser(id: number, user: Users) {
    const userToUpdate = await this.usersRepository.findOneBy({ id });
    // Si l'élément avec l'id donné n'est pas trouvé, renvoie une erreur NotFoundException
    if (!userToUpdate)
      return new NotFoundException('did you find this user 🥶');
    // Mettre à jour une seule propriété
    userToUpdate.first_name = user.first_name
    userToUpdate.last_name = user.last_name
    userToUpdate.username = user.username
    userToUpdate.email = user.email
    userToUpdate.password = user.password
    userToUpdate.phone = user.phone
    userToUpdate.pfp_url = user.pfp_url
    await this.usersRepository.save(userToUpdate)
    return { updateUsers: 1, user: userToUpdate };
  }
}
