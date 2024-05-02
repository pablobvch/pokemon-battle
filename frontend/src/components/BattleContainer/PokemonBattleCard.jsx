import { CardContent, Divider, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";

import { BaseCard } from "../BaseCard";
import { CustomSlider } from "./CustomSlider";
import { PokemonImage } from "../PokemonImage";

export const PokemonBattleCard = ({
  pokemon: { name, imageUrl, hp, attack, defense, speed }
}) => {
  return (
    <BaseCard>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <PokemonImage name={name} imageUrl={imageUrl} />
        </Box>
        <Typography variant="h6">{name}</Typography>
        <Divider />
        <Typography variant="body1">HP</Typography>
        <CustomSlider value={hp} />
        <Typography variant="body1">Attack</Typography>
        <CustomSlider value={attack} />
        <Typography variant="body1">Defense</Typography>
        <CustomSlider value={defense} />
        <Typography variant="body1">Speed</Typography>
        <CustomSlider value={speed} />
      </CardContent>
    </BaseCard>
  );
};

PokemonBattleCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};
