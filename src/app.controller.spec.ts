import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('app controller', () => {
    it('return repo url and commit hash', () => {
      expect(appController.getWelcome()).toEqual(
        expect.objectContaining({
          github: 'https://github.com/lichodev/fvl-api',
          commitHash: expect.any(Number),
        }),
      );
    });
  });
});
