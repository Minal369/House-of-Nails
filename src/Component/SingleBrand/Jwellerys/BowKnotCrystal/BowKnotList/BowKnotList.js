import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import BowKnotMap from "../BowKnotMap/BowKnotMap";
import img1 from "../../../../../img/Bowknotcrystalcarousel1.jpg";

const BowKnotList = () => {
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
            <BowKnotMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default BowKnotList;
