



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useContext, useEffect, useState } from 'react';
import style from "../styles/cartstyles.module.css";
import { useNavigate } from 'react-router-dom';
import Payment from './Payment';

const CartSummary = ({ totalPrice }) => {
  const navigate = useNavigate();
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    if (totalPrice) {
      setSubTotal(totalPrice.centAmount / 10);
    }
  }, [totalPrice])

 

  const invokeToast = () => {
    toast.success('Order placed successfully');
    setTimeout(()=>{
      navigate('/');
    },3000)
   
  }

  return (
    <div>
         <Payment />
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
            <button className={`${style.action_btn} ${style.primary_action}`} type='submit' onClick={() => invokeToast()}>
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default CartSummary;
