import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const ColorbarMap = () => {
  const { isLoading, Colorbar } = useContext(NailContext);
  // console.log(Colorbar);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Colorbar.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default ColorbarMap;
