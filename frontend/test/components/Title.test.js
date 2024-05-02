import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Title } from "../../src/components/Title";

describe("Title Component", () => {
  test("renders the title correctly", () => {
    render(<Title />);

    const titleElement = screen.getByText("Battle of Pokemons");
    expect(titleElement).toBeInTheDocument();
  });
});
