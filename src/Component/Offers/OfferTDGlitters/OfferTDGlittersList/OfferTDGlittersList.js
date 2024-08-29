import React from "react";
import OfferTDGlittersMap from "../OfferTDGlittersMap/OfferTDGlittersMap";
import FilterSection from "../../../FilterSection/FilterSection";
import img1 from "../../../../img/OfferPage3DNailArtBottle.webp";

const OfferTDGlittersList = () => {
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
            <OfferTDGlittersMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferTDGlittersList;
