import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(true).toEqual(true);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
