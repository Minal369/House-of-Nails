import React from "react";
import "./CartItemLayout.css";
import FormatPrice from "../Helper/FormatPrice";
import Toggle from "../Toggle/Toggle";
import { useCartContext } from "../../Context/CartContext";

const CartItemLayout = ({ id, imgSrc, description, price, quantity }) => {

    const {RemoveItem, setDecrease, setIncrease} = useCartContext()

//   const setDecrease = () => {
//     quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
//   };

//   const setIncrease = () => {
//     quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
//   };

  return (
    <>
      <div className="cart-items">
        <div className="cart-list-items">
          <img src={imgSrc} alt="" />
          <p>{description}</p>
        </div>

        <div className="cart-list-price">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>

        <div className="cart-list-counter">
          <Toggle
            quantity={quantity}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>

        <div className="cart-list-subtotal">
          <p><FormatPrice price = {price * quantity}/></p>
        </div>

        <div className="cart-list-remove">
          <i className="fas fa-trash" onClick={()=> RemoveItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItemLayout;
