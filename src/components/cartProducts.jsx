import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "../styles/cartstyles.module.css";
import axios from 'axios';
import groceryData from '../grocery.json';
import ProductItem from './productItem';

const CartProduct = () => {
  const { productId } = useParams();
  const selectedProduct = groceryData[0].items.find(product => product.id === productId); 

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios.post("http://localhost:8081/carts/addAnonCart", {
      "sku": "GRCG-01",
      "quantity": 1
    })
    .then(response => {
      console.log('POST request successful:', response);
      console.log('ananxnkccb:',response.data.anonymousId)
      console.log('product price:', response.data.totalPrice.centAmount);
      console.log('product name:', response.data.lineItems[0].name['en-US']);

      setProductData(response.data.lineItems[0]); 
      localStorage.setItem("anonymousId", response.data.anonymousId);
    })
    .catch(error => {
      console.error('Error making POST request:', error);
    });
  }, []); 

  return (
    <div className={style.container}>
      <div>
        <div className={style.alert}>
          You've got FREE delivery. Start <a href="#!" className={style.alert_link}>checkout now!</a>
        </div>
        <ul className={style.product_list}>
          {productData && <ProductItem key={productData.id} item={productData} />} 
        </ul>
        <br/>
      </div>
    </div>
  );
};

export default CartProduct;
