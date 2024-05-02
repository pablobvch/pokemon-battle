import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";

import { CustomSlider } from "./CustomSlider";

export const PokemonBattleCard = ({ pokemon }) => (
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
      <Divider />
      <Typography variant="body1">HP</Typography>
      <CustomSlider />
      <Typography variant="body1">Attack</Typography>
      <CustomSlider />
      <Typography variant="body1">Defense</Typography>
      <CustomSlider />
      <Typography variant="body1">Speed</Typography>
      <CustomSlider />
    </CardContent>
  </Card>
);

PokemonBattleCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};
