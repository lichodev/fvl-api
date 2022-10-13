import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team-dto';
import { UpdateTeamDto } from './dto/update-team-dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamsRepository: Repository<Team>,
  ) {}

  private handleConstrainError({ code }) {
    if (code === '23503')
      throw new HttpException(
        'Team is still referenced in a Match',
        HttpStatus.CONFLICT,
      );

    throw new HttpException(
      'Internal Server Error',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  getAll() {
    return this.teamsRepository.find();
  }

  add(createTeamDto: CreateTeamDto) {
    return this.teamsRepository.save(createTeamDto);
  }

  async getById(id: number, populate = false) {
    let options: FindOneOptions<Team> = {};

    if (populate) {
      options = {
        relations: {
          matchsLocal: {
            local: true,
            visitante: true,
          },
          matchsVisitante: {
            local: true,
            visitante: true,
          },
        },
      };
    }

    const result = await this.teamsRepository.findOne({
      where: { id },
      ...options,
    });

    if (result === null)
      throw new HttpException('Team not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    await this.teamsRepository.update({ id }, updateTeamDto);
    return await this.getById(id);
  }

  async delete(id: number) {
    await this.getById(id);
    await this.teamsRepository.delete({ id }).catch(this.handleConstrainError);
  }
}
