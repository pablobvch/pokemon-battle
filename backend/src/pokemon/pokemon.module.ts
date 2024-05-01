import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { Pokemon } from 'src/entities/pokemon.entity';
import { BattleService } from 'src/battle/battle.service';
import { Battle } from 'src/entities/battle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon]),
    TypeOrmModule.forFeature([Battle]),
  ],
  controllers: [PokemonController],
  providers: [PokemonService, BattleService],
})
export class PokemonModule {}
