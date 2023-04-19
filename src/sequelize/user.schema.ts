import {
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

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
}