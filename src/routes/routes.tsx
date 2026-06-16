import App from "@/App";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import Product from "@/pages/Product/Product";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import TreeFinder from "@/pages/TreeFinder/TreeFinder";
import InfoPage from "@/pages/Info/InfoPage";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "tree-finder",
        element: <TreeFinder />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "shopping-cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: (
          <InfoPage
            title="About Us"
            intro="A family-run nursery business built around helpful advice, careful sourcing, and trees that become part of your story."
            variant="about"
          />
        ),
      },
      {
        path: "advice-guides",
        element: (
          <InfoPage
            title="Our Latest News & Advice"
            intro="Useful tips, seasonal guides, and expert advice to help you choose, plant, and care for your trees."
            variant="advice"
          />
        ),
      },
      {
        path: "wholesale",
        element: (
          <InfoPage
            title="Wholesale Orders & Trade Accounts"
            intro="Buy wholesale trees and shrubs or apply for a trade account today."
            variant="wholesale"
          />
        ),
      },
      {
        path: "contact",
        element: (
          <InfoPage
            title="Contact Us"
            intro="Tell us what you need and our nursery team will help you choose the right plants."
            variant="contact"
          />
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "hedging",
        element: (
          <InfoPage
            title="Hedging"
            intro="Browse structured hedging plants for privacy, boundaries, shelter, and wildlife-friendly gardens."
          />
        ),
      },
      {
        path: "sale",
        element: (
          <InfoPage
            title="Sale"
            intro="Discover seasonal nursery offers and limited-time planting deals."
          />
        ),
      },
      {
        path: "accessories",
        element: (
          <InfoPage
            title="Accessories"
            intro="Find the essentials for planting, feeding, protecting, and caring for your trees."
          />
        ),
      },
      {
        path: "gifting-and-memorials",
        element: (
          <InfoPage
            title="Gifting and Memorials"
            intro="Meaningful living gifts for birthdays, anniversaries, memorials, and special moments."
          />
        ),
      },
      {
        path: "gift-vouchers",
        element: (
          <InfoPage
            title="Gift Vouchers"
            intro="Give someone the freedom to choose the tree, shrub, or garden gift they love most."
          />
        ),
      },
    ],
  },
]);

export default routes;
