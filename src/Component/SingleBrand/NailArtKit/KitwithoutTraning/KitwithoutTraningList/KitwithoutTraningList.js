import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import KitwithoutTraningMap from "../KitwithoutTraningMap/KitwithoutTraningMap";
import img1 from "../../../../../img/Kitwithouttraningcarousel1.webp";

const KitwithoutTraningList = () => {
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
            <KitwithoutTraningMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default KitwithoutTraningList;
