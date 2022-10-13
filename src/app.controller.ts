import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcome() {
    return {
      github: 'https://github.com/lichodev/fvl-api',
      commitHash: process.env.RENDER_GIT_COMMIT,
    };
  }
}
