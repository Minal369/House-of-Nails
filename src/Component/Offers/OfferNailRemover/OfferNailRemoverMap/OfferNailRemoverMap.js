import React from "react";
import { useOfferContext } from "../../../../Context/OfferContext";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";

const OfferNailRemoverMap = () => {
  const { isLoading, NailsRemover } = useOfferContext();
  // console.log(NailsRemover);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {NailsRemover.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
};

export default OfferNailRemoverMap;
