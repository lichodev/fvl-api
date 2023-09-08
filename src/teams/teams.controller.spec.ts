import { Test, TestingModule } from '@nestjs/testing';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

describe('TeamsController', () => {
  let controller: TeamsController;

  const mockTeamsService = {
    add: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamsController],
      providers: [TeamsService],
    })
      .overrideProvider(TeamsService)
      .useValue(mockTeamsService)
      .compile();

    controller = module.get<TeamsController>(TeamsController);
  });

  it('should create a team and return it with its id', () => {
    expect(
      controller.addNewTeam({
        country: 'AR',
        location: 'Miramar',
        name: 'Sud América',
        short_name: 'SUDA',
      }),
    ).toEqual({
      country: 'AR',
      location: 'Miramar',
      name: 'Sud América',
      short_name: 'SUDA',
      id: expect.any(Number),
    });
  });
});
