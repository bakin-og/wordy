import {lazy, Suspense, useEffect} from "react";
import Navbar from "./assets/Navbar";
import {Cart, Receipt} from "./components/Cart";
import {CartProvider} from "./components/CartContext";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

const Shopall = lazy(() => import("./components/Shopall"));
const Accessories = lazy(() => import("./components/Accessories"));
const Apparel = lazy(() => import("./components/Apparel"));
const Footwear = lazy(() => import("./components/Footwear"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const SearchResults = lazy(() => import("./components/SearchResults"));
const Team = lazy(() => import("./Team"));
const Season3 = lazy(() => import("./components/Season3"));
const Season4 = lazy(() => import("./assets/Season4"));
const NotFound = lazy(() => import("./components/NotFound"));

// Shown while a route module is downloaded; keeping it in one place gives
// every page the same simple loading treatment.
const RouteFallback = () => (
  <main className="mx-auto min-h-[50vh] max-w-7xl px-4 py-16 text-center text-sm text-slate-500 sm:px-6 dark:text-slate-400">
    Loading...
  </main>
);

const App = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    // Page titles follow the current route so browser tabs stay recognizable.
    const pageTitles = {
      "/apparel": "Apparel",
      "/shopall": "Shop All",
      "/search": "Search",
      "/footwear": "Footwear",
      "/season-3": "Season 3",
      "/season-4": "Season 4",
      "/cart": "Shopping Cart",
      "/receipt": "Receipt",
      "/team": "About Wordy",
      "/accessories": "Accessories",
    };
    const pageName =
      pageTitles[pathname] ??
      (pathname.startsWith("/products/") ? "Product Details" : "Page Not Found");
    document.title = `${pageName} | Wordy`;
  }, [pathname]);

  return (
    <CartProvider>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route index element={<Navigate to="/apparel" replace />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/shopall" element={<Shopall />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/season-3" element={<Season3 />} />
          <Route path="/season-4" element={<Season4 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/team" element={<Team />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accesories" element={<Navigate to="/accessories" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {pathname !== "/receipt" && <Footer />}
    </CartProvider>
  );
};

export default App;
