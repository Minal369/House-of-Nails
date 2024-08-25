import React, { useContext } from "react";
import { NailContext } from "../../../../../Context/ProductContext";
import AllItemsLayout from "../../../../AllItemsLayout/AllItemsLayout";

const MicKeyMap = () => {
  const { isLoading, MickeyMouseStickers } = useContext(NailContext);
  // console.log(MickeyMouseStickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {MickeyMouseStickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default MicKeyMap;
