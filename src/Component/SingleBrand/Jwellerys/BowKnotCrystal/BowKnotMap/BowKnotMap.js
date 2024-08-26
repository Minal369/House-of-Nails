import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const BowKnotMap = () => {
  const { isLoading, BowKnot } = useContext(NailContext);
  // console.log(BowKnot);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {BowKnot.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default BowKnotMap;
