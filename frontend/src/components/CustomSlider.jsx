import Slider from "@mui/material/Slider";

export default function CustomSlider() {
  return (
    <Slider
      defaultValue={30}
      aria-labelledby="discrete-slider-custom"
      step={10}
      marks={false}
      valueLabelDisplay="auto"
    />
  );
}
