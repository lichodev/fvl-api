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
import { CreateTeamDto } from './dto/create-team-dto';
import { QueryTeamsDto } from './dto/query-teams.dto';
import { UpdateTeamDto } from './dto/update-team-dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  getAllTeams(@Query() query: QueryTeamsDto) {
    const { country } = query;
    let results = this.teamsService.getAll();
    if (country)
      results = results.filter(
        (team) => team.country.toLowerCase() == country.toLowerCase(),
      );
    return results;
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    const query = this.teamsService.getById(id);
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
