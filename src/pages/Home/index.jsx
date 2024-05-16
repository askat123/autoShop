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
      <div className="container">
        <center>
          <p style={{ padding: "50px 0" }}>
            Магазин автозапчастей "AutoDNR"  <br /> <br />   Наша компания,
            занимается розничной продажей запчастей, расходных материалов,
            аксессуаров и <br /> <br />
            комплектующих для автомобилей. В нашем ассортименте продукция
            ведущих европейских, корейских, японских марок, а так же большой
            выбор неоригинальных автомобильных запчастей. <br /> <br />     Мы
            предлагаем быстрый и удобный сервис по поиску, подбору и заказу
            необходимых вам запчастей, оптимальную систему скидок и максимально
            короткие сроки доставки. Администрация ОсОО "AutoDNR" <br /> <br />
          </p>
        </center>
      </div>
      <Footer />
    </>
  );
}

export default Home;
