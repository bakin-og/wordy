import {Link} from "react-router-dom";

const NotFound = () => (
  <main className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
    {/* Friendly fallback for routes that do not exist. */}
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
      404
    </p>
    <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
      Page not found
    </h1>
    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
      The page you requested does not exist or may have moved.
    </p>
    <Link
      to="/apparel"
      className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
    >
      Return home
    </Link>
  </main>
);

export default NotFound;
