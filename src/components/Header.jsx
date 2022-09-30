import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu";
import menu from "@icons/icon_menu.svg";
import logos from "@logos/logo_yard_sale.svg";
import shopping from "@icons/icon_shopping_cart.svg";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logos} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            <div className="correo">alvarezdanieldelgadillo@gmail.com</div>
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shopping} alt="shopping cart" />

            <div>{state.length || 0}</div>
            {state.cart.length > 0 ? (
              <div>{state.cart.length > 9 ? "+9" : state.cart.length}</div>
            ) : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
