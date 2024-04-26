import "../styles/index.css";
import "../styles/mobile.css";

let Footer = () =>{
    return(
        <footer>
            {/* footer Content */}
          <section>
            {/* Different Categories and About */}
            <article className="about">
              {/* Different Categories of goods available */}
              <div className="categories">
                <h4>Categories</h4>
                <div className="subcategory">
                  <div>
                    <p>
                      Vegetables & Fruits <br />
                      Breakfast & Instant food <br />
                      Bakery & Biscuits <br />
                      Atta, rice & dal <br />
                      Sauces & spreads <br />
                      Organic & gourmet <br />
                      Baby Care <br />
                      Cleaning essentials <br />
                      Personal Care
                    </p>
                  </div>
  
                  <div>
                    <p>
                      Dairy, bread & eggs <br />
                      Cold drinks & juices <br />
                      Tea, coffee & drinks <br />
                      Masala, oil & more <br />
                      Chicken, meat & fish <br />
                      Paan corner <br />
                      Pharma & wellness <br />
                      Home & office <br />
                      Pet care
                    </p>
                  </div>
                </div>
              </div>
  
              {/* About Company */}
              <div>
                <h4>Get to know us</h4>
                <p>
                  Company <br />
                  About <br />
                  Blog <br />
                  Help Center <br />
                  Our Value
                </p>
              </div>
  
              {/* Services for Consumer */}
              <div>
                <h4>For Consumers</h4>
                <p>
                  Payments <br />
                  Shipping <br />
                  Product Returns <br />
                  FAQ <br />
                  Shop Checkout
                </p>
              </div>
  
              {/* Shopper Opportunities */}
              <div>
                <h4>Become a Shopper</h4>
                <p>
                  Shopper Opportunities <br />
                  Become a Shopper <br />
                  Earnings <br />
                  Ideas & Guides <br />
                  New Retailers <br />
                </p>
              </div>
  
              {/* <New Programs and offers */}
              <div>
                <h4>Freshcart programs</h4>
                <p>
                  Freshcart programs <br />
                  Gift Cards <br />
                  Promos & Coupons <br />
                  Freshcart Ads <br />
                  Careers
                </p>
              </div>
            </article>
  
            <hr className="custom-hr" />
  
            {/* Payment Gateway Partners */}
            <article className="payment-bar">
              <div>
                <p>
                  <strong>Payment Partners</strong>
                  <img
                    width="200px"
                    src="/Images/payment.png"
                    alt="paymentgateways.png"
                  />
                </p>
              </div>
  
              {/* App download Locations */}
              <div>
                <img
                  width="150px"
                  height="30px"
                  src="/Images/AppStore.png"
                  alt="appstore.png"
                />
                <img
                  width="150px"
                  height="30px"
                  src="/Images/GooglePlay.png"
                  alt="googleplay.png"
                />
              </div>
            </article>
  
            <hr className="custom-hr" />
  
            {/* Social Bar Container */}
            <article className="social-bar">
              <p>Follow us on</p>
              <img
                width="100px"
                height="25px"
                src="/Images/social.PNG"
                alt="socialnetworks.png"
              />
            </article>
          </section>
        </footer>
  
    )
} 

export default Footer;