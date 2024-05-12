import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/slices/basketSlice";
import Header from "../../components/Header";

function Basket() {
  const basket = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleRemoveFromBasket = (product) => {
    dispatch(removeFromBasket(product));
  };

  return (
    <>
      <Header />
      <div id="basket">
        <div className="container">
          <div className="total">
            <div className="total-block">
              Total:{" "}
              <h1>
                {basket.reduce((acc, el) => acc + el.price * el.quantity, 0)}
              </h1>
            </div>
          </div>
          <div className="basket__box">
            {basket.map((product) => (
              <div className="basket__block" key={product.id}>
                <img src={product.image} alt="img" />
                <h2>{product.nameProduct}</h2>
                <div className="qua">
                  <button onClick={() => handleDecreaseQuantity(product)}>
                    -
                  </button>
                  <h3>{product.quantity}</h3>
                  <button onClick={() => handleIncreaseQuantity(product)}>
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveFromBasket(product)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
