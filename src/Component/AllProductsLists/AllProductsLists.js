import React from "react";
import "./AllProductsLists.css";
import AllItemsMap from "../AllItemsMap/AllItemsMap";
import FilterSection from "../FilterSection/FilterSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slickNailpaint1 from "../../img/HomepageAllNailPaint.webp";
import slickNailpaint2 from "../../img/HomepageAllNailStickers.jpg";
import slickNailpaint3 from "../../img/HomepageAllToolKit.jpg";
import slickNailpaint4 from "../../img/HomepageAllJwellery.webp";
import slickNailpaint5 from "../../img/HomepageAllNailArtKit.webp";
import slickNailpaint6 from "../../img/HomepageAllNewins.webp";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon
        className="forwoard-back"
        style={{ fontSize: "30px" }}
      />
    </div>
  );
};
const NextBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon
        className="forwoard-back"
        style={{ fontSize: "30px" }}
      />
    </div>
  );
};
const AllProductsLists = () => {
  return (
    <>
      <div className="allpdcontainer">
        <div className="allpdSlick">
          <div className="slickHomepage">
            <Slider
              autoplay={true}
              autoplayspeed={1000}
              dots={true}
              dotsClass="slick-dots line-indicator"
              infinite={true}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToShow={1}
            >
              <div className="slickNail1">
                <img src={slickNailpaint1} alt="" />
              </div>
              <div className="slickNail2">
                <img src={slickNailpaint2} alt="" />
              </div>
              <div className="slickNail3">
                <img src={slickNailpaint3} alt="" />
              </div>
              <div className="slickNail4">
                <img src={slickNailpaint4} alt="" />
              </div>
              <div className="slickNail5">
                <img src={slickNailpaint5} alt="" />
              </div>
              <div className="slickNail6">
                <img src={slickNailpaint6} alt="" />
              </div>
            </Slider>
          </div>
        </div>
          <div className="product-title">
            <p>ALL PRODUCTS</p>
          </div>
        <div className="allfilterpd">
          <div className="sidebarfilter">
            <FilterSection />
          </div>
          <div className="itemcontainer">
            <AllItemsMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsLists;
