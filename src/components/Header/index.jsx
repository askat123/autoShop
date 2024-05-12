import React from "react";
import "./index.scss";
import basket from "../../assets/basket.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <div className="data">
          <div className="text">
            <a href="">
              <svg
                width="14"
                height="21"
                viewBox="0 0 14 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 7.743C0 3.75 3.14 0.5 7 0.5C10.86 0.5 14 3.75 14 7.743C14 12.7 7.736 19.976 7.469 20.283C7.41117 20.3509 7.33928 20.4055 7.25831 20.4429C7.17733 20.4803 7.0892 20.4996 7 20.4996C6.9108 20.4996 6.82267 20.4803 6.74169 20.4429C6.66072 20.4055 6.58883 20.3509 6.531 20.283C6.264 19.977 0 12.699 0 7.743ZM3.478 7.743C3.478 9.753 5.058 11.387 7 11.387C8.942 11.387 10.522 9.753 10.522 7.743C10.522 5.733 8.942 4.1 7 4.1C5.058 4.1 3.478 5.734 3.478 7.743Z"
                  fill="#C62828"
                />
              </svg>
              address
            </a>
            <p>Время работы: 9:00-18:00</p>
          </div>
          <div className="phone">
            <p>Номер телефона: +996 559 390505</p>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <h1>AutoPart</h1>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Введите номер или название детали"
              />
            </div>
            <div className="buttons">
              <NavLink to={"/basket"}>
                <img src={basket} alt="" />
              </NavLink>
              <span>0</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
