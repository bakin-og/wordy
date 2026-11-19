import {useMemo, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {useCart} from "./CartContext";
import {catalogProducts} from "./catalogData";

const normalizeSearchText = (value) =>
  String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [selectedSizes, setSelectedSizes] = useState({});
  const {addToCart} = useCart();

  const query = (searchParams.get("q") ?? "").trim();
  const normalizedQuery = normalizeSearchText(query);

  const results = useMemo(() => {
    // Match every search term across useful product fields.
    if (!query) {
      return catalogProducts.slice(0, 12);
    }

    // A non-empty query made only of punctuation should not show unrelated items.
    if (!normalizedQuery) {
      return [];
    }

    const queryTerms = normalizedQuery.split(" ");

    return catalogProducts.filter((product) => {
      const searchableText = normalizeSearchText(
        [
          product.id,
          product.name,
          product.category ?? "",
          product.tag ?? "",
          product.description ?? "",
        ].join(" "),
      );

      return queryTerms.every((term) => searchableText.includes(term));
    });
  }, [normalizedQuery, query]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-7 lg:px-8">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Search results
          </p>
          <h1 className="break-words text-3xl font-semibold tracking-tight text-slate-900 [overflow-wrap:anywhere] dark:text-white">
            {query ? `Results for “${query}”` : "Browse the collection"}
          </h1>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {results.length} product{results.length === 1 ? "" : "s"}
        </p>
      </div>

      {results.length === 0 ? (
        <div className="min-w-0 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center sm:p-8 dark:border-slate-700 dark:bg-slate-900/80">
          <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
            No items matched your search.
          </p>
          <p className="mt-2 break-words text-sm text-slate-600 [overflow-wrap:anywhere] dark:text-slate-300">
            {query
              ? `We couldn't find a product matching “${query}”. Try another keyword such as “hat,” “bag,” or “sneaker.”`
              : "Try another keyword such as “hat,” “bag,” or “sneaker.”"}
          </p>
          <Link
            to="/shopall"
            className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            View all products
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-x-4 gap-y-5 min-[380px]:grid-cols-2 sm:gap-x-5 sm:gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-6">
          {results.map((product, index) => {
            const availableSizes = (product.sizes ?? []).filter(Boolean);
            const selectedSize = selectedSizes[product.id] ?? null;
            const isSoldOut =
              String(product.tag ?? "").toLowerCase() === "soldout";

            return (
              <li key={product.id} className="min-w-0">
                <article
                  style={{animationDelay: `${Math.min(index, 8) * 45}ms`}}
                  className="product-card group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-100 p-3 transition-colors group-hover:bg-slate-200 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="product-card-image h-full w-full object-contain"
                    />
                    {product.tag && (
                      <span
                        className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide sm:left-3 sm:top-3 sm:text-xs ${
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
                      <h2 className="min-h-10 min-w-0 flex-1 text-sm font-medium leading-5 text-slate-900 dark:text-slate-100">
                        {product.name}
                      </h2>
                      <p className="shrink-0 text-right text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {product.price.startsWith("₦")
                          ? product.price
                          : `₦${product.price}`}
                      </p>
                    </div>

                    {availableSizes.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {availableSizes.map((size) => {
                          const isSelected = selectedSize === size;

                          return (
                            <button
                              key={size}
                              type="button"
                              aria-pressed={isSelected}
                              onClick={() =>
                                setSelectedSizes((current) => ({
                                  ...current,
                                  [product.id]:
                                    current[product.id] === size ? null : size,
                                }))
                              }
                              className={`min-h-7 min-w-7 rounded-md border px-1.5 text-[11px] font-semibold transition-colors ${
                                isSelected
                                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                                  : "border-slate-300 bg-white text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="mt-3 flex gap-2">
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-slate-300 px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        View details
                      </Link>
                      <button
                        type="button"
                        disabled={
                          isSoldOut ||
                          (availableSizes.length > 0 && !selectedSize)
                        }
                        onClick={() => addToCart(product, selectedSize ?? null)}
                        className="inline-flex min-h-10 items-center justify-center rounded-full bg-slate-900 px-3 text-xs font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
                      >
                        {isSoldOut
                          ? "Sold out"
                          : availableSizes.length > 0 && !selectedSize
                            ? "Select size"
                            : "Add to cart"}
                      </button>
                    </div>
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

export default SearchResults;
