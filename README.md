# Wordy

Wordy is a responsive React storefront for browsing apparel, footwear, accessories, and archived collections.

## Requirements

- Node.js 20 or later
- npm

## Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm test
npm run test:watch
```

## Project structure

- `src/components/` - reusable UI and feature components
- `src/assets/` - navigation and large page components
- `src/images/` - local product and editorial images
- `src/components/*Products.js` - product catalog data
- `src/components/CartContext.jsx` - cart state and local-storage persistence
- `src/App.jsx` - route definitions and lazy-loaded pages

## Catalog data

Products use a shared JavaScript object shape:

```js
{
  id: 1001,
  name: "Everyday Wristwatch",
  price: "₦48,500",
  image: watch,
  category: "Jewelry",
  description: "A considered finishing touch for every day.",
  sizes: ["S", "M", "L"], // Optional
  tag: "New arrival", // Optional
}
```

Keep IDs unique across the combined catalog. Product images should be imported from `src/images/`.

## Checkout

Checkout is a demo. It creates a local receipt and does not collect, process, or transmit payment information.
