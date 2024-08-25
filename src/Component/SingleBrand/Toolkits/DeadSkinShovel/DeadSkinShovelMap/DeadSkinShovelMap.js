import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const DeadSkinShovelMap = () => {
  const { isLoading, DeadSkinShovel } = useContext(NailContext);
  // console.log(DeadSkinShovel);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {DeadSkinShovel.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default DeadSkinShovelMap;
