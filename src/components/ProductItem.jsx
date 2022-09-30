import React, { useState, useContext } from "react";
import "@styles/ProductItem.scss";
import cart from "@icons/bt_add_to_cart.svg";
import AddContext from "../context/AppContext";

const ProductItem = ({ product }) => {
  const [addCart, setCart] = useState(false); //añade la descripcion
  const { addToCart } = useContext(AddContext); //aumenta el numero en el carrito 22 , 23

  const handleClick = () => {
    setCart(!addCart);
  };

  const handleClick2 = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} onClick={handleClick} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick2(product)}>
          <img src={cart} alt={product.title} />
        </figure>
      </div>
      <table>
        {" "}
        {/*añadido extra*/}
        <tr>
          <td>{addCart ? product.description : null}</td>
        </tr>
      </table>
      {/*fin de añadido*/}
    </div>
  );
};

export default ProductItem;
