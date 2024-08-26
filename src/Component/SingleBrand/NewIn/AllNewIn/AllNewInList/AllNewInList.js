import React from "react";
import AllNewInMap from "../AllNewInMap/AllNewInMap";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/AllNewIn.jpg";

const AllNewInList = () => {
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
            <AllNewInMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNewInList;
