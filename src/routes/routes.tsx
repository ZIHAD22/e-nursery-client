import App from "@/App";
import Cart from "@/pages/Cart/Cart";
import Home from "@/pages/Home/Home";
import Product from "@/pages/Product/Product";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";

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
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "shopping-cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
