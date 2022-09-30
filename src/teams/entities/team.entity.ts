import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  short_name: string;
  @Column()
  country: string;
  @Column()
  location: string;
}
