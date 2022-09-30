import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeamsModule } from './teams/teams.module';
import { GamesModule } from './matchs/matchs.module';

@Module({
  imports: [TeamsModule, GamesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
