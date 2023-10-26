import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getWelcome() {
    return {
      github: 'https://github.com/newAccount/newRepo',
      commitHash: process.env.RENDER_GIT_COMMIT,
    };
  }
}
