import React from "react";
import FacesMap from "../FacesMap/FacesMap";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Facenailscarousel1.jpg";

const FacesList = () => {
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
            <FacesMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default FacesList;
