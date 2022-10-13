import { Match } from 'src/matchs/entities/matchs.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => Match, (match) => match.local)
  matchsLocal: Match[];

  @OneToMany(() => Match, (match) => match.visitante)
  matchsVisitante: Match[];
}
