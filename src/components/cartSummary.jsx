import React, { useContext, useEffect, useState } from 'react';
import style from "../styles/cartstyles.module.css";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




const CartSummary = () => {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let t = getSubtotal();
    console.log('triggered' + t)
    setSubTotal(t);
  }, [items])

  const getSubtotal = () => {
    let subTotal = 0;
    Object.keys(items).forEach((key) => {
      subTotal += (items.price * items[key]);
    });
    return subTotal;
  }

 const CheckoutClick = () => {

  const storedPriceData = JSON.parse(localStorage.getItem('PriceData')) || [];
      
  const price = subTotal + 3;
  
  // Append the new token to the existing array
  const newPriceData = [...storedPriceData, price];
  
  // Store the updated array in localStorage
  localStorage.setItem('PriceData', JSON.stringify(newPriceData));
  
  console.log('Generated Price: ', price);
  console.log('Updated PriceData: ', newPriceData);

  navigate('/');
 };

  return (
    <div>
  
  <div className={style.summary_container}>
    <div className={style.summary_box}>
      <div className={style.summary_content}>
        <h2 className={style.summary_heading}>Summary</h2>
        <div className={style.summary_card}>
          <ul className={style.summary_list}>
            <li id='item-sub' className={style.summary_item}>
              <div>Item Subtotal</div>
                  <span>${subTotal}</span>
            </li>
            <li id='service-fee' className={style.summary_item}>
              <div>Service Fee</div>
              <span>$3.00</span>
            </li>
            <li id='subtotal' className={style.summary_item}>
              <div className={style.bold_text}>Subtotal</div>
                  <span className={style.bold_text}>${subTotal + 3.00}</span>
            </li>
          </ul>
        </div>
        <br />
        <button onClick={CheckoutClick} className={`${style.action_btn} ${style.primary_action}`} type='submit'>
          Place Order <span className={style.bold_text}> ${subTotal + 3.00}</span>
        </button>
        <p>
          <small>By placing your order, you agree to be bound by the Freshcart
            <a href="#!">Terms of Service</a> and <a href="#!">Privacy Policy.</a>
          </small>
        </p>
        <div>
          <br />
          <br />
          <h2 className={style.summary_heading}>Add Promo or Gift Card</h2>
          <form>
            <div>
         
              <input id='giftcard' type="text"placeholder="Promo or Gift Card" className={style.text_input} />
            </div>
            <br />
            <button className={`${style.action_btn} ${style.secondary_action}`} type="submit">Redeem</button>
            <p> <small>Terms &amp; Conditions apply</small></p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CartSummary;