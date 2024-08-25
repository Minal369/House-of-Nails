import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import ThreeDMap from "../ThreeDMap/ThreeDMap";
import img1 from "../../../../../img/Threedstickercarousel1.jpg";

const ThreeDList = () => {
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
            <ThreeDMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDList;
