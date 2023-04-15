import { Entity, Column, PrimaryGeneratedColumn, Unique, Timestamp } from 'typeorm';

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
    type: 'timestamp'
  })
  email_verified_at: Timestamp;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  pfp_url: string;

  @Column()
  remember_token: string;

  @Column({
    type: 'timestamp'
  })
  created_at: Timestamp;

  @Column({
    type: 'timestamp'
  })
  updated_at: Timestamp;
}
