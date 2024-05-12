import React from "react";
import Header from "../../components/Header";
import "./index.scss";
import Products from "./Products";

function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <div className="container">
          <div className="home__content">
            <h1>
              <br />
              <br />
              Все виды <br /> авто запчастей!
            </h1>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Home;
