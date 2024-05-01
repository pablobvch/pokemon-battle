import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";

import { CardsList, Title, WinnerMessage, BattleContainer } from "./components";
import { usePokemon } from "./hooks/usePokemon";
import theme from "./theme";
import { startBattle } from "./api";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [computerPokemon, setComputerPokemon] = useState(null);
  const [winner, setWinner] = useState(null);

  const { pokemons, getPokemonRandomly } = usePokemon();

  const onCardClick = (pokemon) => {
    setWinner(null);
    setSelectedPokemon(pokemon);
    setComputerPokemon(getPokemonRandomly(pokemons, pokemon.id));
  };

  const onStartBattleClick = async () => {
    const winner = await startBattle(selectedPokemon.id, computerPokemon.id);
    setWinner(winner);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: "10px 20px" }}>
        <Title />
        <CardsList pokemons={pokemons} onCardClick={onCardClick} />
        {!winner && <Box mt={5} />}
        {winner && <WinnerMessage name={winner.name} />}
        {selectedPokemon && computerPokemon && (
          <BattleContainer
            selectedPokemon={selectedPokemon}
            computerPokemon={computerPokemon}
            onStartBattleClick={onStartBattleClick}
            winner={winner}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
