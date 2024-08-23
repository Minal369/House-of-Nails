import React, { useContext } from "react";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../Context/ProductContext";

const NykaaMap = () => {
  const {isLoading, Nykaa } = useContext(NailContext);
//   console.log(Nykaa);
  
  if (isLoading) {
    return <div>....Loading</div>
  }
  return (
    <>
      {Nykaa.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default NykaaMap;
