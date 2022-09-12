import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BodyTeamDto } from './dto/body-team.dto';
import { Team } from './interfaces/team.interface';

@Injectable()
export class TeamsService {
  private teams: Team[] = [];

  getAll() {
    return this.teams;
  }

  add(newTeamDto: BodyTeamDto) {
    const newTeam: Team = { id: this.teams.length, ...newTeamDto };
    this.teams.push(newTeam);
    return newTeam;
  }

  getById(queryId: number) {
    const result = this.teams.find((team) => team.id == queryId);
    if (result === undefined)
      throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
    return result;
  }

  update(id: number, bodyTeamDto: BodyTeamDto) {
    const { country, location, name, short_name } = bodyTeamDto;
    const team = this.getById(id);
    team.country = country;
    team.location = location;
    team.name = name;
    team.short_name = short_name;
    return team;
  }

  delete(id: number) {
    const pos = this.teams.indexOf(this.getById(id));
    this.teams.splice(pos, 1);
  }
}
