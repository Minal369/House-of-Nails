import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducers";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartItem = localStorage.getItem("MinalCart")
  // eslint-disable-next-line
  if (newCartItem==[]){
    return []
  }else {
    return JSON.parse(newCartItem)
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  totalItems: "",
  total_price: "",
  shipping_fees: 50,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToBag = (id, quantity, items) => {
    dispatch({ type: "ADD_TO_BAG", payload: { id, quantity, items } });
  };

  const setDecrease = (id) => {
    dispatch({type:"SET_DECREASE", payload:id})
  }

  const setIncrease = (id) => {
    dispatch({type:"SET_INCREASE", payload:id})
  }

  const RemoveItem = (id) => {
    dispatch({type:"REMOVE", payload:id})
  }

  const ClearAll = () => {
    dispatch({type: "CLEAR_ALL"})
  }

  useEffect(()=>{
    dispatch({type:"UPDATE_CART_VALUE"})
    dispatch({type:"TOTAL_PRICE"})
    localStorage.setItem("MinalCart", JSON.stringify(state.cart))
  },[state.cart])


  return (
    <CartContext.Provider value={{ ...state, AddToBag, setDecrease, setIncrease, RemoveItem, ClearAll}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
