const CartReducers = (state, action) => {
  if (action.type === "ADD_TO_BAG") {
    let { id, quantity, items } = action.payload;
    // console.log(items);

    let cartProduct;

    cartProduct = {
     id,
     quantity,
     description: items.description,
     price: items.price,
     imgSrc: items.imgSrc,
    }

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  return state;
};

export default CartReducers;
