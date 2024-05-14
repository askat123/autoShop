import React from "react";
import Header from "../../components/Header";
import "./index.scss";
import Products from "./Products";
import basketlogo from "../../assets/basket.svg";
import { useSelector } from "react-redux";

function Home() {
  const basket = useSelector((s) => s.basket.products);
  return (
    <>
      <Header />
      <div id="home">
        <div className="container">
          <div className="home__content"></div>
          <div className="fixed_basket">
            <img src={basketlogo} alt="" />
            <p>в корзине: {basket.length} шт.</p>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home;
