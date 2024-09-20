import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import Toggle from "../Toggle/Toggle";
import { NavLink } from "react-router-dom";

const AddToBag = ({ items }) => {
  const { id } = items;
  const { AddToBag } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    quantity < 5 ? setQuantity(quantity + 1) : setQuantity(5);
  };

  return (
    <>
      <div className="addbtn">
        <NavLink to="/cart" onClick={() => AddToBag(id, quantity, items)}>
          <button>Add To Bag</button>
        </NavLink>
      </div>
      <div className="addbtn">
        <Toggle
          quantity={quantity}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <div className="buybtn">
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default AddToBag;
