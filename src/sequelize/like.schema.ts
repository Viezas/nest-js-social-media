import {
  BelongsTo,
  Column,
  CreatedAt, ForeignKey,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Users } from './user.schema';

@Table
export class Likes extends Model {
  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @BelongsTo(() => Users)
  user: Users;

  @Column
  likeable_type: string;

  @Column
  likeable_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

}
