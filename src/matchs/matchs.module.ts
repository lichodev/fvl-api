import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './entities/matchs.entity';
import { MatchsController } from './matchs.controller';
import { MatchsService } from './matchs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match])],
  controllers: [MatchsController],
  providers: [MatchsService],
})
export class MatchsModule {}
