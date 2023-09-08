import { Test, TestingModule } from '@nestjs/testing';
import { MatchsController } from './matchs.controller';
import { MatchsService } from './matchs.service';

describe('MatchsController', () => {
  let controller: MatchsController;

  const mockMatchsService = {
    add: jest.fn((dto) => {
      return {
        ...dto,
        id: Date.now(),
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatchsController],
      providers: [MatchsService],
    })
      .overrideProvider(MatchsService)
      .useValue(mockMatchsService)
      .compile();

    controller = module.get<MatchsController>(MatchsController);
  });

  it('should create a team and return it with its id', () => {
    expect(
      controller.addNewMatch({
        local: 1,
        visitante: 2,
        sets_local: 2,
        sets_visitante: 3,
      }),
    ).toEqual({
      id: expect.any(Number),
      local: 1,
      visitante: 2,
      sets_local: 2,
      sets_visitante: 3,
    });
  });
});
