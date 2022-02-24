import React from "react";
import "./Home.css";
import wot from "./WOT.mp4";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <video
          className="home__video"
          src={wot}
          muted="true"
          preload="auto"
          //   controls="controls"
          autoPlay="true"
          poster="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/TV/WOFT_S1_MotionGateway_1500x300_HeroesVillains_ARSDE_POST_en-US_InitialSlate._CB653668399_.jpg"
        />
        <div className="black"></div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="1001"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt="The lean startup"
            rating={4}
          />
          {/* Product */}
          <Product
            id="1002"
            title="Philips Pasta and Noodle Maker Plus, Large, HR2375/06"
            price={199.95}
            image="https://m.media-amazon.com/images/I/81iM2i4gIaL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1003"
            title="LG OLED C1 Series 77” Alexa Built-in 4k Smart TV (3840 x 2160), 120Hz Refresh Rate, AI-Powered 4K, Dolby Cinema"
            price={2896.99}
            image="https://m.media-amazon.com/images/I/91otJ1fmuXS._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1004"
            title="Amazon Brand – Stone & Beam Hillman Mid-Century Ottoman with Wood Base and Legs, 30W, Ivory"
            price={141.95}
            image="https://m.media-amazon.com/images/I/81+2ivhspVL._AC_SL1500_.jpg"
            rating={2}
          />

          <Product
            id="1005"
            title="Amazon Brand – Rivet Aiden Mid-Century Modern Sofa Couch (86.6W) - Dark Brown Leather"
            price={1282.65}
            image="https://m.media-amazon.com/images/I/814b55i+q5L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="1006"
            title="Amazon Brand – Rivet Spear Mid-Century Modern Channel Tufted Leather Accent Chair with Wood Arms, 29.1W, Taupe"
            price={551.65}
            image="https://m.media-amazon.com/images/I/81IGT8P3zcL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1007"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray"
            price={999.0}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1008"
            title="Apple Pencil"
            price={100.0}
            image="https://m.media-amazon.com/images/I/41S3MKU9TjL._AC_SL1024_.jpg"
            rating={5}
          />
          <Product
            id="1009"
            title="Apple Magic Keyboard (for iPad Pro 12.9-inch - 5th Generation) - US English- White"
            price={329.98}
            image="https://m.media-amazon.com/images/I/71w0L8VIB9L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="1010"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={999.99}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SL1000_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
