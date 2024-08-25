import React from "react";
import SmallClippersMap from "../SmallClippersMap/SmallClippersMap";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Smallnailclippercarousel1.jpg";

const SmallClippersList = () => {
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
            <SmallClippersMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallClippersList;
