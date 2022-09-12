import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [TeamsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
