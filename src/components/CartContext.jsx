/* eslint-disable react-refresh/only-export-components */
import {createContext, useContext, useEffect, useState} from "react";
import {parsePrice} from "../cartUtils";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "wordy-cart";
const ORDER_STORAGE_KEY = "wordy-last-order";
const MAX_CART_QUANTITY = 99;

// Storage helpers keep malformed or outdated browser data from breaking the UI.
const readStoredValue = (key, fallback) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallback;
  } catch (error) {
    console.warn(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
};

const isValidCartItem = (item) =>
  item &&
  typeof item === "object" &&
  (typeof item.id === "number" || typeof item.id === "string") &&
  typeof item.key === "string" &&
  typeof item.name === "string" &&
  typeof item.image === "string" &&
  typeof item.price === "number" &&
  Number.isFinite(item.price) &&
  item.price >= 0 &&
  Number.isInteger(item.quantity) &&
  item.quantity >= 1 &&
  item.quantity <= MAX_CART_QUANTITY &&
  (item.size === null || typeof item.size === "string" || typeof item.size === "number");

// Only accept cart entries with values that the cart view can safely render.
const readCart = () => {
  const storedItems = readStoredValue(CART_STORAGE_KEY, []);
  return Array.isArray(storedItems)
    ? storedItems.filter(isValidCartItem)
    : [];
};

const readOrder = () => {
  const order = readStoredValue(ORDER_STORAGE_KEY, null);
  return order &&
    typeof order.number === "string" &&
    typeof order.date === "string" &&
    typeof order.total === "number" &&
    Number.isFinite(order.total) &&
    Array.isArray(order.items) &&
    order.payment &&
    typeof order.payment.method === "string" &&
    typeof order.payment.status === "string"
    ? {...order, items: order.items.filter(isValidCartItem)}
    : null;
};

const CartProvider = ({children}) => {
  const [items, setItems] = useState(() =>
    readCart(),
  );
  const [lastOrder, setLastOrder] = useState(() =>
    readOrder(),
  );

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn("Unable to save the cart.", error);
    }
  }, [items]);

  useEffect(() => {
    try {
      if (lastOrder) {
        localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(lastOrder));
      }
    } catch (error) {
      console.warn("Unable to save the latest order.", error);
    }
  }, [lastOrder]);

  const addToCart = (product, size = null) => {
    // The size is part of the key, so the same shirt in two sizes stays separate.
    const key = `${product.id}-${size ?? "one-size"}`;
    const cartItem = {
      key,
      id: product.id,
      name: product.name,
      price: parsePrice(product.price),
      image: product.image,
      size,
      quantity: 1,
    };

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key);
      return existingItem
        ? currentItems.map((item) =>
            item.key === key
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + 1, MAX_CART_QUANTITY),
                }
              : item,
          )
        : [...currentItems, cartItem];
    });
  };

  const setQuantity = (key, quantity) => {
    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > MAX_CART_QUANTITY
    ) {
      throw new Error(
        `Cart quantity must be a whole number from 1 to ${MAX_CART_QUANTITY}.`,
      );
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key ? {...item, quantity} : item,
      ),
    );
  };

  const removeFromCart = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key));
  };

  const clearCart = () => {
    setItems([]);
  };

  const completeCheckout = (payment = {method: "delivery", status: "demo"}) => {
    if (items.length === 0) {
      return null;
    }

    // Keep an order snapshot before clearing the active cart.
    const order = {
      number: `WORDY-${Date.now()}`,
      date: new Date().toISOString(),
      items: items.map((item) => ({...item})),
      total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      payment: {
        method: payment.method,
        status: "demo",
        label: payment.label ?? "Demo payment",
      },
    };

    setLastOrder(order);
    setItems([]);
    return order;
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        total,
        lastOrder,
        addToCart,
        setQuantity,
        removeFromCart,
        clearCart,
        completeCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
};

export {CartProvider, useCart};
