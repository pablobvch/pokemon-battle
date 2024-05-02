import PropTypes from "prop-types";

import { CardMedia } from "@mui/material";

export const PokemonImage = ({ name, imageUrl }) => {
  return (
    <CardMedia
      component="img"
      alt={name}
      image={imageUrl}
      sx={{
        width: "100%",
        height: "auto"
      }}
    />
  );
};

PokemonImage.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};
