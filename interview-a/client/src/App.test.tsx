import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the survey link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Take a Survey/);
  expect(linkElement).toBeInTheDocument();
});

test("renders the survey on click", () => {
  render(<App />);

  const linkElement = screen.getByText(/Take a Survey/);
  linkElement.click()

  const h1Element = screen.getByText(/Survey 1/);
  expect(h1Element).toBeInTheDocument();

  const buttonElement = screen.getByText(/Respond!/);
  expect(buttonElement).toBeInTheDocument();
});
