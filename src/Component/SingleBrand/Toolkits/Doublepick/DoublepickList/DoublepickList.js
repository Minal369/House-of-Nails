import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import DoublepickMap from "../DoublepickMap/DoublepickMap";
import img1 from "../../../../../img/Doublepickscarousel1.jpg";

const DoublepickList = () => {
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
            <DoublepickMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoublepickList;
