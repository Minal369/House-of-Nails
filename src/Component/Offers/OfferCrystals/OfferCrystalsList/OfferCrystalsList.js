import React from "react";
import FilterSection from "../../../FilterSection/FilterSection";
import OfferCrystalsMap from "../OfferCrystalsMap/OfferCrystalsMap";
import img1 from "../../../../img/OfferPageCrystal.jpg";

const OfferCrystalsList = () => {
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
            <OfferCrystalsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCrystalsList;
