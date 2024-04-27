import React from "react";

import CartProduct from "./cartProducts";
import style from "../styles/cartstyles.module.css";
import Header from "./header";
import Footer from "./footer";

const Cart = () => {
  return (
    <>
      <Header />
      <br />
      <div className={style.cart_body}>
        <h1 className={style.cart_heading}>Shopping Cart</h1>
        <h4 className={style.cart_heading}>Shopping in 382480</h4>

        <div className={style.grid_container}>
          <div className={style.cart_item}>
            <CartProduct />
     
          </div>
          <div className={style.cart_summary}>
      
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
