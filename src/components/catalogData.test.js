import {describe, expect, it} from "vitest";
import {
  allProducts,
  catalogProducts,
  shopAllProducts,
} from "./catalogData";

describe("catalogData", () => {
  it("provides a combined, deduplicated catalog", () => {
    expect(catalogProducts.length).toBeGreaterThan(shopAllProducts.length);
    expect(allProducts.length).toBeLessThanOrEqual(catalogProducts.length);
  });

  it("uses unique product IDs within each source", () => {
    const ids = catalogProducts.map((product) => product.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("uses the same formatted price convention", () => {
    for (const product of catalogProducts) {
      expect(product.price).toMatch(/^₦[\d,]+$/);
    }
  });
});
