import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import DeadSkinPushMap from "../DeadSkinPushMap/DeadSkinPushMap";
import img1 from "../../../../../img/Deadskinpushcarousel1.jpg";

const DeadSkinPushList = () => {
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
            <DeadSkinPushMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeadSkinPushList;
