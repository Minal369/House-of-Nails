import React from "react";
import { useMinalContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const AllBrandsMap = () => {
  const { isLoading, Brand } = useMinalContext();
  // console.log(Brand);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Brand.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllBrandsMap;
