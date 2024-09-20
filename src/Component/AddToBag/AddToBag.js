import React from "react";
import { useCartContext } from "../../Context/CartContext";

const AddToBag = ({ Addcard }) => {
  const { id } = Addcard;
  const { AddToBag } = useCartContext();
  return (
    <>
      <div className="addbtn">
        <button onClick={() => AddToBag(id, Addcard)}>Add To Bag</button>
      </div>
      <div className="buybtn">
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default AddToBag;
