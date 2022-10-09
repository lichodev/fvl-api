import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CreateMatchDto } from './dto/create-match-dto';
import { UpdateMatchDto } from './dto/update-matchs-dto';
import { Match } from './entities/matchs.entity';

@Injectable()
export class MatchsService {
  constructor(
    @InjectRepository(Match) private matchRepository: Repository<Match>,
  ) {}

  getAll(populate = false) {
    let options: FindManyOptions<Match> = { loadRelationIds: true };

    if (populate) {
      options = {
        relations: {
          local: true,
          visitante: true,
        },
      };
    }

    return this.matchRepository.find(options);
  }

  add(createMatchDto: CreateMatchDto) {
    return this.matchRepository.save(createMatchDto);
  }

  async getById(id: number, populate = false) {
    let options: FindOneOptions<Match> = { loadRelationIds: true };

    if (populate) {
      options = {
        relations: {
          local: true,
          visitante: true,
        },
      };
    }

    const result = await this.matchRepository.findOne({
      where: { id },
      ...options,
    });

    if (result === null)
      throw new HttpException('Match not found', HttpStatus.NOT_FOUND);
    return result;
  }

  async update(id: number, updateMatchDto: UpdateMatchDto) {
    await this.matchRepository.update({ id }, updateMatchDto);
    return await this.getById(id);
  }

  async delete(id: number) {
    await this.getById(id);
    await this.matchRepository.delete(id);
  }
}
