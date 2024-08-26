import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import ThreeDStarMap from "../ThreeDStarMap/ThreeDStarMap";
import img1 from "../../../../../img/Threedstarbeadcarousel1.jpg";

const ThreeDStarList = () => {
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
            <ThreeDStarMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDStarList;
