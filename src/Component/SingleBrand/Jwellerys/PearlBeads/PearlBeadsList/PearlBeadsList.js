import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import PearlBeadsMap from "../PearlBeadsMap/PearlBeadsMap";
import img1 from "../../../../../img/Pearlbeadcarousel1.jpg";

const PearlBeadsList = () => {
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
            <PearlBeadsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default PearlBeadsList;
