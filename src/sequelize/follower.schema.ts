import {
  BelongsTo, BelongsToMany,
  Column,
  ForeignKey, HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Users } from './user.schema';

@Table
export class user_followers extends Model {
  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @ForeignKey(() => Users)
  @Column
  following_id: number;

  @BelongsToMany(() => Users, () => user_followers, "following_id")
  user: Users;

}