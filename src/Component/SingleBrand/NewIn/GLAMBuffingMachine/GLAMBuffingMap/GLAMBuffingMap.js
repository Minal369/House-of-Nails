import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const GLAMBuffingMap = () => {
  const { isLoading, GLAMBuffingMachine } = useContext(NailContext);
  // console.log(GLAMBuffingMachine);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {GLAMBuffingMachine.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default GLAMBuffingMap;
