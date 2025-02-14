import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the App component with heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Vite \+ React/i); // Matches the <h1> text
  expect(headingElement).toBeInTheDocument();
});

test("renders the button with count", () => {
  render(<App />);
  const buttonElement = screen.getByText(/count is/i); // Matches button text
  expect(buttonElement).toBeInTheDocument();
});
