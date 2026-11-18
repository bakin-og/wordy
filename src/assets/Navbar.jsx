import {useState} from "react";
import cart from "../images/cart.png";
import {Link, NavLink} from "react-router-dom";
import {useCart} from "../components/CartContext";

const Navbar = () => {
  const {itemCount} = useCart();
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light",
  );

  const toggleTheme = () => {
    // Update both the document theme and its saved preference.
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);

    try {
      localStorage.setItem("wordy-theme", nextTheme);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 text-slate-900 shadow-sm backdrop-blur-md dark:border-slate-700/80 dark:bg-slate-900/95 dark:text-slate-100">
      <nav aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6 md:gap-6 md:py-4 lg:px-8">
          <Link
            to="/apparel"
            className="group flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold tracking-tight text-white transition-transform duration-200 group-hover:-rotate-3 group-hover:scale-105 dark:bg-white dark:text-slate-900">
              W
            </span>
            <span>
              <span className="block text-xl font-bold leading-5 tracking-tight text-slate-900 dark:text-white">
                Wordy
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Wear your words
              </span>
            </span>
          </Link>

          <div className="grid w-full grid-cols-[auto_auto] items-center justify-end gap-2 sm:w-auto sm:grid-cols-[minmax(12rem,20rem)_auto_auto] sm:gap-2.5">
            <Link
              to="/cart"
              aria-label={`Collection, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              className="col-start-1 row-start-1 inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-start-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <span className="relative">
                <img src={cart} alt="" className="w-5 dark:invert" />
                <span className="absolute -right-2 -top-2 min-w-5 rounded-full bg-blue-600 px-1 text-center text-[10px] font-bold leading-5 text-white">
                  {itemCount}
                </span>
              </span>
              <span className="hidden sm:inline">Collection</span>
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              aria-pressed={theme === "dark"}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              className="col-start-2 row-start-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:col-start-3 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                </svg>
              )}
            </button>
            <form
              action="/search"
              method="get"
              role="search"
              className="relative col-span-2 row-start-2 w-full sm:col-span-1 sm:col-start-1 sm:row-start-1"
            >
              <label htmlFor="site-search" className="sr-only">
                Search Items
              </label>
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 4.5 4.5" />
              </svg>
              <input
                id="site-search"
                name="q"
                type="search"
                className="block h-11 w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-24 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:bg-slate-800 dark:focus:ring-blue-900/40 dark:placeholder:text-slate-400"
                placeholder="Search the collection..."
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav
        aria-label="Section navigation"
        className="border-t border-slate-100 bg-slate-50/80 dark:border-slate-800 dark:bg-slate-950/40"
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
          <ul className="flex min-w-max items-center gap-1 text-sm font-semibold">
            <li>
              <NavLink
                to="/apparel"
                className={({isActive}) =>
                  `inline-flex min-h-9 items-center rounded-full px-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`
                }
              >
                Apparel
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/footwear"
                className={({isActive}) =>
                  `inline-flex min-h-9 items-center rounded-full px-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`
                }
              >
                Footwear
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accessories"
                className={({isActive}) =>
                  `inline-flex min-h-9 items-center rounded-full px-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`
                }
              >
                Accessories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={({isActive}) =>
                  `inline-flex min-h-9 items-center rounded-full px-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`
                }
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopall"
                className={({isActive}) =>
                  `inline-flex min-h-9 items-center rounded-full px-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${isActive ? "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300" : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"}`
                }
              >
                Shop All
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
