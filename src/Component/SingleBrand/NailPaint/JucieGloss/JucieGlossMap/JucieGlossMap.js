import React, { useContext } from "react";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../../Context/ProductContext";

const JucieGlossMap = () => {
  const { isLoading, JucieGloss } = useContext(NailContext);
  console.log(JucieGloss);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {JucieGloss.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default JucieGlossMap;
