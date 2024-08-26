import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import MetalBeadsMap from "../MetalBeadsMap/MetalBeadsMap";
import img1 from "../../../../../img/Metalnailsbeadcarousel1.jpg";

const MetalBeadsList = () => {
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
            <MetalBeadsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetalBeadsList;
