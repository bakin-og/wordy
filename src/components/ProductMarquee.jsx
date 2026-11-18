import {useState} from "react";
import {Link} from "react-router-dom";
import {accessoryProducts} from "./accessoryProducts";
import {footwearProducts} from "./footwearProducts";
import blockparty from "../images/Blockparty.png";
import highfideli from "../images/Highfideli.png";
import selfpotrait from "../images/Selfpotrait.png";
import tooltee from "../images/Tooltee.png";
import tomatotee from "../images/Tomatotee.png";

const featuredProducts = [
  {id: 1, name: "Toolbox Tee", price: "₦57,200", image: tooltee},
  {id: 3, name: "Black party hoodie", price: "₦114,400", image: blockparty},
  {id: 5, name: "Self Portrait Tee", price: "₦67,200", image: selfpotrait},
  {id: 6, name: "Tomato Tee", price: "₦75,100", image: tomatotee},
  {id: 7, name: "High fideli Tee", price: "₦85,800", image: highfideli},
];

const shuffle = (items) => {
  // Create a new array before shuffling so the original catalog is unchanged.
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[index],
    ];
  }

  return shuffledItems;
};

const ProductMarquee = () => {
  const [products] = useState(() => {
    // Mix featured, accessory, and footwear products, then show ten unique items.
    const catalog = [
      ...featuredProducts,
      ...accessoryProducts,
      ...footwearProducts,
    ].filter(
      (product, index, items) =>
        items.findIndex((candidate) => candidate.image === product.image) ===
        index,
    );

    return shuffle(catalog).slice(0, 10);
  });

  const renderProduct = (product, duplicate = false) => {
    // Duplicate cards are visual copies for the seamless looping animation.
    const content = (
      <>
        <div className="aspect-square overflow-hidden rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
          <img
            src={product.image}
            alt=""
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex items-start justify-between gap-2 px-1 pt-2">
          <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-900 dark:text-slate-100">
            {product.name}
          </span>
          <span className="shrink-0 text-sm font-semibold text-slate-700 dark:text-slate-300">
            {product.price}
          </span>
        </div>
      </>
    );

    return (
      <Link
        key={duplicate ? `${product.id}-copy` : product.id}
        to={`/products/${product.id}`}
        aria-label={`Shop ${product.name}`}
        tabIndex={duplicate ? -1 : undefined}
        className="product-marquee-card group block w-40 shrink-0 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-48 dark:border-slate-700 dark:bg-slate-900"
      >
        {content}
      </Link>
    );
  };

  return (
    <section
      aria-labelledby="product-marquee-heading"
      className="mt-10 sm:mt-14"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3 sm:mb-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            A little more to love
          </p>
          <h2
            id="product-marquee-heading"
            className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-white"
          >
            Discover something new
          </h2>
        </div>
        <Link
          to="/shopall"
          className="inline-flex min-h-9 items-center rounded-full px-3 text-xs font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-300 dark:hover:bg-blue-950"
        >
          Shop all
        </Link>
      </div>

      <div
        className="product-marquee overflow-hidden"
        role="group"
        aria-label="Featured products"
      >
        <div className="product-marquee-viewport overflow-hidden rounded-2xl">
          <div className="product-marquee-track flex w-max">
            <div className="product-marquee-group flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4">
              {products.map((product) => renderProduct(product))}
            </div>
            <div
              aria-hidden="true"
              className="product-marquee-group flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
            >
              {products.map((product) => renderProduct(product, true))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMarquee;
