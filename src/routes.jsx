import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Checkout from "./Pages/checkout/Checkout";
import Historico from "./Pages/historico/Historico";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/checkout" element={<Checkout />}>
          {" "}
        </Route>
        <Route path="/historico" element={<Historico />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
