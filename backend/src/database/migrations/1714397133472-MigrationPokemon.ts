import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Pokemon } from '../../entities/pokemon.entity';
import * as jsonPokemon from '../data/pokemon.json';

const pokemonData = jsonPokemon.pokemon;

export class MigrationPokemon1714397133472 implements MigrationInterface {
  private createPokemonTable(): Table {
    return new Table({
      name: 'pokemons',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'attack',
          type: 'int',
        },
        {
          name: 'defense',
          type: 'int',
        },
        {
          name: 'hp',
          type: 'int',
        },
        {
          name: 'speed',
          type: 'int',
        },
        {
          name: 'type',
          type: 'varchar',
        },
        {
          name: 'imageUrl',
          type: 'varchar',
        },
      ],
    });
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.createPokemonTable(), true);
    const pokemonRepository = queryRunner.connection.getRepository(Pokemon);
    for (const pokemon of pokemonData) {
      const newPokemon = new Pokemon();
      const usingPokemon = {
        ...pokemon,
        id: parseInt(pokemon.id.replace('pokemon-', '')),
      };
      Object.assign(newPokemon, usingPokemon);
      await pokemonRepository.save(newPokemon);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }
}
