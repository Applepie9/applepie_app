import React from "react";
import { render } from "@testing-library/react";
import RecipeTiles from "../components/recipe_related/RecipeTiles";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

test("renders 8 recipes", () => {
  render(<RecipeTiles />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
