import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import Slider from "@mui/material/Slider";

const MIN = 0;

const MAX = 6;

export const CustomSlider = ({ value }) => {
  const theme = useTheme();

  return (
    <Slider
      min={MIN}
      max={MAX}
      value={value}
      disabled
      sx={{
        "& .MuiSlider-thumb": {
          width: "0px",
          height: "0px",
          boxShadow: "none"
        },
        "& .MuiSlider-track": {
          height: "6px",
          color: theme.palette.valueIndicator.color.primary
        },
        "& .MuiSlider-rail": {
          height: "8px",
          color: theme.palette.valueIndicator.color.secundary
        }
      }}
    />
  );
};

CustomSlider.propTypes = {
  value: PropTypes.number
};
