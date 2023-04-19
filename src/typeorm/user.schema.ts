import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username', 'phone', 'email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({
    type: 'date',
  })
  email_verified_at: Date;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  pfp_url: string;

  @Column()
  remember_token: string;

  @Column({
    type: 'date',
  })
  created_at: Date;

  @Column({
    type: 'date',
  })
  updated_at: Date;
}
