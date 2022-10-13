import { Team } from 'src/teams/entities/team.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'id_local' })
  local: number | Team;

  @ManyToOne(() => Team)
  @JoinColumn({ name: 'id_visitante' })
  visitante: number | Team;

  @Column('int')
  sets_local: number;

  @Column('int')
  sets_visitante: number;
}
