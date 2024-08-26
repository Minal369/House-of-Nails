import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";
const AllNewInMap = () => {
  const { isLoading, NewIn } = useContext(NailContext);
  // console.log(NewIn);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {NewIn.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default AllNewInMap;
