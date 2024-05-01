import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  async findById(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOne({ where: { id } });
  }

  async calculateBattleWinner(
    pokemon1: Pokemon,
    pokemon2: Pokemon,
  ): Promise<{ winner: Pokemon | null; attacker: Pokemon; defender: Pokemon }> {
    let attacker, defender;

    // Determine attack order based on speed and attack properties
    if (
      pokemon1.speed > pokemon2.speed ||
      (pokemon1.speed === pokemon2.speed && pokemon1.attack > pokemon2.attack)
    ) {
      attacker = pokemon1;
      defender = pokemon2;
    } else {
      attacker = pokemon2;
      defender = pokemon1;
    }

    // Calculate the damage
    const damage =
      attacker.attack - defender.defense <= 0
        ? 1
        : attacker.attack - defender.defense;

    // Reduce defender HP
    defender.hp -= damage;

    // Check if the defender ran out of HP
    if (defender.hp <= 0) {
      // The attacker is the winnwer
      return { winner: attacker, attacker, defender };
    }

    // If the defender still has HP, the attacker becomes a defender and vice versa
    const auxFighter = defender;
    defender = attacker;
    attacker = auxFighter;

    // Return the pokemons current state after fighting
    return { winner: null, attacker, defender };
  }
}
