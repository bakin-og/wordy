import {Link} from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  // This footer is shared by storefront pages and hidden on the receipt.
  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
      {/* Main footer links and project information. */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8 lg:px-8">
        <div className="max-w-sm">
          <Link
            to="/apparel"
            className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white dark:bg-white dark:text-slate-900">
              W
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Wordy
            </span>
          </Link>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Creative apparel and accessories made for everyday expression. Find
            a new favorite or revisit a piece from the archive.
          </p>
        </div>

        <nav aria-label="Shop links">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Shop
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                to="/shopall"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Shop all
              </Link>
            </li>
            <li>
              <Link
                to="/apparel"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Apparel
              </Link>
            </li>
            <li>
              <Link
                to="/footwear"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Footwear
              </Link>
            </li>
            <li>
              <Link
                to="/accessories"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Accessories
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Your collection
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Discover links">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Discover
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                to="/season-3"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Season 3 archive
              </Link>
            </li>
            <li>
              <Link
                to="/season-4"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                Season 4 archive
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:text-blue-300"
              >
                About Wordy
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Our stated impact
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Wordy states that 100% of profits support carbon removal and tree
            planting through TIST.
          </p>
          <a
            href="https://tist.org/"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex min-h-9 items-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-500 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
          >
            Learn about TIST
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8 dark:text-slate-400">
          <p>© {year} Wordy. All rights reserved.</p>
          <p>Demo store · checkout does not collect payment.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
