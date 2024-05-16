import React, { useState } from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/basketSlice";
import Header from "../../components/Header";
import axios from "axios";
import Footer from "../../components/Footer";

function Basket() {
  const basket = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleRemoveFromBasket = (product) => {
    dispatch(removeFromBasket(product));
  };

  const handleOrder = async () => {
    try {
      if (customerInfo.name && customerInfo.phone) {
        const response = await axios.post(
          "https://api.telegram.org/bot6149981925:AAGpfDoRJkhemNLd2KfEYJGMYADcgZ_Dp5w/sendMessage",
          {
            chat_id: "883636261",
            text: `Новый заказ:\n\n${basket.map(
              (product) =>
                `Название: ${product.name}\nКоличество: ${product.quantity}\nЦена: ${product.price}\n\n`
            )}\nИмя заказчика: ${customerInfo.name}\nНомер телефона: ${
              customerInfo.phone
            }`,
          }
        );
        console.log("Order sent:", response.data);
        basket.forEach((product) => dispatch(removeFromBasket(product)));
        setCustomerInfo({
          name: "",
          phone: "",
        });
        alert("Заказ успешно отправлен!");
      } else {
        alert("Пожалуйста, заполните данные заказчика.");
      }
    } catch (error) {
      console.error("Error sending order:", error);
    }
  };

  return (
    <>
      <Header />
      <div id="basket">
        <div className="container">
          <div className="total">
            <div className="total-block">
              Total:{" сом"}
              <h1>
                {basket.reduce((acc, el) => acc + +el.price * el.quantity, 0)}
              </h1>
            </div>
          </div>
          <div className="customer-info">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={customerInfo.name}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Ваш номер телефона"
              value={customerInfo.phone}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleOrder} className="order-button">
            Заказать
          </button>
          <div className="basket__box">
            {basket.map((product) => (
              <div className="basket__block" key={product.id}>
                <img src={product.image} alt="img" />
                <h2>{product.name}</h2>
                <div className="qua">
                  <button onClick={() => handleDecreaseQuantity(product)}>
                    -
                  </button>
                  <h3>{product.quantity}</h3>
                  <button onClick={() => handleIncreaseQuantity(product)}>
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveFromBasket(product)}
                  className="remove-button"
                  style={{
                    padding: "6px 10px",
                    background: "black",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  удалить
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Basket;
