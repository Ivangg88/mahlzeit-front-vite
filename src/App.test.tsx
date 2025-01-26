import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  test("renders correctly", () => {
    render(<App />);
    expect(screen.getByText("Mahlzeit")).not.toBeNull();
  });
});
