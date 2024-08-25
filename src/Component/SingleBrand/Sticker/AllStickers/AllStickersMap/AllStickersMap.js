import React, { useContext } from "react";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../../Context/ProductContext";

const AllStickersMap = () => {
  const { isLoading, Stickers } = useContext(NailContext);
  // console.log(Stickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Stickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllStickersMap;
