import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import flechita from "../../public/assets/icons/flechita.svg";
import "@styles/MyOrder.scss";
import AppContext from "../context/AppContext";

const MyOrder = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const calculo = (acumulador, valor) => acumulador + valor.price;
    const sum = state.cart.reduce(calculo, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="seccion-scroll">
        <div className="my-order-content">
          {state.cart.length > 0 ? (
            state.cart.map((ItemsProduct, index) => (
              <OrderItem
                indexValue={index}
                key={index}
                ItemsProduct={ItemsProduct}
              />
            ))
          ) : (
            <div className="cart-empty"> No tienes productos Agregados</div>
          )}
          {/* {state.cart.map((product) => (
            <OrderItem ItemsProduct={product} key={`orderItem-${product.id}`} />
          ))} */}

          <div className="order">
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      </div>
    </aside>
  );
};
export default MyOrder;
