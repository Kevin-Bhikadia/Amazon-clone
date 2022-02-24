const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K2XpeSImvWUXOusckqHuQfE0i0MKP8BqMiJwtGMnzcvdn4bmGVclX7WucOcDVuxofm9MXnODd1sEBQhOulF6MMC00R693Jw9X"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved Boom !! for amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 75,
    currency: "inr",
    payment_method_types: ["card"],
  });

  //OK-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
