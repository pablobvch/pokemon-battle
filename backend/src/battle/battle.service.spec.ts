import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';

import { Battle } from 'src/entities/battle.entity';
import { BattleService } from './battle.service';
import { dataSourceOptions } from 'src/database/dataSource';

describe('BattleService', () => {
  let service: BattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          ...dataSourceOptions,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Battle]),
      ],
      providers: [BattleService],
    }).compile();

    service = module.get<BattleService>(BattleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
