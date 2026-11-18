import {accessoryProducts} from "./accessoryProducts";
import {footwearProducts} from "./footwearProducts";
import tooltee from "../images/Tooltee.png";
import shorts from "../images/shorts.png";
import blockhat from "../images/blockhat.png";
import blockparty from "../images/Blockparty.png";
import clockin from "../images/Clockin.png";
import echo from "../images/Echo.png";
import growth from "../images/growth.png";
import highfideli from "../images/Highfideli.png";
import pen from "../images/pen.png";
import hoodie from "../images/hoodie1.png";
import socks from "../images/socks2.png";
import mug from "../images/cup1.png";
import reserved from "../images/reserved.png";
import selfpotrait from "../images/Selfpotrait.png";
import smiley from "../images/Smiley.png";
import tidyupback from "../images/TidyUpBack.png";
import tomatotee from "../images/Tomatotee.png";
import shirt from "../images/shirt1.png";
import bag from "../images/bag1.png";
import doodle from "../images/doodle.png";
import giftcard from "../images/giftcard.png";
import sunglasses from "../images/sunglasses.png";
import tie from "../images/tie.png";
import sunglasses2 from "../images/sunglasses2.png";
import bag2 from "../images/bag2.png";
import heels from "../images/heels.png";
import bag3 from "../images/bag3.png";
import hat from "../images/hat.png";
import basket from "../images/basket.png";

export const shopAllProducts = [
  {
    id: 1,
    name: "Toolbox Tee",
    price: "₦57,200",
    image: tooltee,
    tag: "Low stock",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Hidden Layers Tote",
    price: "₦92,900",
    image: reserved,
    tag: null,
    sizes: [],
  },
  {
    id: 3,
    name: "Black party hoodie",
    price: "₦114,400",
    image: blockparty,
    tag: null,
    sizes: ["L", "XL", "2XL"],
  },
  {
    id: 4,
    name: "Clock in cap",
    price: "₦35,800",
    image: clockin,
    tag: null,
    sizes: ["S"],
  },
  {
    id: 5,
    name: "Self Potrait Tee",
    price: "₦67,200",
    image: selfpotrait,
    tag: null,
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    id: 6,
    name: "Tomato Tee",
    price: "₦75,100",
    image: tomatotee,
    tag: null,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: 7,
    name: "High fideli Tee",
    price: "₦85,800",
    image: highfideli,
    tag: null,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Toolbox Tee",
    price: "₦57,200",
    image: tooltee,
    tag: null,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Self potrait mug",
    price: "₦20,200",
    image: mug,
    tag: null,
    sizes: [],
  },
  {
    id: 10,
    name: "Low res socks",
    price: "₦20,900",
    image: socks,
    tag: null,
    sizes: ["M", "L", "XXL"],
  },
  {
    id: 11,
    name: "Smiley feet socks",
    price: "₦21,000",
    image: smiley,
    tag: null,
    sizes: ["M", "L"],
  },
  {
    id: 12,
    name: "Shorts",
    price: "₦17,200",
    image: shorts,
    tag: "Soldout",
    sizes: [""],
  },
  {
    id: 13,
    name: "Echo Tote",
    price: "₦64,300",
    image: echo,
    tag: null,
    sizes: ["S", "M", "L"],
  },
  {
    id: 14,
    name: "Starting Block Hat",
    price: "₦14,300",
    image: blockhat,
    tag: null,
    sizes: ["S", "M"],
  },
  {
    id: 15,
    name: "Tidy Up Back",
    price: "₦64,300",
    image: tidyupback,
    tag: null,
    sizes: ["S", "M", "L", "2XL"],
  },
  {
    id: 16,
    name: "Pending approval hoodie",
    price: "₦114,300",
    image: hoodie,
    tag: null,
    sizes: ["S", "M", "L", "2XL"],
  },
  {
    id: 17,
    name: "Pen",
    price: "₦1,300",
    image: pen,
    tag: null,
    sizes: [],
  },
  {
    id: 18,
    name: "Growth",
    price: "₦37,500",
    image: growth,
    tag: "soldout",
    sizes: [],
  },
  {
    id: 19,
    name: "Polo Shirt",
    price: "₦24,900",
    image: shirt,
    tag: null,
    sizes: ["M", "L", "2XL", "3XL"],
  },
  {
    id: 20,
    name: "Figma Bag",
    price: "₦15,800",
    image: bag,
    tag: null,
    sizes: [],
  },
  {
    id: 21,
    name: "Doodle",
    price: "₦25,700",
    image: doodle,
    tag: null,
    sizes: [],
  },
  {
    id: 22,
    name: "Giftcard",
    price: "₦5,800",
    image: giftcard,
    tag: null,
    sizes: [],
  },
  {
    id: 23,
    name: "Sunglasses",
    price: "₦4,500",
    image: sunglasses,
    tag: null,
    sizes: [],
  },
  {
    id: 24,
    name: "Tie",
    price: "₦6,000",
    image: tie,
    tag: null,
    sizes: ["S", "M", "L"],
  },
  {
    id: 25,
    name: "Awesome Bag",
    price: "₦85,000",
    image: bag2,
    tag: "low stock",
    sizes: ["L", "2XL"],
  },
  {
    id: 26,
    name: "Maxi glasses",
    price: "₦25,000",
    image: sunglasses2,
    tag: null,
    sizes: [],
  },
  {
    id: 27,
    name: "Hat",
    price: "₦15,000",
    image: hat,
    tag: null,
    sizes: ["S", "M", "L", "2XL"],
  },
  {
    id: 28,
    name: "Heels",
    price: "₦45,000",
    image: heels,
    category: "Footwear",
    tag: null,
    sizes: [38, 39, 40, 41],
  },
  {
    id: 29,
    name: "Knitted Bag",
    price: "₦30,000",
    image: bag3,
    tag: "low stock",
    sizes: ["S", "M"],
  },
  {
    id: 30,
    name: "Basket",
    price: "₦22,400",
    image: basket,
    tag: "low stock",
    sizes: [],
  },
];

export const catalogProducts = [
  ...shopAllProducts,
  ...accessoryProducts,
  ...footwearProducts,
];

export const allProducts = catalogProducts.filter(
  (product, index, products) =>
    products.findIndex((candidate) => candidate.image === product.image) ===
    index,
);
