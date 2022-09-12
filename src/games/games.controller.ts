import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GameDto } from './dto/new-game.dto';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gameService.getAll();
  }

  @Get('/:id')
  getGameById(@Param('id') id: number) {
    return this.gameService.getById(id);
  }

  @Post()
  addNewGame(@Body() newGameDto: GameDto) {
    return this.gameService.add(newGameDto);
  }

  @Put('/:id')
  updateGame(@Param('id') id: number, @Body() updateGameDto: GameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete('/:id')
  deleteGame(@Param('id') id: number) {
    return this.gameService.delete(id);
  }
}
