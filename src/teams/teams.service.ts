import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team-dto';
import { UpdateTeamDto } from './dto/update-team-dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamsRepository: Repository<Team>,
  ) {}

  getAll() {
    return this.teamsRepository.find();
  }

  add(createTeamDto: CreateTeamDto) {
    return this.teamsRepository.save(createTeamDto);
  }

  async getById(id: number) {
    const result = await this.teamsRepository.findOne({
      where: { id },
      relations: {
        matchs: {
          local: true,
          visitante: true,
        },
      },
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
    await this.teamsRepository.delete({ id });
  }
}
