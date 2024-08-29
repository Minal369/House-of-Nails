import React from "react";
import OfferStripingTapesMap from "../OfferStripingTapesMap/OfferStripingTapesMap";
import FilterSection from "../../../FilterSection/FilterSection";
import img1 from "../../../../img/OfferPageStripingTapes.jpg";

const OfferStripingTapesList = () => {
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
            <OfferStripingTapesMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferStripingTapesList;
