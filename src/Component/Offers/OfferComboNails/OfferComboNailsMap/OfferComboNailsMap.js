import React from "react";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";
import { useOfferContext } from "../../../../Context/OfferContext";

const OfferComboNailsMap = () => {
  const { isLoading, ComboNailPaints } = useOfferContext();
  // console.log(ComboNailPaints);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ComboNailPaints.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
};

export default OfferComboNailsMap;
