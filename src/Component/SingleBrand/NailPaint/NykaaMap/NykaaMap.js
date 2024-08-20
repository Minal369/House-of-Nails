import React, { useContext } from "react";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../Context/ProductContext";

const NykaaMap = () => {
  const { nykaa } = useContext(NailContext);
  return (
    <>
      {nykaa.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default NykaaMap;
