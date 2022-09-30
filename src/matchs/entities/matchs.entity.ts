import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  id_local: number;
  @Column('int')
  id_visitante: number;
  @Column('int')
  sets_local: number;
  @Column('int')
  sets_visitante: number;
}
