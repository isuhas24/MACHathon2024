// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartProduct from "./cartProducts";
import Cart from "./cart";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/:productId" element={<Cart />} />
 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
