import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/AllStickers.jpg";
import AllStickersMap from "../AllStickersMap/AllStickersMap";

const AllStickersList = () => {
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
            <AllStickersMap/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllStickersList;
