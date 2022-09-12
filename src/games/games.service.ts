import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GameDto } from './dto/new-game.dto';
import { Game } from './interfaces/game.interface';

@Injectable()
export class GamesService {
  private games: Game[] = [];

  getAll() {
    return this.games;
  }

  getById(queryId: number) {
    const result = this.games.find((game) => game.id == queryId);
    if (result === undefined)
      throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
    return result;
  }

  add(newGameDto: GameDto) {
    const newGame: Game = {
      id: this.games.length,
      ...newGameDto,
    };
    this.games.push(newGame);
    return newGame;
  }

  update(id: number, GameDto: GameDto) {
    const { fecha, id_local, id_visitante, lugar, sets_local, sets_visitante } =
      GameDto;
    const game = this.getById(id);
    game.fecha = fecha;
    game.id_local = id_local;
    game.id_visitante = id_visitante;
    game.lugar = lugar;
    game.sets_local = sets_local;
    game.sets_visitante = sets_visitante;
    return game;
  }

  delete(id: number) {
    const pos = this.games.indexOf(this.getById(id));
    this.games.splice(pos, 1);
  }
}
