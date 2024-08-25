import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import LafyMap from '../LafyMap/LafyMap'
import img1 from "../../../../../img/Leafymodernscarousel1.jpg";

const LafyList = () => {
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
            <LafyMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default LafyList
