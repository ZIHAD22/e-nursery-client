import App from "@/App";
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
        path: "/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default routes;
