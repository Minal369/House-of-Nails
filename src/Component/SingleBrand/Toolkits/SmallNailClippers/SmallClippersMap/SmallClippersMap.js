import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const SmallClippersMap = () => {
  const { isLoading, SmallNailClippers } = useContext(NailContext);
  // console.log(SmallNailClippers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {SmallNailClippers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default SmallClippersMap;
