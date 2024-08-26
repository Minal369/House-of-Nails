import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const KitwithoutTraningMap = () => {
  const { isLoading, KitwithoutTraning } = useContext(NailContext);
  // console.log(KitwithoutTraning);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {KitwithoutTraning.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default KitwithoutTraningMap;
