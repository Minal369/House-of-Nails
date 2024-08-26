import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const LYNBuffingMap = () => {
  const { isLoading, LYNNailBuffing } = useContext(NailContext);
  // console.log(LYNNailBuffing);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {LYNNailBuffing.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default LYNBuffingMap;
