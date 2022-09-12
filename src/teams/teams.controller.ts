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
import { BodyTeamDto } from './dto/body-team.dto';
import { QueryTeamsDto } from './dto/query-teams.dto';
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
  addNewTeam(@Body() bodyTeamDto: BodyTeamDto) {
    return this.teamsService.add(bodyTeamDto);
  }

  @Put('/:id')
  updateTeam(@Param('id') id: number, @Body() bodyTeamDto: BodyTeamDto) {
    return this.teamsService.update(id, bodyTeamDto);
  }

  @Delete('/:id')
  deleteTeam(@Param('id') id: number) {
    return this.teamsService.delete(id);
  }
}
