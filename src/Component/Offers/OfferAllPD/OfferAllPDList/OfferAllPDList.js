import React from "react";
import OfferAllPDMap from "../OfferAllPDMap/OfferAllPDMap";
import FilterSection from "../../../FilterSection/FilterSection";
import img1 from "../../../../img/OfferPageAllPD.jpg";

const OfferAllPDList = () => {
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
            <OfferAllPDMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferAllPDList;
