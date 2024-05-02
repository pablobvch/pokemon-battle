import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import PropTypes from "prop-types";

import { CardsList, Title, WinnerMessage, BattleContainer } from "./components";
import { startBattle } from "./api";
import { usePokemon } from "./hooks/usePokemon";
import theme from "./theme";

const AppContent = ({
  pokemons,
  onCardClick,
  winner,
  selectedPokemon,
  computerPokemon,
  onStartBattleClick
}) => (
  <Box sx={{ padding: "20px 40px" }}>
    <Title />
    <CardsList pokemons={pokemons} onCardClick={onCardClick} />
    {winner ? <WinnerMessage name={winner.name} /> : <Box mt={5} />}
    {selectedPokemon && computerPokemon && (
      <BattleContainer
        selectedPokemon={selectedPokemon}
        computerPokemon={computerPokemon}
        onStartBattleClick={onStartBattleClick}
        winner={winner}
      />
    )}
  </Box>
);

AppContent.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func,
  winner: PropTypes.object,
  selectedPokemon: PropTypes.object,
  computerPokemon: PropTypes.object,
  onStartBattleClick: PropTypes.func
};

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
      <AppContent
        {...{
          pokemons,
          onCardClick,
          winner,
          selectedPokemon,
          computerPokemon,
          onStartBattleClick
        }}
      />
    </ThemeProvider>
  );
}

export default App;
