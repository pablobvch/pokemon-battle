import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Battle } from 'src/entities/battle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
  ) {}

  async createBattle(
    pokemon1Id: number,
    pokemon2Id: number,
    winnerId: number,
  ): Promise<Battle> {
    const battle = new Battle();
    battle.date = new Date();
    battle.pokemon1Id = pokemon1Id;
    battle.pokemon2Id = pokemon2Id;
    battle.winnerId = winnerId;
    return await this.battleRepository.save(battle);
  }
}
