import PropTypes from "prop-types";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Grid,
  Typography
} from "@mui/material";

const PokemonListCard = ({ pokemon, onCardClick }) => (
  <Card
    onClick={() => onCardClick(pokemon)}
    sx={{
      borderRadius: "6px",
      border: "1px solid #e5e7eb",
      boxShadow: "-3px 3px 10px rgba(0, 0, 0, 0.3)"
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        alt={pokemon.name}
        image={`${pokemon.imageUrl}`}
        sx={{
          width: "100%",
          height: "auto"
        }}
      />
      <Typography paddingLeft={1}>{pokemon.name}</Typography>
    </CardActionArea>
  </Card>
);

PokemonListCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export function CardsList({ pokemons, onCardClick }) {
  if (!pokemons) {
    return <CircularProgress />;
  }

  return (
    <Box mt={4}>
      <Box mb={2}>
        <Typography variant="h6">Select your pokemon</Typography>
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
