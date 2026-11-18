import {describe, expect, it} from "vitest";
import {formatPrice, parsePrice} from "./cartUtils";

describe("cartUtils", () => {
  it("parses formatted Naira prices", () => {
    expect(parsePrice("₦57,200")).toBe(57200);
    expect(parsePrice("57,200")).toBe(57200);
  });

  it("rejects invalid prices", () => {
    expect(() => parsePrice("not a price")).toThrow(
      "Invalid product price",
    );
  });

  it("formats prices for the Nigerian locale", () => {
    expect(formatPrice(57200)).toBe("₦57,200");
  });
});
