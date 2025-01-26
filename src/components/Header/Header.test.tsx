import { render, screen } from "@testing-library/react";

import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Given a component Header", () => {
  const renderComponent = () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  };
  describe("When rendered", () => {
    test("Then it should show a header with a title 'Mahlzeit' and 4 links", () => {
      const title = "Mahlzeit";

      renderComponent();
      const links = screen.getAllByRole("link");
      const heading = screen.getByRole("heading", { name: title });

      expect(heading).not.toBeNull();
      expect(links.length).toBe(4);
    });
  });

  describe("When the user is not logged", () => {
    test("Then it should show a link with the text 'Login'", () => {
      renderComponent();
      const link = screen.getByRole("link", { name: "Login" });

      expect(link).not.toBeNull();
    });
  });
});
