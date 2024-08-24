import React from "react";
import JucieGlossMap from "../JucieGlossMap/JucieGlossMap";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/juiceglosscarousel1.webp";

const JucieGlossList = () => {
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
            <JucieGlossMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default JucieGlossList;
