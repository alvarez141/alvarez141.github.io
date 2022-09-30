import React, { useContext } from "react";
import close from "../../public/assets/icons/icon_close.png";
import "../styles/OrderItem.scss";
import AppContext from "../context/AppContext";

const OrderItem = (props) => {
  const { ItemsProduct, indexValue } = props;
  const { removeFromCart } = React.useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={ItemsProduct.images[0]} alt={ItemsProduct.title} />
      </figure>
      <p>{ItemsProduct.title}</p>
      <p>${ItemsProduct.price}</p>
      <img
        src={close}
        alt="close"
        className="imgClose"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
