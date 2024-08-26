import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import LYNBuffingMap from "../LYNBuffingMap/LYNBuffingMap";
import img1 from "../../../../../img/Lynnailbuffingcarousel1.jpg";

const LYNBuffingList = () => {
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
            <LYNBuffingMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default LYNBuffingList;
