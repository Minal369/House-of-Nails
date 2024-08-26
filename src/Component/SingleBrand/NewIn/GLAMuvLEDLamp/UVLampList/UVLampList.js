import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import UVLampMap from "../UVLampMap/UVLampMap";
import img1 from "../../../../../img/Glamuvledlampcarousel1.jpg";

const UVLampList = () => {
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
            <UVLampMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default UVLampList;
