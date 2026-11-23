import {Link} from "react-router-dom";
import hero from "../images/heroo.png";
import woman from "../images/woman1.png";
import bag from "../images/bag1.png";
import shirt from "../images/shirt1.png";
import hoodie from "../images/hoodie1.png";
import socks from "../images/socks1.png";
import mug from "../images/cup1.png";
import man from "../images/man2.png";
import plant from "../images/plant.png";
import sockB from "../images/socks2.png";
import archive from "../images/TidyUpBack.png";
import sneaker from "../images/sneaker2.webp";
import ProductMarquee from "./ProductMarquee";

const seasonProducts = [
  {id: 5, name: "Self Portrait Tee", price: "₦42,900", image: woman},
  {id: 2, name: "Hidden Layers Tote", price: "₦92,900", image: bag},
  {id: 1, name: "Toolbox Tee", price: "₦57,200", image: shirt},
  {id: 6, name: "Tomato Tee", price: "₦85,800", image: hoodie},
  {id: 10, name: "Low Res Socks", price: "₦22,900", image: socks},
  {id: 9, name: "Self Portrait Mug", price: "₦42,900", image: mug},
];

const Apparel = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8">
      {/* Primary campaign image for the latest Wordy collection. */}
      <img
        src={hero}
        alt="Artists wearing pieces from the latest Wordy collection"
        fetchPriority="high"
        className="aspect-4/3 w-full rounded-xl object-cover sm:aspect-16/8 sm:rounded-2xl lg:aspect-16/7"
      />

      <section
        aria-labelledby="season-heading"
        className="py-10 text-center sm:py-14 lg:py-16"
      >
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-sm dark:text-slate-400">
          New season available now
        </p>
        <h1
          id="season-heading"
          className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
        >
          Five artists. One ode to creative collection.
        </h1>

        <ul className="mt-8 grid grid-cols-1 gap-x-3 gap-y-7 text-left min-[380px]:grid-cols-2 sm:mt-10 sm:gap-x-5 sm:gap-y-9 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {seasonProducts.map((product, index) => (
            <li
              key={product.name}
              className="min-w-0"
            >
              <Link
                to={`/products/${product.id}`}
                className="product-card group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                style={{animationDelay: `${Math.min(index, 8) * 45}ms`}}
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-slate-100 p-3 sm:rounded-xl sm:p-5 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="product-card-image h-full w-full object-contain"
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
                  <h2 className="text-sm font-medium text-slate-900 sm:text-base dark:text-slate-100">
                    {product.name}
                  </h2>
                  <p className="text-sm font-semibold text-slate-900 sm:text-base dark:text-slate-100">
                    {product.price}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/shopall"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:mt-10 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Shop season 5
        </Link>
      </section>

      <section aria-label="Explore the collection">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <Link
            to="/apparel"
            className="group relative isolate min-h-64 overflow-hidden rounded-xl bg-slate-100 sm:min-h-80 dark:bg-slate-800"
          >
            <img
              src={man}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-xl font-semibold text-white sm:px-6 sm:pb-6 sm:text-2xl">
              Shop apparel
            </span>
          </Link>

          <Link
            to="/footwear"
            className="group relative isolate min-h-64 overflow-hidden rounded-xl bg-slate-100 sm:min-h-80 dark:bg-slate-800"
          >
            <img
              src={sneaker}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-xl font-semibold text-white sm:px-6 sm:pb-6 sm:text-2xl">
              Shop footwear
            </span>
          </Link>

          <Link
            to="/accessories"
            className="group relative isolate min-h-64 overflow-hidden rounded-xl bg-slate-100 sm:min-h-80 dark:bg-slate-800"
          >
            <img
              src={sockB}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-5 pb-5 pt-16 text-xl font-semibold text-white sm:px-6 sm:pb-6 sm:text-2xl">
              Shop accessories
            </span>
          </Link>
        </div>

        <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          <div className="group relative isolate flex min-h-56 flex-col justify-between overflow-hidden rounded-xl bg-slate-900 p-5 sm:min-h-64 sm:p-7">
            <img
              src={archive}
              alt=""
              loading="lazy"
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-linear-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20"
            />
            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                From the archive
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Past collections
              </h2>
            </div>
            <div className="relative z-10 mt-6 flex flex-wrap gap-3">
              <Link
                to="/season-3"
                className="inline-flex min-h-10 items-center rounded-full border border-white/70 bg-black/20 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Season 3
              </Link>
              <Link
                to="/season-4"
                className="inline-flex min-h-10 items-center rounded-full border border-white/70 bg-black/20 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Season 4
              </Link>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-xl bg-slate-100 sm:min-h-64 sm:grid-cols-2 dark:bg-slate-800">
            <div className="flex flex-col items-start justify-center p-5 sm:p-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Made with purpose
              </p>
              <h2 className="mt-2 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl dark:text-white">
                100% of profits support carbon removal and tree planting.
              </h2>
              <a
                href="https://tist.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Learn more about TIST
              </a>
            </div>
            <div className="min-h-52 sm:min-h-full">
              <img
                src={plant}
                alt="A green plant representing the collection's tree-planting support"
                loading="lazy"
                className="h-full max-h-80 w-full object-cover sm:max-h-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="how-to-order-heading"
        className="mt-8 overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 sm:mt-10"
      >
        <div className="grid md:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
          <div className="p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              A simple guide
            </p>
            <h2
              id="how-to-order-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
            >
              How to order
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Find a piece you love, add it to your collection, then review
              everything before completing checkout.
            </p>

            <ol className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6">
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Browse the collection
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    Choose a featured item or open Shop All to explore the full
                    range. Use the season links to revisit past collections.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Choose your size
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    On a product card, select an available size before adding
                    sized apparel to your cart. One-size items do not need a
                    selection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Add items to your collection
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    Select “Add to cart” on each item. Open Collection in the
                    navigation to change quantities or remove items.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Review and complete checkout
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    Check your quantities and total, then complete the demo
                    checkout to see your order receipt. No payment is collected.
                  </p>
                </div>
              </li>
            </ol>

            <Link
              to="/shopall"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Start shopping
            </Link>
          </div>

          <div className="relative min-h-64 bg-slate-200 dark:bg-slate-700 md:min-h-full">
            <img
              src={archive}
              alt="Back view of a bright blue Tidy Up sweatshirt with a bold flower graphic"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <p className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-5 pb-5 pt-12 text-sm font-medium text-white sm:px-7 sm:pb-7">
              Explore expressive pieces from the Wordy collections.
            </p>
          </div>
        </div>
      </section>
      <ProductMarquee />
    </main>
  );
};

export default Apparel;
