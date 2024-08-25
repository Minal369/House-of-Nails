import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import ObliqueClippersMap from '../ObliqueClippersMap/ObliqueClippersMap'
import img1 from "../../../../../img/Obliquenailscarousel1.jpg";

const ObliqueClippersList = () => {
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
            <ObliqueClippersMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default ObliqueClippersList
