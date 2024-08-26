import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import GLAMBuffingMap from '../GLAMBuffingMap/GLAMBuffingMap'
import img1 from "../../../../../img/Glambuffingmachinecarousel1.jpg";

const GLAMBuffingList = () => {
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
          <GLAMBuffingMap />
        </div>
      </div>
    </div>
  </>
  )
}

export default GLAMBuffingList
