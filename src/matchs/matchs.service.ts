import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/create-match-dto';
import { UpdateMatchDto } from './dto/update-matchs-dto';
import { Match } from './entities/matchs.entity';

@Injectable()
export class MatchsService {
  constructor(
    @InjectRepository(Match) private matchRepository: Repository<Match>,
  ) {}

  getAll() {
    return this.matchRepository.find();
  }

  async getById(id: number) {
    const result = await this.matchRepository.findOneBy({ id });
    if (result === null)
      throw new HttpException('Match not found', HttpStatus.NOT_FOUND);
    return result;
  }

  add(createMatchDto: CreateMatchDto) {
    return this.matchRepository.save(createMatchDto);
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return this.matchRepository.update({ id }, updateMatchDto);
  }

  async delete(id: number) {
    await this.matchRepository.delete(id);
  }
}
