import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Categories } from './category.schema';
import { Users } from './user.schema';

@Table
export class Posts extends Model {
  @Column
  video_url: string;

  @Column
  title: string;

  @Column
  description: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @ForeignKey(() => Categories)
  @Column
  category_id: number;

  @BelongsTo(() => Users)
  user: Users;

  @BelongsTo(() => Categories)
  category: Categories;
}
