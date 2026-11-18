import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext";
import {allProducts, catalogProducts} from "./catalogData";

const Shopall = ({season = null, category = null, productId = null}) => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);
  const {addToCart} = useCart();

  useEffect(() => {
    // A temporary toast confirms cart actions and clears itself automatically.
    if (!addedProduct) {
      return undefined;
    }

    const timeoutId = setTimeout(() => setAddedProduct(null), 2800);
    return () => clearTimeout(timeoutId);
  }, [addedProduct]);

  const seasonProductIds = {
    3: [5, 23, 1, 17, 8, 29, 14, 3, 20, 11, 26, 6, 18, 30, 2],
    4: [4, 7, 9, 10, 12, 13, 15, 16, 19, 21, 22, 24, 25, 27, 28],
  };
  // Resolve the page mode once: a single product, season, category, or all products.
  const selectedProduct = productId
    ? catalogProducts.find((product) => String(product.id) === productId)
    : null;
  const visibleProducts = productId
    ? selectedProduct
      ? [selectedProduct]
      : []
    : season
      ? seasonProductIds[season]
          .map((seasonProductId) =>
            allProducts.find((product) => product.id === seasonProductId),
          )
          .filter(Boolean)
      : category
        ? allProducts.filter((product) => product.category === category)
        : allProducts;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-6 pt-5 sm:px-6 sm:pb-8 sm:pt-7 lg:px-8 lg:pb-10 lg:pt-9">
      {/* Reusable cart feedback shown after add-to-cart actions. */}
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
      {season ? (
        <section className="mb-6 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800 sm:mb-8 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                The Wordy archive
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Season {season}
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
                Revisit the pieces, colors, and ideas from Season {season}.
                Explore the collection and choose a favorite to add to your
                cart.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/shopall"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700"
              >
                Shop all
              </Link>
              <Link
                to={season === 3 ? "/season-4" : "/season-3"}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Explore Season {season === 3 ? 4 : 3}
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2 sm:mb-6 sm:gap-3">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              {productId ? "Product details" : "The collection"}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {productId
                ? (selectedProduct?.name ?? "Product not found")
                : (category ?? "Shop all")}
            </h1>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {productId
              ? selectedProduct
                ? "1 item"
                : "This item is unavailable"
              : `${visibleProducts.length} products`}
          </p>
        </div>
      )}

      {season && (
        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            Season {season} collection
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {visibleProducts.length} pieces
          </p>
        </div>
      )}

      {productId && !selectedProduct ? (
        <div className="rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
          <p className="text-slate-700 dark:text-slate-200">
            This product could not be found in the current collection.
          </p>
          <Link
            to="/shopall"
            className="mt-4 inline-flex min-h-10 items-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Browse all products
          </Link>
        </div>
      ) : (
        <ul
          id={category === "Footwear" ? "footwear-products" : undefined}
          aria-label={
            productId
              ? `${selectedProduct.name} product details`
              : category
                ? `${category} products`
                : "All products"
          }
          className="scroll-mt-36 grid grid-cols-1 gap-x-4 gap-y-5 min-[380px]:grid-cols-2 sm:gap-x-5 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6"
        >
          {visibleProducts.map((product) => {
          const availableSizes = (product.sizes ?? []).filter(Boolean);
          const selectedSize = selectedSizes[product.id];
          const isSoldOut = product.tag?.toLowerCase() === "soldout";

          return (
            <li key={product.id} className="min-w-0">
              <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 p-3 transition-colors duration-300 group-hover:bg-slate-200 sm:p-4 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent via-transparent to-blue-100/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:to-slate-600/70"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="relative z-10 h-full w-full object-contain drop-shadow-sm transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  {product.tag && (
                    <span
                      className={`absolute left-2 top-2 z-20 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:left-3 sm:top-3 sm:text-xs ${
                        product.tag.toLowerCase() === "soldout"
                          ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
                          : "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                      }`}
                    >
                      {product.tag.toLowerCase() === "soldout"
                        ? "Sold out"
                        : product.tag}
                    </span>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col px-1 pt-2 sm:px-1.5 sm:pt-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="min-h-10 min-w-0 flex-1 text-sm font-medium leading-5 text-slate-900 sm:text-base dark:text-slate-100">
                      {product.name}
                    </h2>
                    <p className="shrink-0 text-right text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                      {product.price.startsWith("₦")
                        ? product.price
                        : `₦${product.price}`}
                    </p>
                  </div>
                  <div className="product-size-options mt-1 flex h-16 min-w-0 flex-wrap content-center items-center justify-center gap-1 overflow-hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                    {availableSizes.length > 0 ? (
                      <>
                        <span className="mr-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                          Size
                        </span>
                        {availableSizes.map((size) => {
                          const isSelected = selectedSizes[product.id] === size;

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
                              className={`min-h-7 min-w-7 shrink-0 rounded-md border px-1 text-[11px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                                isSelected
                                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                                  : "border-slate-300 bg-white text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </>
                    ) : (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        One size
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    disabled={
                      isSoldOut || (availableSizes.length > 0 && !selectedSize)
                    }
                    onClick={() => {
                      addToCart(product, selectedSize ?? null);
                      setAddedProduct({
                        id: product.id,
                        name: product.name,
                        size: selectedSize ?? null,
                      });
                    }}
                    className={`mt-2 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-full px-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:hover:bg-slate-300 sm:mt-2.5 sm:px-4 sm:text-sm dark:text-slate-900 dark:hover:bg-slate-200 dark:disabled:bg-slate-700 dark:disabled:text-slate-400 ${
                      addedProduct?.id === product.id
                        ? "scale-[1.02] bg-emerald-700 dark:bg-emerald-300"
                        : "bg-slate-900 dark:bg-white"
                    }`}
                  >
                    {addedProduct?.id === product.id ? (
                      <>
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                        Added to cart
                      </>
                    ) : isSoldOut ? (
                      "Sold out"
                    ) : availableSizes.length > 0 && !selectedSize ? (
                      "Select a size"
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                </div>
              </article>
            </li>
          );
          })}
        </ul>
      )}
    </main>
  );
};

export default Shopall;
