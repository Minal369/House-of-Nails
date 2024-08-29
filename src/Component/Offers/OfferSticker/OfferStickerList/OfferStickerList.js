import React from 'react'
import FilterSection from '../../../FilterSection/FilterSection'
import OfferStickerMap from '../OfferStickerMap/OfferStickerMap'
import img1 from "../../../../img/OfferPageStickers.jpg";

const OfferStickerList = () => {
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
            <OfferStickerMap />
          </div>
        </div>
      </div>
    </>
  )
}

export default OfferStickerList
