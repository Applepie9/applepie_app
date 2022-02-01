import React from "react";
import { render, screen } from "@testing-library/react";
import CardComp from "../components/recipe_related/CardComp";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));

test("renders 1 recipe", () => {
  render(
    <CardComp
    recipename="Bibimbap"
    />
  );

  screen.getAllByRole('');
  expect(screen.getAllByTitle)

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
