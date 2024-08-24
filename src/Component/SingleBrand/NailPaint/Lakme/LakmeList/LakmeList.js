import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Lakmecarousel1.jpg";
import LakmeMap from "../LakmeMap/LakmeMap";

const LakmeList = () => {
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
            <LakmeMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default LakmeList;
