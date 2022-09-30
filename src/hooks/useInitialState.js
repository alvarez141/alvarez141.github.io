import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setSate] = useState(initialState);

  const addToCart = (payload) => {
    setSate({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setSate({
      ...state,
      cart: state.cart.filter((_, index) => index !== indexValue),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
