import React, { useContext } from "react";
import { NailContext } from "../../Context/ProductContext";
import AllItemsLayout from "../AllItemsLayout/AllItemsLayout";

const AllItemsMap = () => {
  const {mixedProduct} = useContext(NailContext)
  return (
    <>
      {mixedProduct.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllItemsMap;
