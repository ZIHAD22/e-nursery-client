import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// rating css
import "@smastrom/react-rating/style.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.tsx";
import { ThemeProvider } from "./components/theme/ThemeProvider.tsx";

// light box css

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);
