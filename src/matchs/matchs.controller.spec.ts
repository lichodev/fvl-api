import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTeamDto } from 'src/teams/dto/create-team-dto';
import { Team } from 'src/teams/entities/team.entity';
import { TeamsController } from 'src/teams/teams.controller';
import { TeamsService } from 'src/teams/teams.service';
import { Match } from './entities/matchs.entity';
import { MatchsController } from './matchs.controller';
import { MatchsService } from './matchs.service';

import * as dotenv from 'dotenv';
dotenv.config();

describe('MatchsController', () => {
  let matchsController: MatchsController;
  let teamsController: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchsController, TeamsController],
      providers: [MatchsService, TeamsService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [Team, Match],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Team, Match]),
      ],
    }).compile();

    matchsController = module.get<MatchsController>(MatchsController);
    teamsController = module.get<TeamsController>(TeamsController);
  });

  it('should create a match between two teams and return it with its id', async () => {
    const template: CreateTeamDto = {
      country: 'AR',
      location: 'Tandil',
      name: 'Example Team',
      short_name: 'TEAM',
    };

    const [team1, team2] = await Promise.all([
      teamsController.addNewTeam({ ...template }),
      teamsController.addNewTeam({ ...template }),
    ]);

    expect(
      await matchsController.addNewMatch({
        local: team1.id,
        visitante: team2.id,
        sets_local: 2,
        sets_visitante: 3,
      }),
    ).toEqual({
      local: team1.id,
      visitante: team2.id,
      sets_local: 2,
      sets_visitante: 3,
      id: expect.any(Number),
    });
  });
});
