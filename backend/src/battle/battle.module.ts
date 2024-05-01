import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BattleService } from './battle.service';
import { Battle } from 'src/entities/battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  providers: [BattleService],
})
export class BattleModule {}
