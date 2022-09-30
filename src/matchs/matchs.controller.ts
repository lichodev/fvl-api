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
import { UpdateMatchDto } from './dto/update-matchs-dto';
import { MatchsService } from './matchs.service';

@Controller('matchs')
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
  addNewMatch(@Body() createMatchDto: CreateMatchDto) {
    return this.matchsService.add(createMatchDto);
  }

  @Put('/:id')
  updateMatch(@Param('id') id: number, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchsService.update(id, updateMatchDto);
  }

  @Delete('/:id')
  deleteMatch(@Param('id') id: number) {
    return this.matchsService.delete(id);
  }
}
