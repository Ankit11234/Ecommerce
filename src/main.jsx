import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./Context/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  rootElement
);
