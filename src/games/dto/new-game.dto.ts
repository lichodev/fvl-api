export interface GameDto {
  id_local: number | null;
  id_visitante: number | null;
  sets_local: number;
  sets_visitante: number;
  fecha: string;
  lugar: string;
}
