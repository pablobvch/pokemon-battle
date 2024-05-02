import { CardContent, CardMedia, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { BaseCard } from "../BaseCard";
import { CustomSlider } from "./CustomSlider";

export const PokemonBattleCard = ({
  pokemon: { name, imageUrl, hp, attack, defense, speed }
}) => {
  return (
    <BaseCard>
      <CardContent>
        <CardMedia
          component="img"
          alt={name}
          image={`${imageUrl}`}
          sx={{
            width: "100%",
            height: "auto"
          }}
        />
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
