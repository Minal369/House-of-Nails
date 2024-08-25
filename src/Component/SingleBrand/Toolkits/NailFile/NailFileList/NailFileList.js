import React from 'react'
import NailFileMap from '../NailFileMap/NailFileMap'
import FilterSection from '../../../../FilterSection/FilterSection'
import img1 from "../../../../../img/Nailfilescarousel1.jpg";

const NailFileList = () => {
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
            <NailFileMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default NailFileList
