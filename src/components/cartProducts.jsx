import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "../styles/cartstyles.module.css";
import axios from 'axios';
import ProductItem from './productItem';
import CartSummary from './cartSummary';

const CartProduct = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);
  const [productImg, setproductImg] = useState(null);
  const [sku, setSku] = useState('');

  useEffect(() => {
    setSkuFromUrl();
  }, []); 

  useEffect(() => {
    if (sku) {
      axios
        .post(
          "http://greenleap.ap-south-1.elasticbeanstalk.com/carts/addAnonCart",
          {
            sku: sku,
            quantity: 1,
          }
        )
        .then((response) => {
          console.log("POST request successful:", response);
          console.log("anonymousId:", response.data.anonymousId);
          console.log("product price:", response.data.totalPrice.centAmount);
          console.log(
            "product name:",
            response.data.lineItems[0].name["en-GB"]
          );

          setProductData(response.data.lineItems[0]);
          console.log("img:", response.data.lineItems[0].variant.images[0].url);
          setproductImg(response.data.lineItems[0].variant.images[0].url);
          localStorage.setItem("anonymousId", response.data.anonymousId);
        })
        .catch((error) => {
          console.error("Error making POST request:", error);
        });
    }
  }, [sku]); 

  const setSkuFromUrl = () => {
    const url = window.location.href;
    const skuFromUrl = url.split('/').pop();
    localStorage.setItem('sku', skuFromUrl);
    setSku(skuFromUrl);
  }

  return (
    <div className={style.container}>
      <div>
        <div className={style.alert}>
          You've got FREE delivery. Start <a href="#!" className={style.alert_link}>checkout now!</a>
        </div>
        <ul className={style.product_list}>
          {productData && <ProductItem key={productData.id} item={productData} img={productImg}/>} 
        </ul>
        <br/>
        {productData && <CartSummary totalPrice={productData.totalPrice} />}
      </div>
    </div>
  );
};

export default CartProduct;
