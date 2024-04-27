import React from 'react';
import style from "../styles/cartstyles.module.css";

const ProductItem = ({ item,img }) => {
  return (
    <li key={item.id} className={style.product_item}>
      <div className={style.product_image}>
      <img src={img} alt={item.name['en-GB']} /> 
      </div>
      <div className={style.product_details}>
        <a className={style.product_title}>{item.name['en-GB']}</a> {/* Updated to display the product name from axios response */}
        <span className={style.product_price}>{item.totalPrice.centAmount /10 } INR</span> {/* Updated to display the product price from axios response */}
      </div>
      <div className={style.price}>
        <span className={style.price_value}>{`${item.totalPrice.centAmount/10} INR`}</span> {/* Updated to display the product price from axios response */}
      </div>
    </li>
  );
};

export default ProductItem;
