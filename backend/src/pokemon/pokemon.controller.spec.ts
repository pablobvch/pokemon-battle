import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Battle } from 'src/entities/battle.entity';
import { BattleService } from 'src/battle/battle.service';
import { dataSourceOptions } from 'src/database/dataSource';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          ...dataSourceOptions,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Pokemon]),
        TypeOrmModule.forFeature([Battle]),
      ],
      controllers: [PokemonController],
      providers: [PokemonService, BattleService],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
