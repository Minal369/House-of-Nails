import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import AllJwelleryMap from "../AllJwelleryMap/AllJwelleryMap";
import img1 from "../../../../../img/AllNailsJwellery.jpg";

const AllJwelleryList = () => {
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
            <AllJwelleryMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJwelleryList;
