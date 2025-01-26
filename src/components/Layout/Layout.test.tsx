import { render, screen } from "@testing-library/react";

import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";

describe("Given a Layout component", () => {
  describe("When rendered with a title as children", () => {
    test("Then it should render the children", () => {
      const title = <h1>Test</h1>;

      render(
        <MemoryRouter>
          <Layout children={title} />
        </MemoryRouter>
      );
      const test = screen.getByText("Test");

      expect(test).not.toBeNull();
    });
  });
});
