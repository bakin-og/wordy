import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext";
import {accessoryProducts} from "./accessoryProducts";
import watch from "../images/wristwatch.png";
import earrings from "../images/earing.png";
import scarfTwo from "../images/scarf2.png";

const categories = [
  "All accessories",
  "Bags",
  "Jewelry",
  "Headwear",
  "Eyewear",
  "Belts & wristwear",
  "Everyday",
];

const Accessories = () => {
  const [activeCategory, setActiveCategory] = useState("All accessories");
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);
  const {addToCart} = useCart();
  const visibleProducts =
    activeCategory === "All accessories"
      ? accessoryProducts
      : accessoryProducts.filter(
          (product) => product.category === activeCategory,
        );

  useEffect(() => {
    // Hide the confirmation after a few seconds without leaving a timer behind.
    if (!addedProduct) {
      return undefined;
    }

    const timeoutId = setTimeout(() => setAddedProduct(null), 2800);
    return () => clearTimeout(timeoutId);
  }, [addedProduct]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-7 lg:px-8 lg:pb-16 lg:pt-9">
      {/* A short confirmation gives feedback after an accessory is added. */}
      {addedProduct && (
        <div
          role="status"
          aria-live="polite"
          className="cart-toast-enter fixed right-4 top-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl border border-emerald-200 bg-white p-3 shadow-xl dark:border-emerald-800 dark:bg-slate-900 sm:right-6 sm:top-6"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              Added to your cart
            </p>
            <p className="max-w-48 truncate text-xs text-slate-500 dark:text-slate-400">
              {addedProduct.name}
              {addedProduct.size ? ` · Size ${addedProduct.size}` : ""}
            </p>
          </div>
          <Link
            to="/cart"
            className="shrink-0 rounded-lg px-2 py-1 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-emerald-300 dark:hover:bg-emerald-950"
          >
            View cart
          </Link>
        </div>
      )}

      <section
        aria-labelledby="accessories-heading"
        className="overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800"
      >
        {/* Promotional hero: copy and a small image collage introduce the category. */}
        <div className="grid items-center gap-6 p-5 sm:gap-8 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:p-10 lg:p-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              The finishing touches
            </p>
            <h1
              id="accessories-heading"
              className="mt-3 text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              Little things.
              <br />
              Big energy.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 dark:text-slate-300">
              Meet the extras that make a look your own: expressive details,
              everyday favorites, and thoughtful pieces made to go everywhere.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#accessory-products"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Explore accessories
              </a>
              <Link
                to="/shopall"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-800 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700"
              >
                Shop everything
              </Link>
            </div>
            <p className="mt-5 text-xs font-medium text-slate-500 dark:text-slate-400">
              Thoughtful details · Easy-to-wear favorites · Made for you
            </p>
          </div>

          <div className="grid min-h-64 grid-cols-5 grid-rows-2 gap-3 sm:min-h-80 sm:gap-4">
            <div className="col-span-3 row-span-2 overflow-hidden rounded-2xl bg-white p-4 dark:bg-slate-700 sm:p-6">
              <img
                src={watch}
                alt="Wordy everyday wristwatch"
                fetchPriority="high"
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl bg-blue-100 p-3 dark:bg-slate-700 sm:p-4">
              <img
                src={earrings}
                alt="Sculpted earrings"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-2xl bg-amber-100 p-3 dark:bg-slate-700 sm:p-4">
              <img
                src={scarfTwo}
                alt="Printed wrap scarf"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="accessory-products"
        aria-labelledby="accessory-products-heading"
        className="scroll-mt-36 pt-9 sm:pt-12"
      >
        {/* Category controls update the visibleProducts array above. */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Find your finishing touch
            </p>
            <h2
              id="accessory-products-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white"
            >
              Accessories
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {visibleProducts.length}{" "}
            {visibleProducts.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div
          aria-label="Filter accessories by category"
          className="mt-5 flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                activeCategory === category
                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ul
          aria-label={`${activeCategory} products`}
          className="mt-4 grid grid-cols-1 gap-x-4 gap-y-5 min-[380px]:grid-cols-2 sm:mt-6 sm:gap-x-5 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
        >
          {visibleProducts.map((product) => {
            // Per-product state lets several items be configured independently.
            const selectedSize = selectedSizes[product.id];
            const availableSizes = product.sizes ?? [];

            return (
              <li key={product.id} className="min-w-0">
                <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 p-4 transition-colors duration-300 group-hover:bg-slate-200 sm:p-5 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                    {product.tag && (
                      <span className="absolute left-2 top-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-800 shadow-sm sm:left-3 sm:top-3 sm:text-xs dark:bg-slate-700 dark:text-white">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col px-1 pt-3 sm:px-1.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                      {product.category}
                    </p>
                    <div className="mt-1 flex items-start justify-between gap-2">
                      <h3 className="min-h-10 min-w-0 flex-1 text-sm font-medium leading-5 text-slate-900 sm:text-base dark:text-slate-100">
                        {product.name}
                      </h3>
                      <p className="shrink-0 text-right text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                        {product.price}
                      </p>
                    </div>
                    <p className="mt-1 min-h-10 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {product.description}
                    </p>

                    {availableSizes.length > 0 ? (
                      <div className="mt-3 flex min-h-9 flex-wrap items-center gap-1.5">
                        <span className="mr-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          Size
                        </span>
                        {availableSizes.map((size) => {
                          const isSelected = selectedSize === size;

                          return (
                            <button
                              key={size}
                              type="button"
                              aria-label={`${size} size for ${product.name}`}
                              aria-pressed={isSelected}
                              onClick={() =>
                                setSelectedSizes((current) => ({
                                  ...current,
                                  [product.id]:
                                    current[product.id] === size ? null : size,
                                }))
                              }
                              className={`min-h-8 min-w-8 rounded-md border px-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                                isSelected
                                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                                  : "border-slate-300 bg-white text-slate-800 hover:border-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white"
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="mt-3 flex min-h-9 items-center text-xs text-slate-500 dark:text-slate-400">
                        One size
                      </p>
                    )}

                    <button
                      type="button"
                      disabled={availableSizes.length > 0 && !selectedSize}
                      onClick={() => {
                        addToCart(product, selectedSize ?? null);
                        setAddedProduct({
                          name: product.name,
                          size: selectedSize ?? null,
                        });
                      }}
                      className={`mt-2 inline-flex min-h-10 w-full items-center justify-center rounded-full px-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:hover:bg-slate-300 dark:text-slate-900 dark:hover:bg-slate-200 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 ${
                        addedProduct?.name === product.name
                          ? "bg-emerald-700 dark:bg-emerald-300"
                          : "bg-slate-900 dark:bg-white"
                      }`}
                    >
                      {addedProduct?.name === product.name
                        ? "Added to cart"
                        : availableSizes.length > 0 && !selectedSize
                          ? "Select a size"
                          : "Add to cart"}
                    </button>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-slate-100 p-5 sm:flex-row sm:items-center sm:p-7 dark:bg-slate-800">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Still looking for something?
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Explore every piece in the Wordy collection.
            </p>
          </div>
          <Link
            to="/shopall"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Browse shop all
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Accessories;
