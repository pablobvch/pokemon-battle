import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Battle } from './entities/battle.entity';
import { BattleModule } from './battle/battle.module';
import { BattleService } from './battle/battle.service';
import { dataSourceOptions } from './database/dataSource';
import { Pokemon } from './entities/pokemon.entity';
import { PokemonController } from './pokemon/pokemon.controller';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonService } from './pokemon/pokemon.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, synchronize: true }),
    TypeOrmModule.forFeature([Pokemon]),
    TypeOrmModule.forFeature([Battle]),
    PokemonModule,
    BattleModule,
  ],
  controllers: [AppController, PokemonController],
  providers: [AppService, PokemonService, BattleService],
})
export class AppModule {}
