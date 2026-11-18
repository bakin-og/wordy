import {Link, useNavigate} from "react-router-dom";
import {useCart} from "./CartContext";
import {formatPrice} from "../cartUtils";

const Cart = () => {
  const {
    items,
    total,
    setQuantity,
    removeFromCart,
    clearCart,
    completeCheckout,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // A successful demo checkout creates an order snapshot and opens the receipt.
    const order = completeCheckout();
    if (order) {
      navigate("/receipt");
    }
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Your collection
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Shopping cart
          </h1>
        </div>
        {items.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-red-200 px-4 text-sm font-semibold text-red-700 transition-colors hover:border-red-300 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:border-red-900 dark:text-red-300 dark:hover:bg-red-950/50"
          >
            Clear cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-slate-100 p-8 text-center dark:bg-slate-800">
          {/* Empty state: no items have been added to the active cart. */}
          <p className="text-slate-600 dark:text-slate-300">
            Your collection is empty.
          </p>
          <Link
            to="/shopall"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Browse products
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <ul className="divide-y divide-slate-200 dark:divide-slate-700">
            {items.map((item) => (
              <li
                key={item.key}
                className="flex min-w-0 gap-3 py-5 first:pt-0 sm:gap-6"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 shrink-0 rounded-xl bg-slate-100 object-contain p-2 dark:bg-slate-800 sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 flex-wrap items-start justify-between gap-x-3 gap-y-1">
                    <div className="min-w-0 flex-1">
                      <h2 className="wrap-break-word font-semibold text-slate-900 dark:text-white">
                        {item.name}
                      </h2>
                      {item.size && (
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          Size: {item.size}
                        </p>
                      )}
                    </div>
                    <p className="shrink-0 text-right font-semibold text-slate-900 dark:text-slate-100">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {formatPrice(item.price)} each
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <div
                      className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-600"
                      aria-label={`Quantity for ${item.name}`}
                    >
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        disabled={item.quantity <= 1}
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="h-9 w-9 rounded-l-lg text-lg hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:hover:bg-slate-700"
                      >
                        −
                      </button>
                      <span className="min-w-9 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        disabled={item.quantity >= 99}
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="h-9 w-9 rounded-r-lg text-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="text-sm font-medium text-slate-500 underline-offset-4 hover:text-red-600 hover:underline dark:text-slate-400 dark:hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl bg-slate-100 p-5 dark:bg-slate-800 sm:p-6">
            {/* The summary intentionally uses no separate shipping or tax charges. */}
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Order summary
            </h2>
            <div className="mt-4 flex justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>Subtotal</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="mt-3 flex justify-between border-t border-slate-300 pt-4 font-semibold text-slate-900 dark:border-slate-600 dark:text-white">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Demo checkout only. No payment will be collected.
            </p>
            <button
              type="button"
              onClick={handleCheckout}
              className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Complete checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
};

const Receipt = () => {
  const {lastOrder} = useCart();

  if (!lastOrder) {
    return (
      <main className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          No recent order
        </h1>
        <Link
          to="/shopall"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900"
        >
          Browse products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="receipt-paper rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
        <div className="border-b border-slate-200 pb-6 text-center dark:border-slate-700">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Order complete
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl dark:text-white">
            Thanks for your patronage!
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Your order has been recorded.
          </p>
          <p className="mt-3 wrap-break-word text-sm text-slate-500 dark:text-slate-400">
            Order {lastOrder.number} ·{" "}
            {new Date(lastOrder.date).toLocaleString()}
          </p>
        </div>

        <h2 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
          Receipt
        </h2>
        <ul className="mt-3 divide-y divide-slate-200 dark:divide-slate-700">
          {lastOrder.items.map((item) => (
            <li
              key={item.key}
              className="grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] items-center gap-x-3 gap-y-1 py-4 first:pt-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-4"
            >
              <img
                src={item.image}
                alt=""
                className="row-span-2 h-12 w-12 rounded-lg bg-slate-100 object-contain p-1 dark:bg-slate-800 sm:row-span-1 sm:h-14 sm:w-14"
              />
              <div className="min-w-0 flex-1">
                <p className="wrap-break-word font-medium text-slate-900 dark:text-slate-100">
                  {item.name}
                  {item.size ? ` · Size ${item.size}` : ""}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Qty {item.quantity} × {formatPrice(item.price)}
                </p>
              </div>
              <p className="col-start-2 row-start-2 font-semibold text-slate-900 dark:text-white sm:col-start-3 sm:row-start-1">
                {formatPrice(item.price * item.quantity)}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-2 flex justify-between border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900 dark:border-slate-700 dark:text-white">
          <span>Total</span>
          <span>{formatPrice(lastOrder.total)}</span>
        </div>
        <div className="receipt-actions mt-7 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800"
          >
            Print receipt
          </button>
          <Link
            to="/shopall"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
};

export {Cart, Receipt};
