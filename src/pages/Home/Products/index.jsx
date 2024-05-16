import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const nav = useNavigate("/");

  const navigateToPartDetail = (partId) => {
    nav(`/partDetail/${partId}`);
  };
  async function getProducts() {
    try {
      const response = await axios.get(
        `https://autoshop.pythonanywhere.com/spare/category/`
      );
      dispatch(getProduct(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <center>
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "28px",
            }}
          >
            Категории
          </h1>
        </center>
        <div className="sale--blocks">
          {data.map((product) => (
            <div
              onClick={() => navigateToPartDetail(product.id)}
              key={product.id}
              className="sale--blocks__big"
            >
              <div className="sale--blocks__big--one">
                <h3>{product.name}</h3>
              </div>
              {/* <div className="sale--blocks__big--mini">
              <div className="sale--blocks__big--mini__text">
                <h3>
                  {product.price}
                  <span>с</span>
                </h3>
              </div>
              <div className="sale--blocks__big--btn">
                <button onClick={() => handleAddToBasket(product)}>
                  добавить в корзину
                </button>
              </div>
            </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
