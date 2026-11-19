import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "./CartContext";
import {footwearProducts} from "./footwearProducts";
import sneaker from "../images/sneaker2.webp";
import brightSneaker from "../images/womensneaker2.png";

const productPanels = [
  "bg-linear-to-br from-sky-50 via-white to-indigo-100 dark:from-slate-800 dark:via-slate-800 dark:to-indigo-950",
  "bg-linear-to-br from-amber-50 via-white to-orange-100 dark:from-slate-800 dark:via-slate-800 dark:to-amber-950",
  "bg-linear-to-br from-slate-100 via-white to-blue-100 dark:from-slate-800 dark:via-slate-800 dark:to-blue-950",
];

const FootwearCollection = () => {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);
  const {addToCart} = useCart();

  useEffect(() => {
    // Clear the add-to-cart confirmation after a fixed display period.
    if (!addedProduct) {
      return undefined;
    }

    const timeoutId = setTimeout(() => setAddedProduct(null), 2800);
    return () => clearTimeout(timeoutId);
  }, [addedProduct]);

  return (
    <main
      id="footwear-products"
      className="mx-auto w-full max-w-7xl scroll-mt-36 px-4 pb-10 pt-9 sm:px-6 sm:pb-14 sm:pt-12 lg:px-8 lg:pb-16"
    >
      {/* Confirmation toast for the current footwear selection. */}
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

      <header className="mb-7 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:mb-9 sm:flex-row sm:items-end sm:justify-between sm:pb-8 dark:border-slate-800">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Curated for your rotation
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            The footwear collection
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            Distinctive pairs, considered details, and colorways that make
            getting dressed feel effortless.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {String(footwearProducts.length).padStart(2, "0")} styles
          </span>
          <span className="inline-flex min-h-10 items-center rounded-full bg-slate-100 px-4 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            EU sizes vary · 38–42
          </span>
        </div>
      </header>

      <ul
        aria-label="Footwear products"
        className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20"
      >
        {footwearProducts.map((product, index) => {
          // Stagger desktop cards for a more editorial layout.
          const selectedSize = selectedSizes[product.id];
          const staggerClass =
            index % 3 === 1
              ? "lg:translate-y-12"
              : index % 3 === 2
                ? "lg:-translate-y-2"
                : "";

          return (
            <li
              key={product.id}
              className={`min-w-0 transition-transform duration-500 ${staggerClass}`}
            >
              <article
                style={{animationDelay: `${Math.min(index, 8) * 45}ms`}}
                className="product-card group flex h-full min-w-0 flex-col rounded-[1.75rem] border border-slate-200 bg-white p-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:rounded-[2rem] sm:p-3"
              >
                <div
                  className={`relative aspect-[1.12] overflow-hidden rounded-[1.35rem] p-4 sm:rounded-[1.6rem] sm:p-5 ${productPanels[index % productPanels.length]}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-10 -right-8 h-40 w-40 rounded-full border border-white/80 bg-white/30 transition-transform duration-500 group-hover:scale-125"
                  />
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="product-card-image relative z-10 h-full w-full object-contain drop-shadow-lg"
                  />
                  {product.tag && (
                    <span className="absolute left-3 top-3 z-20 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-800 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100">
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 z-20 rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-slate-600 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-300">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(footwearProducts.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-4 sm:px-3 sm:pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        Wordy footwear
                      </p>
                      <h3 className="mt-1 min-h-12 text-base font-semibold leading-6 text-slate-900 sm:text-lg dark:text-white">
                        {product.name}
                      </h3>
                    </div>
                    <p className="shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-900 dark:bg-slate-800 dark:text-white">
                      {product.price}
                    </p>
                  </div>
                  <p className="mt-2 min-h-10 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    {product.description}
                  </p>

                  <div className="mt-4">
                    <p className="mb-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      Choose a size
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => {
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
                            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                              isSelected
                                ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!selectedSize}
                    onClick={() => {
                      addToCart(product, selectedSize ?? null);
                      setAddedProduct({
                        id: product.id,
                        name: product.name,
                        size: selectedSize ?? null,
                      });
                    }}
                    className={`mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500 dark:text-slate-900 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 ${
                      addedProduct?.id === product.id
                        ? "bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-300 dark:hover:bg-emerald-200"
                        : "bg-slate-900 hover:bg-blue-700 dark:bg-white dark:hover:bg-slate-200"
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
                    ) : selectedSize ? (
                      "Add to cart"
                    ) : (
                      "Select a size"
                    )}
                  </button>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const Footwear = () => (
  <>
    <div className="mx-auto w-full max-w-7xl px-4 pb-2 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pt-9">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <Link
              to="/apparel"
              className="rounded-sm hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-white"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li
            aria-current="page"
            className="font-medium text-slate-900 dark:text-white"
          >
            Footwear
          </li>
        </ol>
      </nav>

      <section
        aria-labelledby="footwear-heading"
        className="relative isolate mt-4 overflow-hidden rounded-[1.75rem] bg-slate-950 text-white shadow-xl sm:mt-5 sm:rounded-[2rem]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-br from-slate-950 via-slate-900 to-indigo-950"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="grid items-center lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex min-w-0 flex-col items-start p-6 sm:p-9 lg:p-12">
            <span className="inline-flex min-h-8 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-300"
              />
              The Wordy footwear edit
            </span>
            <h1
              id="footwear-heading"
              className="mt-5 max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Find your next{" "}
              <span className="text-blue-300">everyday favorite.</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Fresh sneakers and standout footwear bring an easy finish to
              whatever the day has in store. Find your pair and choose your
              size.
            </p>

            <div className="mt-6 flex w-full flex-wrap gap-3">
              <a
                href="#footwear-products"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore {footwearProducts.length} styles
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </a>
              <Link
                to="/shopall"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Shop everything
              </Link>
            </div>

            <p className="mt-5 text-xs font-medium text-slate-400">
              Expressive design <span aria-hidden="true">·</span> Sizes vary by
              style, EU 38–42{" "}
              <span aria-hidden="true">·</span> Made to style your way
            </p>
          </div>

          <div className="relative min-h-72 overflow-hidden sm:min-h-104 lg:min-h-136">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-3xl border border-white/10 bg-white/5 sm:inset-6 sm:rounded-[1.75rem]"
            />
            <img
              src={sneaker}
              alt="Two-tone street sneakers from the footwear collection"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-contain p-7 transition-transform duration-500 hover:scale-[1.03] sm:p-10 lg:p-8"
            />
            <div className="absolute bottom-4 left-4 z-10 rounded-xl border border-white/15 bg-slate-950/75 px-3 py-2 backdrop-blur sm:bottom-7 sm:left-7 sm:px-4 sm:py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200">
                In the spotlight
              </p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                Two-tone street sneakers
              </p>
            </div>
            <div className="absolute right-4 top-4 z-10 w-24 overflow-hidden rounded-xl border border-white/20 bg-white p-2 text-slate-900 shadow-xl sm:right-7 sm:top-7 sm:w-32 sm:rounded-2xl sm:p-2.5">
              <img
                src={brightSneaker}
                alt=""
                className="aspect-square w-full rounded-lg bg-amber-50 object-contain"
              />
              <p className="mt-1.5 truncate text-[10px] font-semibold sm:text-xs">
                A bright finish
              </p>
            </div>
          </div>
        </div>
      </section>

      <ul
        aria-label="Footwear highlights"
        className="mt-4 grid grid-cols-1 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4"
      >
        <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-300">
            01
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Easy to style
            </h2>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Everyday silhouettes with expressive details.
            </p>
          </div>
        </li>
        <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-300">
            02
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Fresh colorways
            </h2>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Find a quiet neutral or a brighter statement.
            </p>
          </div>
        </li>
        <li className="flex min-w-0 items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-300">
            03
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              Choose your fit
            </h2>
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              Standard EU sizes, with availability varying by style.
            </p>
          </div>
        </li>
      </ul>
    </div>

    <FootwearCollection />
  </>
);

export default Footwear;
