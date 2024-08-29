import React from "react";
import FilterSection from "../../../FilterSection/FilterSection";
import OfferExtensionsMap from "../OfferExtensionsMap/OfferExtensionsMap";
import img1 from "../../../../img/OfferPageNailExtensios.jpg";

const OfferExtensionsList = () => {
  return (
    <>
      <div className="allpdcontainer">
        <div className="allpdTop">
          <img src={img1} alt="" />
        </div>
        <div className="allfilterpd">
          <div className="sidebarfilter">
            <FilterSection />
          </div>
          <div className="itemcontainer">
            <OfferExtensionsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferExtensionsList;
