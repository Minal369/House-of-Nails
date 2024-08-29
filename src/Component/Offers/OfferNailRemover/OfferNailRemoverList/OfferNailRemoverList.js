import React from "react";
import FilterSection from "../../../FilterSection/FilterSection";
import OfferNailRemoverMap from "../OfferNailRemoverMap/OfferNailRemoverMap";
import img1 from "../../../../img/OfferPageNailRemover.jpg";

const OfferNailRemoverList = () => {
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
            <OfferNailRemoverMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferNailRemoverList;
