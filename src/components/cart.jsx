import React from "react";

import CartProduct from "./cartProducts";
import style from "../styles/cartstyles.module.css";

import CartSummary from "./cartSummary";
import Payment from './Payment'

const Cart = () => {
  return (
    <>
      <br />
      <div className={style.cart_body}>
        <h1 className={style.cart_heading}>Shopping Cart</h1>
        <h4 className={style.cart_heading}>Shopping in 382480</h4>

        <div className={style.grid_container}>
          <div className={style.cart_item}>
            <CartProduct />
            <Payment/>
          </div>
          <div className={style.cart_summary}>
            <CartSummary />
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
