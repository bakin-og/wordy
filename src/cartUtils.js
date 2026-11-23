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

export const PAYMENT_METHODS = {
  card: {label: "Debit or credit card", shortLabel: "Card"},
  transfer: {label: "Bank transfer", shortLabel: "Bank transfer"},
  delivery: {label: "Pay on delivery", shortLabel: "Pay on delivery"},
};

export const validateDemoCard = ({name, number, expiry, cvc}) => {
  const errors = {};
  const digits = String(number ?? "").replace(/\D/g, "");

  if (!String(name ?? "").trim()) {
    errors.name = "Enter the cardholder name.";
  }
  if (digits.length !== 16) {
    errors.number = "Enter a 16-digit demo card number.";
  }
  if (!/^\d{2}\s*\/\s*\d{2}$/.test(String(expiry ?? "").trim())) {
    errors.expiry = "Use MM/YY format.";
  } else {
    const [month, year] = String(expiry).trim().split("/").map((value) => Number(value));
    const expiryDate = new Date(2000 + year, month, 0);
    const now = new Date();
    if (month < 1 || month > 12 || expiryDate < new Date(now.getFullYear(), now.getMonth(), 1)) {
      errors.expiry = "Enter a valid future expiry date.";
    }
  }
  if (!/^\d{3,4}$/.test(String(cvc ?? "").trim())) {
    errors.cvc = "Enter a 3 or 4-digit security code.";
  }

  return errors;
};
