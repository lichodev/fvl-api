import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match-dto';
import { MatchsService } from './matchs.service';

@Controller('games')
export class MatchsController {
  constructor(private readonly matchsService: MatchsService) {}

  @Get()
  getAllMatchs() {
    return this.matchsService.getAll();
  }

  @Get('/:id')
  getMatchById(@Param('id') id: number) {
    return this.matchsService.getById(id);
  }

  @Post()
  addNewMatch(@Body() newGameDto: CreateMatchDto) {
    return this.matchsService.add(newGameDto);
  }

  @Put('/:id')
  updateMatch(@Param('id') id: number, @Body() updateGameDto: CreateMatchDto) {
    return this.matchsService.update(id, updateGameDto);
  }

  @Delete('/:id')
  deleteMatch(@Param('id') id: number) {
    return this.matchsService.delete(id);
  }
}
