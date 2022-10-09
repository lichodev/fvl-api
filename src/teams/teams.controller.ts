import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team-dto';
import { UpdateTeamDto } from './dto/update-team-dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getAllTeams() {
    const results = this.teamsService.getAll();
    return results;
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    const query = this.teamsService.getById(id, true);
    return query;
  }

  @Post()
  addNewTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsService.add(createTeamDto);
  }

  @Put('/:id')
  updateTeam(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete('/:id')
  deleteTeam(@Param('id') id: number) {
    return this.teamsService.delete(id);
  }
}
