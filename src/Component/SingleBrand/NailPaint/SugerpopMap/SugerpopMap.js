import React, { useContext } from "react";
import { NailContext } from "../../../../Context/ProductContext";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";

const SugerpopMap = () => {
  const { sugerpop } = useContext(NailContext);
  return (
    <>
      {sugerpop.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
      
    </>
  );
};

export default SugerpopMap;
