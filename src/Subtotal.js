import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();
  console.log("total amount >>> ", getBasketTotal(basket));
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input className="checkbox" type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        disabled={!user}
        onClick={user ? (e) => navigate("/payment") : (e) => navigate("/Login")}
      >
        {user ? "Proceed to checkout" : "Please sign in first"}
      </button>
    </div>
  );
}

export default Subtotal;
