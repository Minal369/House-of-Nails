import React from 'react';
import "./NGiftCards.css";
import img1 from "../../img/giftcard.png";
import img2 from "../../img/giftcard2.png";

const NGiftCards = () => {
  return (
   <>
    <div className="giftnavbarbaground">
        <div className="giftcardnavbar">
          <div className="giftcardimg">
            <div className="giftcardimg1">
              <img src={img1} alt="" />
            </div>
            <div className="giftcardimg2">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default NGiftCards
