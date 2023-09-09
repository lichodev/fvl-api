import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { Match } from 'src/matchs/entities/matchs.entity';

import * as dotenv from 'dotenv';
dotenv.config();

describe('TeamsController', () => {
  let controller: TeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
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
        TypeOrmModule.forFeature([Team]),
      ],
    }).compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should create a team and return it with its id', async () => {
    expect(
      await controller.addNewTeam({
        country: 'AR',
        location: 'Tandil',
        name: 'Example Team',
        short_name: 'TEAM',
      }),
    ).toEqual({
      country: 'AR',
      location: 'Tandil',
      name: 'Example Team',
      short_name: 'TEAM',
      id: expect.any(Number),
    });
  });
});
