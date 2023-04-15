import { Injectable } from '@nestjs/common';
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
}
