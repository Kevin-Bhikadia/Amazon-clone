import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Routes } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51K2XpeSImvWUXOuskAapajVmz7FNN6vPtROMTcRCxrmHvFpKNg9xhKeaZtC6B4xvuzOUQ8PZVV7TCSMp2Ohh3D5500CICmsYvK"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when an app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                {" "}
                <Payment />{" "}
              </Elements>,
            ]}
          />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
