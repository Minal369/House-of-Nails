import React, { useEffect } from "react";
import "./AllpdDetails.css";
import girlimg from "../../img/girl-img-4.jpg";
import { useMinalContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import Stars from "../Stars/Stars";
import AddToBag from "../AddToBag/AddToBag";

const API = "https://all-product-api.onrender.com/allProduct";

const AllpdDetails = () => {
  const { getSingleProduct, isSingleLoading, SingleProducts } =
    useMinalContext();
  console.log(SingleProducts);
  const { id } = useParams();
  // console.log(id);

  const {
    img1,
    img2,
    img3,
    img4,
    imgSrc,
    description,
    Info,
    info,
    Benefits,
    benefits,
    Addinfo,
    addinfo,
    Howtouse,
    howtouse,
    howtoapply,
    Productdetails,
    productdetails,
    MRP,
    mrp,
    offer,
    price,
    rating,
  } = SingleProducts;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  return (
    <>
      <div className="productdetailscontainer">
        <div className="pdleft">
          <div className="pdimg">
            <div className="img1">
              <img src={img1} alt="" />
            </div>
            <div className="img2">
              <img src={img2} alt="" />
            </div>
            <div className="img3">
              <img src={img3} alt="" />
            </div>
            <div className="img4">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="mainimg">
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className="pdright">
          <div className="topcontainer">
            <div className="pdtitle">
              <h3>{description}</h3>
            </div>
            <div className="ratings">
              <Stars rating={rating} />
            </div>
            <div className="mainprice">
              <div className="mrptitle">
                <p>{MRP}</p>
                <div className="mrpprice">
                  <p>{mrp}</p>
                </div>
              </div>
              <div className="mrpmainprice">
                <p>
                  <i className="fa-solid fa-indian-rupee-sign rupees"></i>
                  {price}
                </p>
              </div>
              <div className="mrpoffer">
                <p>{offer}</p>
              </div>
            </div>
            <div className="taxline">
              <p>inclusive of all taxes</p>
            </div>
            {
              <div className="colorbox">
                <div className="colortitle">
                  <p>Colors</p>
                </div>
                <div className="colorlist">
                  <div className="pink">
                    <button></button>
                  </div>
                  <div className="purple">
                    <button></button>
                  </div>
                  <div className="brown">
                    <button></button>
                  </div>
                  <div className="nude">
                    <button></button>
                  </div>
                  <div className="red">
                    <button></button>
                  </div>
                  <div className="blue">
                    <button></button>
                  </div>
                  <div className="orange">
                    <button></button>
                  </div>
                  <div className="green">
                    <button></button>
                  </div>
                  <div className="yellow">
                    <button></button>
                  </div>
                  <div className="white">
                    <button></button>
                  </div>
                  <div className="black">
                    <button></button>
                  </div>
                </div>
              </div>
            }

            <div className="addtocardbtn">
              <AddToBag Addcard={SingleProducts} />
            </div>
          </div>
          <div className="bottom-container">
            <div className="returnpolicycontainer">
              <div className="returnlayout">
                <i class="fa-solid fa-boxes-stacked pdlogo"></i>
                <p>100% Genuine Products</p>
                <p className="popup">
                  100% Authentic, directly purchased from Elle 18.
                </p>
              </div>
              <div className="returnlayout">
                <i class="fa-solid fa-rotate-left pdlogo"></i>
                <p>Easy Return Policy</p>
                <p className="popups">
                  Returns/replacements are accepted for unused products only in
                  case of defects, damages during delivery, missing, or wrong
                  products delivered. Return requests can be raised on the 'My
                  Order' section within 15 days of delivery.
                </p>
              </div>
              <div className="returnslayout">
                <p>Sold by :HOUSE OF NAILS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="maindescriptiontitle">
        <h2>Product Description</h2>
      </div>
      <div className="leftitemcontainer">
        <div className="leftproductcontainer">
          <div className="pdtopnav">
            <ul className="nav nav-underline">
              <li className="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#description"
                  data-bs-toggle="tab"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#addinfo" data-bs-toggle="tab">
                  Additional Information
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#howtoapply" data-bs-toggle="tab">
                  How to Use
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#ingredients" data-bs-toggle="tab">
                  About Product
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="active tab-pane fade in show Description"
                id="description"
              >
                <div className="desc">
                  <p>{Info}:</p>
                </div>
                <div className="info">
                  <p>{info}</p>
                  <p className="benefitinfoname">{Benefits}</p>
                  <p>{benefits}</p>
                </div>
              </div>
              <div className="tab-pane fade Descriptio" id="addinfo">
                <div className="desc">
                  <p>{Addinfo} :</p>
                </div>
                <div className="info">
                  <p>{addinfo}</p>
                </div>
              </div>
              <div className="tab-pane fade Description" id="howtoapply">
                <div className="desc">
                  <p>{Howtouse}:</p>
                </div>
                <div className="info">
                  <p>{howtouse}</p> <p>{howtoapply}</p>
                </div>
              </div>
              <div className="tab-pane fade Description" id="ingredients">
                <div className="desc">
                  <p>{Productdetails}:</p>
                </div>
                <div className="info">
                  <p>{productdetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightimg">
          <img src={girlimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AllpdDetails;
