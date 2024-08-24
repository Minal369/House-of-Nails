import React, { useContext } from "react";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../../Context/ProductContext";

const LakmeMap = () => {
  const { isLoading, Lakme } = useContext(NailContext);
    // console.log(Lakme);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Lakme.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default LakmeMap;
