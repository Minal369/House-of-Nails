import React from "react";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";
import { useOfferContext } from "../../../../Context/OfferContext";

const OfferAllPDMap = () => {
  const { isLoading, allOffers } = useOfferContext();
  // console.log(allOffers);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {allOffers.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
};

export default OfferAllPDMap;
