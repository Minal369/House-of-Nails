import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/AllNailArtKit.jpg";
import AllArtKitMap from "../AllArtKitMap/AllArtKitMap";

const AllArtKitList = () => {
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
            <AllArtKitMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllArtKitList;
