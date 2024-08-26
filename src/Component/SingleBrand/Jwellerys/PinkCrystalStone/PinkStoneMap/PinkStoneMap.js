import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const PinkStoneMap = () => {
  const { isLoading, PinkCrystalStone } = useContext(NailContext);
  // console.log(PinkCrystalStone);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {PinkCrystalStone.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default PinkStoneMap;
