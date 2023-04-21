import {
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Users } from './user.schema';
import { Posts } from './post.schema';

@Table
export class Comments extends Model {
  @Column
  body: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @ForeignKey(() => Users)
  @Column
  user_id: number;

  @ForeignKey(() => Posts)
  @Column
  post_id: number;

  @BelongsTo(() => Users)
  user: Users;

  @BelongsTo(() => Posts)
  post: Posts;
}
