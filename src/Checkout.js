import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="ad__box">
          <div>
            <img
              className="checkout__ad"
              src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CBCC/cardart/thumbnails/coreb_135x85._CB485917812_.png"
              alt="checkout ad"
            />
            <h3>$100 instant gift card</h3>
          </div>
          <div className="long__text">
            <h3>
              Get $100 instantly upon approval of Amazon Rewards Visa Card{" "}
            </h3>
          </div>
        </div>
        <h2 className="username">Hello {user?.email},</h2>
        <h2 className="checkout__title">Your cart</h2>

        {/* <CheckoutProduct
          id="1003"
          title="This is a test, lorem ipsum, lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum"
          image="https://m.media-amazon.com/images/I/81iM2i4gIaL._AC_SL1500_.jpg"
          price={199.99}
          rating={5}
        /> */}
        {/* <CheckoutProduct
          id={id}
          title={title}
          image={image}
          price={price}
          rating={rating}
        /> */}

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
