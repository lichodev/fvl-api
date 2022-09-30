import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match-dto';
import { UpdateMatchDto } from './dto/update-matchs-dto';
import { Match } from './interfaces/matchs.interface';

@Injectable()
export class MatchsService {
  private matchs: Match[] = [];

  getAll() {
    return this.matchs;
  }

  getById(queryId: number) {
    const result = this.matchs.find((matchs) => matchs.id == queryId);
    if (result === undefined)
      throw new HttpException('Match not found', HttpStatus.NOT_FOUND);
    return result;
  }

  add(createMatchDto: CreateMatchDto) {
    const newMatch: Match = {
      id: this.matchs.length,
      ...createMatchDto,
    };
    this.matchs.push(newMatch);
    return newMatch;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    const { fecha, id_local, id_visitante, lugar, sets_local, sets_visitante } =
      updateMatchDto;
    const match = this.getById(id);
    match.fecha = fecha;
    match.id_local = id_local;
    match.id_visitante = id_visitante;
    match.lugar = lugar;
    match.sets_local = sets_local;
    match.sets_visitante = sets_visitante;
    return match;
  }

  delete(id: number) {
    const pos = this.matchs.indexOf(this.getById(id));
    this.matchs.splice(pos, 1);
  }
}
