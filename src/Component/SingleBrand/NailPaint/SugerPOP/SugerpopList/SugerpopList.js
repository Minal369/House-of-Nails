import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/sugerpopcarousel1.jpg";
import SugerpopMap from "../SugerpopMap/SugerpopMap";

const SugerpopList = () => {
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
            <SugerpopMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default SugerpopList;
