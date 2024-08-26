import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import ThreeDShellFlowerMap from '../ThreeDShellFlowerMap/ThreeDShellFlowerMap'
import img1 from "../../../../../img/Threedshellflowercarousel1.jpg";

const ThreeDShellFlowerList = () => {
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
            <ThreeDShellFlowerMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default ThreeDShellFlowerList
