import React from "react";
import FilterSection from "../../../FilterSection/FilterSection";
import OfferComboNailsMap from "../OfferComboNailsMap/OfferComboNailsMap";
import img1 from "../../../../img/OfferPageComboNailPaint.jpg";

const OfferComboNailsList = () => {
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
            <OfferComboNailsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferComboNailsList;
