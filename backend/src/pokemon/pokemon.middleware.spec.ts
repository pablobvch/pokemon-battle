import { PokemonMiddleware } from './pokemon.middleware';

describe('PokemonMiddleware', () => {
  it('should be defined', () => {
    expect(new PokemonMiddleware()).toBeDefined();
  });
});
