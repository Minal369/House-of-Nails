import React from "react";
import { useOfferContext } from "../../../../Context/OfferContext";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";

const OfferStickerMap = () => {
  const { isLoading, NailStickers } = useOfferContext();
  // console.log(NailStickers);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {NailStickers.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
};

export default OfferStickerMap;
