export const parsePrice = (price) => {
  const numericText = String(price).replace(/[^\d.]/g, "");

  if (!numericText) {
    throw new Error(`Invalid product price: ${price}`);
  }

  const amount = Number(numericText);

  if (!Number.isFinite(amount)) {
    throw new Error(`Invalid product price: ${price}`);
  }

  return amount;
};

export const formatPrice = (amount) => `₦${amount.toLocaleString("en-NG")}`;
