import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match-dto';
import { QueryMatchDto } from './dto/query-match-dto';
import { UpdateMatchDto } from './dto/update-matchs-dto';
import { MatchsService } from './matchs.service';

@Controller('matchs')
export class MatchsController {
  constructor(private readonly matchsService: MatchsService) {}

  @Get()
  getAllMatchs(@Query() query: QueryMatchDto) {
    const { populate } = query;
    return this.matchsService.getAll(populate);
  }

  @Get('/:id')
  getMatchById(@Param('id') id: number) {
    return this.matchsService.getById(id, true);
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
