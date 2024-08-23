import React, { useContext } from "react";
import AllItemsLayout from "../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../Context/ProductContext";


const AllItemsMap = () => {
    const {isLoading,  NailProducts} = useContext(NailContext)
    console.log(NailProducts);
    

    if (isLoading) {
        return <div>....Loading</div>
    }
  return (
    <>
      {NailProducts.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllItemsMap;
