import React from "react";
import "./AllItemsLayout.css";

const AllItemsLayout = (mixedPD) => {
  const { imgSrc, titles, MRP, mrp, offer, price } = mixedPD;
  return (
    <>
      <div className="productlists-cards-container">
        <div className="cardlayout">
          <i className="fa-regular fa-heart hearts"></i>
          <div className="card-img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="carddesc">
            <p>{titles}</p>
          </div>
          <div className="price">
            <div className="mrp">
              <p>{MRP}</p>
              <p className="mrp-price">{mrp}</p>
            </div>
            <div className="offer">
              <p>{offer}</p>
            </div>
          </div>
          <div className="cardprice">
            <p>
              <i className="fa-solid fa-indian-rupee-sign rupees">{price}</i>
            </p>
          </div>
          <div className="cardsbtns">
            <p>Add to Bag</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllItemsLayout;
