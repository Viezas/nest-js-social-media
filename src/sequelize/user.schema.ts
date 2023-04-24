import {
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Posts } from './post.schema';
import { Comments } from './comment.schema';
import { user_followers } from './follower.schema';

@Table
export class Users extends Model {
  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  email_verified_at: Date;

  @Column
  password: string;

  @Column
  phone: string;

  @Column
  pfp_url: string;

  @Column
  remember_token: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @HasMany(() => Posts)
  posts: Posts[];

  @HasMany(() => Comments)
  comments: Comments[];

  @HasMany(() => user_followers)
  followers: user_followers[];

  @BelongsToMany(() => Users, () => user_followers, "user_id")
  user: Users;

}