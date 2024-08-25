import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import MicKeyMap from "../MicKeyMap/MicKeyMap";
import img1 from "../../../../../img/Mickeymousecarousel1.jpg";

const MicKeyList = () => {
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
            <MicKeyMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default MicKeyList;
