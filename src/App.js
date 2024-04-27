import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GoGreen from "./components/LandingPage/GoGreen/gogreen";
import Cart from "./components/cart";
import Header from "./components/header/header";
import "./app.css";
import Payment from "./components/Payment";





const App = () => {
  return (
    <div className="App">
    
      <div className="headerPlusContent">
        <div>
          <Header />
        </div>
        <div className="GogreenMainContainer">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<GoGreen />} />
              <Route exact path="/:productId" element={<Cart />} />
            </Routes>
          </BrowserRouter>
          
        </div>
      </div>
    </div>
  );
};

export default App;
