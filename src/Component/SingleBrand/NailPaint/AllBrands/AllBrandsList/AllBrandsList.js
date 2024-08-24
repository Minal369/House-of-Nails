import React from 'react'
import AllBrandsMap from '../AllBrandsMap/AllBrandsMap'
import FilterSection from '../../../../FilterSection/FilterSection'
import img1 from "../../../../../img/AllBrands.jpg";

const AllBrandsList = () => {
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
            <AllBrandsMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default AllBrandsList
