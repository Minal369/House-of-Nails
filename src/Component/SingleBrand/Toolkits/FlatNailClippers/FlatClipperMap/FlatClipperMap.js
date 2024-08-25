import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const FlatClipperMap = () => {
  const { isLoading, FlatNailClippers } = useContext(NailContext);
  // console.log(FlatNailClippers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {FlatNailClippers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default FlatClipperMap;
