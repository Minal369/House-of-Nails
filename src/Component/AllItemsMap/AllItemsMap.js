import React from "react";
import AllItemsLayout from "../AllItemsLayout/AllItemsLayout";
import { useMinalContext } from "../../Context/ProductContext";


const AllItemsMap = () => {
    const {isLoading,  allProduct} = useMinalContext()
    // console.log(NailProducts);
    

    if (isLoading) {
        return <div>....Loading</div>
    }
  return (
    <>
      {allProduct.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllItemsMap;
