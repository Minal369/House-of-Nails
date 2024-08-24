import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Colorbarscarousel1.jpg";
import ColorbarMap from "../ColorbarMap/ColorbarMap";

const ColorbarList = () => {
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
            <ColorbarMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorbarList;
