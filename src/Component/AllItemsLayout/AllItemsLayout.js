import React from "react";
import "./AllItemsLayout.css";
import Stars from "../Stars/Stars";
import {NavLink} from "react-router-dom";

const AllItemsLayout = (mixedPD) => {
  const { id, imgSrc, titles, MRP, mrp, offer, price, rating } = mixedPD;
  return (
    <>
    <NavLink to={`/SingleProduct/${id}`} style={{ color: "inherit" }}>
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
          <div className="rating">
            <Stars rating={rating} />
          </div>
          <div className="cardsbtns">
            <p>Add to Bag</p>
          </div>
        </div>
      </div>
      </NavLink>
    </>
  );
};

export default AllItemsLayout;
