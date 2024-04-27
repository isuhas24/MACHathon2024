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


        <div className={style.grid_container}>
          <div className={style.cart_item}>
            <CartProduct />
     
          </div>
          <div className={style.cart_summary}>
      
          </div>
        </div>
      </div>

    </>
  );
};

export default Cart;
