import React from 'react';
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Elle18carousel1.jpg";
import Elle18Map from '../Elle18Map/Elle18Map';

const Elle18List = () => {
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
            <Elle18Map />
          </div>
        </div>
      </div>
    </>
  )
}

export default Elle18List
