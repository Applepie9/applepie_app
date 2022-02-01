import { render, screen } from "@testing-library/react";
import ShowAll from "./components/ShowAll";

test("renders learn react link", () => {
  render(<ShowAll />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});