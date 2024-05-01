import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";

const PokemonBattleCard = ({ pokemon }) => (
  <Card
    sx={{
      borderRadius: "6px",
      border: "1px solid #e5e7eb",
      boxShadow: "-3px 3px 10px rgba(0, 0, 0, 0.3)"
    }}
  >
    <CardContent>
      <CardMedia
        component="img"
        alt={pokemon.name}
        image={`${pokemon.imageUrl}`}
        sx={{
          width: "100%",
          height: "auto"
        }}
      />
      <Typography variant="h6">{pokemon.name}</Typography>
      <Divider></Divider>
      <Typography variant="body1">HP</Typography>
      <Typography variant="body1">Attack</Typography>
      <Typography variant="body1">Defense</Typography>
      <Typography variant="body1">Speed</Typography>
    </CardContent>
  </Card>
);

PokemonBattleCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

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
            backgroundColor: theme.palette.buttonBackground,
            "&:hover": {
              backgroundColor: theme.palette.darkButtonBackground
            }
          }}
          onClick={onStartBattleClick}
          disabled={winner}
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
