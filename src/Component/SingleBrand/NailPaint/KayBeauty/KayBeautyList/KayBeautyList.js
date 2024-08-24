import React from 'react'
import FilterSection from '../../../../FilterSection/FilterSection'
import img1 from "../../../../../img/Kaysbeautyscarousel1.jpg";
import KayBeautyMap from '../KayBeautyMap/KayBeautyMap';

const KayBeautyList = () => {
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
          <KayBeautyMap/>
        </div>
      </div>
    </div>
  </>
  )
}

export default KayBeautyList
