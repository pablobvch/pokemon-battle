import React from "react";
import { ThemeProvider } from "@mui/material";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CustomSlider } from "../../../src/components/BattleContainer/CustomSlider";
import theme from "../../../src/theme";

test("renders the CustomSlider with the correct value", () => {
  render(
    <ThemeProvider theme={theme}>
      <CustomSlider value={3} />
    </ThemeProvider>
  );

  const sliderElement = screen.getByRole("slider");
  expect(sliderElement).toHaveValue("3");
  expect(sliderElement).toHaveAttribute("disabled");
});
