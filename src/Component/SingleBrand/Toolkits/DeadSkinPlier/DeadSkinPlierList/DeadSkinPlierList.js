import React from "react";
import DeadSkinPlierMap from "../DeadSkinPlierMap/DeadSkinPlierMap";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Deadskinpliercarousel1.jpg";

const DeadSkinPlierList = () => {
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
            <DeadSkinPlierMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeadSkinPlierList;
