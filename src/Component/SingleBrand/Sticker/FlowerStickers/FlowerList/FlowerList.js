import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import FlowerMap from "../FlowerMap/FlowerMap";
import img1 from "../../../../../img/Flowerstickercarousel1.jpg";

const FlowerList = () => {
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
            <FlowerMap/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerList;
