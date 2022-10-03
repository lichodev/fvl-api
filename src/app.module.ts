import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TeamsModule } from './teams/teams.module';
import { MatchsModule } from './matchs/matchs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from './matchs/entities/matchs.entity';
import { Team } from './teams/entities/team.entity';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    TeamsModule,
    MatchsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Match, Team],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
