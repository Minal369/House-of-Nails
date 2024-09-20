const CartReducers = (state, action) => {
  if (action.type === "ADD_TO_BAG") {
    let { id, Addcard } = action.payload;
    console.log(Addcard);

    return {
      ...state,
      cart: action.payload,
    };
  }
  return state;
};

export default CartReducers;
