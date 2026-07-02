import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Revenue Aggregator heading", () => {
  render(<App />);
  const heading = screen.getByText(/Loading/i);
  expect(heading).toBeInTheDocument();
});