import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {describe, expect, it} from "vitest";
import Apparel from "./Apparel";

describe("Apparel", () => {
  it("links featured products to their product detail pages", () => {
    render(
      <MemoryRouter>
        <Apparel />
      </MemoryRouter>,
    );

    const featuredProducts = [
      ["Self Portrait Tee", 5],
      ["Hidden Layers Tote", 2],
      ["Toolbox Tee", 1],
      ["Tomato Tee", 6],
      ["Low Res Socks", 10],
      ["Self Portrait Mug", 9],
    ];

    for (const [name, id] of featuredProducts) {
      const matchingLinks = screen.getAllByRole("link", {
        name: new RegExp(name),
      });
      expect(
        matchingLinks.some(
          (link) => link.getAttribute("href") === `/products/${id}`,
        ),
      ).toBe(true);
    }
  });
});
