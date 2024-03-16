import React from "react";
import ReactDOM from "react-dom/client";

import "../src/style/Global.css";

import Rotas from "./routes.jsx";
import { CartProvider } from "./contexts/cart-content.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Rotas />
  </CartProvider>
);
