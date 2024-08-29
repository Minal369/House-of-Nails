import React from "react";
import FilterSection from "../../../FilterSection/FilterSection";
import OfferToolKitsMap from "../OfferToolKitsMap/OfferToolKitsMap";
import img1 from "../../../../img/OfferPageToolKits.jpg";

const OfferToolKitsList = () => {
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
            <OfferToolKitsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferToolKitsList;
