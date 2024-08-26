import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import KitwithTraningMap from "../KitwithTraningMap/KitwithTraningMap";
import img1 from "../../../../../img/Kitwithtraningcarousel1.jpg";

const KitwithTraningList = () => {
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
            <KitwithTraningMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default KitwithTraningList;
