import React from "react";
import "./AllpdDetails.css";
import img1 from "../../img/girl-img-4.jpg";

const AllpdDetails = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="productdetailscontainer">
        <div className="pdleft">
          <div className="pdimg">
            <div className="img1">
              <img src={product.img1} alt="" />
            </div>
            <div className="img2">
              <img src={product.img2} alt="" />
            </div>
            <div className="img3">
              <img src={product.img3} alt="" />
            </div>
            <div className="img4">
              <img src={product.img4} alt="" />
            </div>
          </div>
          <div className="mainimg">
            <img src={product.imgSrc} alt={product.name} />
          </div>
        </div>
        <div className="pdright">
          <div className="topcontainer">
            <div className="pdtitle">
              <h3>{product.description}</h3>
            </div>
            <div className="ratings">
              <Stars rating={product.rating} />
            </div>
            <div className="mainprice">
              <div className="mrptitle">
                <p>{product.MRP}</p>
                <div className="mrpprice">
                  <p>{product.mrp}</p>
                </div>
              </div>
              <div className="mrpmainprice">
                <p>
                  <i className="fa-solid fa-indian-rupee-sign rupees"></i>{" "}
                  {product.price}
                </p>
              </div>
              <div className="mrpoffer">
                <p>{product.offer}</p>
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
              <div className="addbtn">
                <button
                  onClick={() =>
                    addToCart(
                      product.id,
                      product.imgSrc,
                      product.description,
                      product.price,
                      product.MRP,
                      product.mrp
                    )
                  }
                >
                  Add To Bag
                </button>
              </div>
              <div className="buybtn">
                <button>Buy Now</button>
              </div>
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
                  <p>{product.Info}:</p>
                </div>
                <div className="info">
                  <p>{product.info}</p>
                  <p className="benefitinfoname">{product.Benefits}</p>
                  <p>{product.benefits}</p>
                </div>
              </div>
              <div className="tab-pane fade Descriptio" id="addinfo">
                <div className="desc">
                  <p>{product.Addinfo} :</p>
                </div>
                <div className="info">
                  <p>{product.addinfo}</p>
                </div>
              </div>
              <div className="tab-pane fade Description" id="howtoapply">
                <div className="desc">
                  <p>{product.Howtouse}:</p>
                </div>
                <div className="info">
                  <p>{product.howtouse}</p> <p>{product.howtoapply}</p>
                </div>
              </div>
              <div className="tab-pane fade Description" id="ingredients">
                <div className="desc">
                  <p>{product.Productdetails}:</p>
                </div>
                <div className="info">
                  <p>{product.productdetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightimg">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default AllpdDetails;
