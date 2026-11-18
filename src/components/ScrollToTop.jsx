import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    // Route changes should begin at the top of the new page.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
