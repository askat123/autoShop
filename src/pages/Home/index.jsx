import React from "react";
import Header from "../../components/Header";
import "./index.scss";
import Products from "./Products";

import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div id="home">
        <div className="container">
          <div className="home__content"></div>
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
}

export default Home;
