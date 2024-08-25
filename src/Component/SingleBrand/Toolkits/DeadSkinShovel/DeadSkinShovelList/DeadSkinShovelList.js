import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import DeadSkinShovelMap from "../DeadSkinShovelMap/DeadSkinShovelMap";
import img1 from "../../../../../img/Deadskinshovelcarousel1.jpg";

const DeadSkinShovelList = () => {
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
            <DeadSkinShovelMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeadSkinShovelList;
