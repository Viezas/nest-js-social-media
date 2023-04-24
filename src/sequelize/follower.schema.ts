import {
   BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Users } from './user.schema';

@Table
export class Followers extends Model {
  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @ForeignKey(() => Users)
  @Column
  following_id: number;

  @BelongsTo(() => Users)
  user: Users;
}
