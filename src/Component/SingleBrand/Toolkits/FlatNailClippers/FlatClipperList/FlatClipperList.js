import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import FlatClipperMap from '../FlatClipperMap/FlatClipperMap';
import img1 from "../../../../../img/Flatnailscarousel1.jpg";

const FlatClipperList = () => {
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
          <FlatClipperMap />
        </div>
      </div>
    </div>
  </>
  )
}

export default FlatClipperList
