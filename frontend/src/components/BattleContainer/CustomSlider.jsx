import Slider from "@mui/material/Slider";
import { useTheme } from "@emotion/react";

export const CustomSlider = () => {
  const theme = useTheme();

  return (
    <Slider
      defaultValue={30}
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
