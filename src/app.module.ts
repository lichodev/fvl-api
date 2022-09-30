import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeamsModule } from './teams/teams.module';
import { MatchsModule } from './matchs/matchs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './matchs/entities/matchs.entity';
import { Team } from './teams/entities/team.entity';

@Module({
  imports: [
    TeamsModule,
    MatchsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'fvl',
      password: 'segura123!',
      database: 'db_fvl',
      entities: [Match, Team],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
