import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import FruiteMap from '../FruiteMap/FruiteMap'
import img1 from "../../../../../img/Fruitstickercarousel1.jpg";

const FruiteList = () => {
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
            <FruiteMap/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FruiteList
