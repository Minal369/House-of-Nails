import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { AppProvider } from "./Context/ProductContext";
import { OfferProvider } from "./Context/OfferContext";
import { CartContextProvider } from "./Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <OfferProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </OfferProvider>
  </AppProvider>
);
