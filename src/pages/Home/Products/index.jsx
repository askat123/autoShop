import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/slices/productSlice";
import axios from "axios";
import { addToBasket } from "../../../redux/slices/basketSlice";

function Products() {
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState(null);
  const [searchText, setSearchText] = useState("");
  const data = useSelector((state) => state.data.data);

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  async function getProducts() {
    try {
      const response = await axios.get(
        `https://664459266c6a6565870a0015.mockapi.io/all`
      );
      dispatch(getProduct(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const filteredData = data.filter((product) => {
    // Фильтрация по типу продукта
    if (filterType && product.productType !== filterType) {
      return false;
    }
    // Поиск по названию продукта
    if (
      searchText &&
      !product.productName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="container">
      <div className="filter__btns">
        <button onClick={() => setFilterType(null)}>Все</button>
        <button onClick={() => setFilterType("Антифризы")}>Антифризы</button>
        <button onClick={() => setFilterType("Каталог шин")}>
          Каталог шин
        </button>
        <button onClick={() => setFilterType("Моторные масла")}>
          Моторные масла
        </button>
        <button onClick={() => setFilterType("АКБ")}>АКБ</button>
        <button onClick={() => setFilterType("Провода пусковые")}>
          Провода пусковые
        </button>
        <button onClick={() => setFilterType("Предохранители")}>
          Предохранители
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="sale--blocks">
        {filteredData.map((product) => (
          <div key={product.id} className="sale--blocks__big">
            <img src={product.image} alt={product.productName} />
            <div className="sale--blocks__big--one">
              <h3>{product.productName}</h3>
            </div>
            <div className="sale--blocks__big--mini">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
