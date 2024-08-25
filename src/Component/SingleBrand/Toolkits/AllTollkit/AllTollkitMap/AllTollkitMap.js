import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const AllTollkitMap = () => {
  const { isLoading, Toolkit } = useContext(NailContext);
  // console.log(Toolkit);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Toolkit.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllTollkitMap;
