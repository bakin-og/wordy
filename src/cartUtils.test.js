import {describe, expect, it} from "vitest";
import {
  formatPrice,
  parsePrice,
  validateDemoCard,
} from "./cartUtils";

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

  it("validates demo card fields", () => {
    expect(
      validateDemoCard({
        name: "Test Buyer",
        number: "4242424242424242",
        expiry: "12/99",
        cvc: "123",
      }),
    ).toEqual({});
  });

  it("reports incomplete or invalid demo card fields", () => {
    expect(
      validateDemoCard({
        name: "",
        number: "123",
        expiry: "1",
        cvc: "x",
      }),
    ).toEqual({
      name: "Enter the cardholder name.",
      number: "Enter a 16-digit demo card number.",
      expiry: "Use MM/YY format.",
      cvc: "Enter a 3 or 4-digit security code.",
    });
  });
});
