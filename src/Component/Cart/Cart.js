import React from "react";
import "./Cart.css";
import { useCartContext } from "../../Context/CartContext";
import FormatPrice from "../Helper/FormatPrice";
import Scrollbars from "react-custom-scrollbars-2";
import { NavLink } from "react-router-dom";
import CartItem from "../CartItemLayout/CartItemLayout";

const Cart = () => {
  const { cart, ClearAll, total_price, shipping_fees } = useCartContext();

  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="c-empty-cart">
        <h2>Cart Empty...</h2>
        <i className="fas fa-shopping-cart"></i>
        <NavLink to="/AllPD">
          <button>Shop Now</button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="c-sections">
        <div className="c-list">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub-Total</p>
          <p>Remove</p>
        </div>

        <hr />

        <div className="c-item-layout">
          <Scrollbars>
            {cart.map((curElem) => {
              return (
                <>
                  <CartItem key={curElem.id} {...curElem} />
                </>
              );
            })}
          </Scrollbars>
        </div>

        <hr />

        <div className="c-btn-section">
          <div className="c-shopping-btn">
            <NavLink to="/product">
              <button>Continue Shopping</button>
            </NavLink>
          </div>
          <div className="c-clear-btn">
            <button onClick={ClearAll} className="c-remove-btn">
              Clear All{" "}
            </button>
          </div>
        </div>

        <hr />

        <div className="c-price-section">
          <div className="c-subtotal-section">
            <p>Sub-Total</p>
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>

          <div className="c-shipping-section">
            <p>Shipping</p>
            <p>
              <FormatPrice price={shipping_fees} />
            </p>
          </div>

          <hr />

          <div className="c-total-section">
            <p>Total Amount: </p>
            <p>
              <FormatPrice price={shipping_fees + total_price} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
