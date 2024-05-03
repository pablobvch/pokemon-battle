import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';

import { BattleService } from 'src/battle/battle.service';
import { Pokemon } from '../entities/pokemon.entity';
import { PokemonService } from './pokemon.service';

interface BattleRequest {
  pokemon1Id: number;
  pokemon2Id: number;
}

const throwIfPokemonNotFound = (pokemon: Pokemon | null, pokemonId: number) => {
  if (!pokemon) {
    throw new HttpException(
      `Pokemon ID not found: ${pokemonId}`,
      HttpStatus.NOT_FOUND,
    );
  }
};

@Controller('pokemons')
export class PokemonController {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly battleService: BattleService,
  ) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Post('battle')
  @HttpCode(200)
  async battle(@Body() battleRequest: BattleRequest): Promise<Pokemon> {
    try {
      const { pokemon1Id, pokemon2Id } = battleRequest;

      let winner = null;

      let [pokemon1, pokemon2] = await Promise.all([
        this.pokemonService.findById(pokemon1Id),
        this.pokemonService.findById(pokemon2Id),
      ]);

      throwIfPokemonNotFound(pokemon1, pokemon1Id);
      throwIfPokemonNotFound(pokemon2, pokemon2Id);

      if (pokemon1Id === pokemon2Id) {
        throw new HttpException(
          'Cannot use the same pokemon',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Battle by shifts
      while (!winner) {
        const {
          winner: battleWinner,
          attacker,
          defender,
        } = await this.pokemonService.calculateBattleWinner(pokemon1, pokemon2);

        // Update the status of the pokemons
        pokemon1 = attacker;
        pokemon2 = defender;

        // set the winner
        winner = battleWinner;
      }

      this.battleService.createBattle(pokemon1Id, pokemon2Id, winner.id);

      return winner;
    } catch (error) {
      if (
        (error instanceof HttpException &&
          error.getStatus() === HttpStatus.BAD_REQUEST) ||
        error.getStatus() === HttpStatus.NOT_FOUND
      ) {
        throw error;
      } else {
        console.error('Error by posting the battle:', error);
        throw new HttpException(
          'Internal server error by posting the battle',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
}
