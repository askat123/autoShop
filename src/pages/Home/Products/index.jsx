import React, { useEffect } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/productSlice";
import axios from "axios";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((s) => s.data.data);

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://663f1cbbe3a7c3218a4c1c30.mockapi.io/products/sale`
      );
      const data = response.data;
      dispatch(getProduct(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      <div className="filter__btns">
        <button>Все</button>
        <button>Антифризы</button>
        <button>Каталог шин</button>
        <button>Моторные масла</button>
        <button>АКБ</button>
        <button>Провода пусковые</button>
        <button>Предохранители</button>
      </div>
      <div className="sale--blocks">
        {data.map((product) => (
          <div key={product.id} className="sale--blocks__big">
            <img src={product.image} alt={product.title_product} />
            <div className="sale--blocks__big--one">
              <h2></h2>
            </div>
            <div className="sale--blocks__big--mini">
              <div className="sale--blocks__big--mini__text">
                <h3>
                  {product.price}
                  <span>C</span>
                </h3>
              </div>
              <div className="sale--blocks__big--btn">
                <button>добавить в корзину</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
