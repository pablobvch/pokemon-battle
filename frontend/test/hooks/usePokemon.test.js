import { renderHook, act } from "@testing-library/react";
//import { act } from "react-dom/test-utils";
import { usePokemon } from "../../src/hooks/usePokemon";
import { getAllPokemons } from "../../src/api";

jest.mock("../../src/api/", () => ({
  getAllPokemons: jest.fn()
}));

describe("usePokemon hook", () => {
  it("fetches pokemons and sets them", async () => {
    const mockPokemons = [
      { id: 1, name: "Pikachu" },
      { id: 2, name: "Charizard" }
    ];
    getAllPokemons.mockResolvedValue(mockPokemons);

    const { result } = renderHook(() => usePokemon());

    // Espera a que se resuelva la promesa
    await act(async () => {
      expect(result.current.pokemons).toEqual(null);
    });

    // Verifica que getAllPokemons se llamó
    expect(getAllPokemons).toHaveBeenCalled();

    // Verifica que setPokemons se llamó con los datos correctos
    expect(result.current.pokemons).toEqual(mockPokemons);
  });

  // it("returns a random pokemon excluding the one with the given id", () => {
  //   const mockPokemons = [
  //     { id: 1, name: "Pikachu" },
  //     { id: 2, name: "Charizard" }
  //   ];
  //   const excludeId = 1;

  //   const { result } = renderHook(() => usePokemon());

  //   // Espera a que se resuelva la promesa
  //   act(() => {
  //     expect(result.current.pokemons).toEqual([]);
  //   });

  //   // Verifica que getAllPokemons se llamó
  //   expect(getAllPokemons).toHaveBeenCalled();

  //   // Verifica que setPokemons se llamó con los datos correctos
  //   expect(result.current.pokemons).toEqual(mockPokemons);

  //   // Llama a getPokemonRandomly
  //   const randomPokemon = result.current.getPokemonRandomly(
  //     mockPokemons,
  //     excludeId
  //   );
  //   expect(randomPokemon).not.toEqual(
  //     mockPokemons.find((p) => p.id === excludeId)
  //   );
  // });
});
