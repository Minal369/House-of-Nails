import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/CartReducers";

const CartContext = createContext();
const initialState = {
  cart: [],
  totalItems: "",
  totalPrice: "",
  shipping_fee: 50000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const AddToBag = (id, quantity, items) => {
    dispatch({ type: "ADD_TO_BAG", payload: { id, quantity, items } });
  };
  return (
    <CartContext.Provider value={{ ...state, AddToBag }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
