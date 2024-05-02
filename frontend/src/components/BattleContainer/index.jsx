import { useTheme } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { PokemonBattleCard } from "./PokemonBattleCard";

export const BattleContainer = ({
  selectedPokemon,
  computerPokemon,
  onStartBattleClick,
  winner
}) => {
  const theme = useTheme();
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={12} md={4}>
        <PokemonBattleCard pokemon={selectedPokemon} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        justifyContent={"center"}
        textAlign={"center"}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: theme.palette.button.backgroundColor.primary,
            "&:hover": {
              backgroundColor: theme.palette.button.backgroundColor.secondary
            },
            boxShadow: "0px 5px 3px rgba(0, 0, 0, 0.3)"
          }}
          onClick={onStartBattleClick}
          disabled={!!winner}
        >
          Start Battle
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <PokemonBattleCard pokemon={computerPokemon} />
      </Grid>
    </Grid>
  );
};

BattleContainer.propTypes = {
  selectedPokemon: PropTypes.object.isRequired,
  computerPokemon: PropTypes.object.isRequired,
  onStartBattleClick: PropTypes.func,
  winner: PropTypes.object
};
