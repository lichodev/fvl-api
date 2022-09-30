import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeamsModule } from './teams/teams.module';
import { MatchsModule } from './matchs/matchs.module';

@Module({
  imports: [TeamsModule, MatchsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
