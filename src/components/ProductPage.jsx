import {useParams} from "react-router-dom";
import Shopall from "./Shopall";

const ProductPage = () => {
  const {productId} = useParams();

  // Reuse the catalog page in single-product mode.
  return <Shopall productId={productId} />;
};

export default ProductPage;
