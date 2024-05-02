import PropTypes from "prop-types";
import {
  Box,
  CardActionArea,
  CircularProgress,
  Grid,
  Typography
} from "@mui/material";

import { BaseCard } from "./BaseCard";
import { PokemonImage } from "./PokemonImage";

const PokemonListCard = ({ pokemon, onCardClick }) => (
  <BaseCard onCardClick={onCardClick} pokemon={pokemon}>
    <CardActionArea>
      <PokemonImage name={pokemon.name} imageUrl={pokemon.imageUrl} />
      <Typography paddingLeft={1}>{pokemon.name}</Typography>
    </CardActionArea>
  </BaseCard>
);

PokemonListCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export function CardsList({ pokemons, onCardClick }) {
  if (!pokemons) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Box mb={2}>
        <Typography variant="h5">Select your pokemon</Typography>
      </Box>
      <Grid container justifyContent="space-between" spacing={2}>
        {pokemons.map((pokemon) => (
          <Grid item xs={6} md={2} key={pokemon.id}>
            <PokemonListCard
              key={pokemon.id}
              pokemon={pokemon}
              onCardClick={onCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

CardsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  onCardClick: PropTypes.func.isRequired
};
