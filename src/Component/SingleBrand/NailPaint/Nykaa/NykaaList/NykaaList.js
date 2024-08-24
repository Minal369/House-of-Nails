import React from 'react'
import NykaaMap from '../NykaaMap/NykaaMap'
import FilterSection from '../../../../FilterSection/FilterSection'
import img1 from "../../../../../img/Nykaascarousel1.jpeg";

const NykaaList = () => {
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
          <NykaaMap />
        </div>
      </div>
    </div>
  </>
  )
}

export default NykaaList