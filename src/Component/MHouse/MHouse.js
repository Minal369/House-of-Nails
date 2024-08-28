import React from "react";
import "./MHouse.css";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MhousetopBg from "../../img/MhouseAllpdTopBG.jpg";
import allTopPd from "../../img/MhouseAllPD.jpeg";
import allNailPaintpd from "../../img/MhouseAllNailPaintPD1.jpg";
import NailsSlickBG from "../../img/MhouseNailsSlickBg.jpg";
import slickNailpaint1 from "../../img/MhouseNailsSugerpop.jpg";
import slickNailpaint2 from "../../img/MhouseNailsNaykaa.jpg";
import slickNailpaint3 from "../../img/MhouseNailsLakme.jpg";
import slickNailpaint4 from "../../img/MhouseNailsDebellegel.jpeg";
import slickNailpaint5 from "../../img/MhouseNailsJuicenail.webp";
import slickNailpaint6 from "../../img/MhouseNailsElle18.jpg";
import slickNailpaint7 from "../../img/MhouseNailsKaybeauty.jpg";
import slickNailpaint8 from "../../img/MhouseNailsFace.jpg";
import slickNailpaint9 from "../../img/MhouseNailsColorbar.webp";
import allStickerspd from "../../img/MhouseSticker.webp";
import stickersBG from "../../img/MhouseStickerBG.webp";
import stickersPdBg from "../../img/MhouseStickerPdBg.jpg";
import slickStickers1 from "../../img/MhouseStickerLetter.jpg";
import slickStickers2 from "../../img/MhouseStickerMickeMouse.webp";
import slickStickers3 from "../../img/MhouseStickerFlower.jpg";
import slickStickers4 from "../../img/MhouseStickerFruit.jpeg";
import slickStickers5 from "../../img/MhouseStickerLeaf.jpg";
import slickStickers6 from "../../img/MhouseSticker3D.webp";
import allToolkitspd from "../../img/MhouseToolkitAll.jpg";
import allToolkitsBG from "../../img/MhouseToolkitBG.jpg";
import pdpinkBg from "../../img/MhouseToolkitPDBG.jpg";
import slickToolkit1 from "../../img/MhouseToolkitFlatnailclipper.jpg";
import slickToolkit2 from "../../img/MhouseToolkitObliquecippers.jpg";
import slickToolkit3 from "../../img/MhouseToolkitSmallnailclipper.jpg";
import slickToolkit4 from "../../img/MhouseToolkitDeadskinpiller.jpg";
import slickToolkit5 from "../../img/MhouseToolkitNailfile.jpg";
import slickToolkit6 from "../../img/MhouseToolkitDoublepick.jpg";
import slickToolkit7 from "../../img/MhouseToolkitDeadskinpush.jpg";
import slickToolkit8 from "../../img/MhouseToolkitDeadskinshovel.avif";
import allJwellerypd from "../../img/MhouseJwelleryallpd.webp";
import JwelleryPdBg from "../../img/MhouseJwelleryPdBg.jpg";
import slickJwellery1 from "../../img/MhouseJwelleryMetalbeats.jpg";
import slickJwellery2 from "../../img/MhouseJwelleryBowknotcrystal.webp";
import slickJwellery3 from "../../img/MhouseJwellery3dFlowershell.jpg";
import slickJwellery4 from "../../img/MhouseJwelleryPinkcrystalstone.jpg";
import slickJwellery5 from "../../img/MhouseJwelleryPearlbeads.webp";
import slickJwellery6 from "../../img/MhouseJwellery3dalloystar.jpg";
import nailArtkitTitlebg from "../../img/MhouseNailartkitTitlebg.avif";
import nailArtkitbg from "../../img/MhouseNailartkitBG.jpg";
import nailArtkit1 from "../../img/MhouseNailartkitwithouttranning.jpg";
import nailArtkit2 from "../../img/MhouseNailartkitwithtranning.jpg";
import NewinMainPD from "../../img/Mhousenewin.webp";
import NewinpdBG from "../../img/MhouseNewinBG.jpg";
import Newin1 from "../../img/MhouseNewinLYNbuffing.jpg";
import Newin2 from "../../img/MhouseNewinGlamBuffing.jpg";
import Newin3 from "../../img/MhouseNewinglamUVledmc.webp";
import giftcard from "../../img/MhouseGiftCard.jpg";
import brandBg from "../../img/MhouseBrandsBg.jpg";
import { NavLink } from "react-router-dom";

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
const MHouse = () => {
  return (
    <>
      <div className="mainofferwhite">
        <div className="allpdtopbg">
          <img src={MhousetopBg} alt="" />
        </div>
        <NavLink to="/AllPD">
          <div className="mhouseAllPd">
            <img src={allTopPd} alt="" />
          </div>
        </NavLink>
        {/* -----------2nd blog------------ */}
        <NavLink to="/Brand">
          <div className="NailPaintsPd">
            <img src={allNailPaintpd} alt="" />
          </div>
        </NavLink>
        {/* -------------white slick carousel----------- */}
        <div className="imgSlider1">
          <div className="slickNailsBg">
            <div className="brandtitlename">
              <p>Top Nail Paints Brand</p>
            </div>
            <img src={NailsSlickBG} alt="" />
          </div>
          <div className="slickcarousel">
            <Slider
              //  autoplay={true}
              autoplaySpeed={2000}
              //  dots={true}
              //  dotsClass="slick-dots custom-indicator"
              initialSlide={0}
              infinite={false}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToShow={3}
              slidesToScroll={1}
            >
              <div className="slickNailsone">
                <NavLink to="/SugerPoP">
                  <img src={slickNailpaint1} alt="" />
                </NavLink>
              </div>
              <div className="slickNailstwo">
                <NavLink to="/Nykaa">
                  <img src={slickNailpaint2} alt="" />
                </NavLink>
              </div>
              <div className="slickNailsthree">
                <NavLink to="/Lakme">
                  <img src={slickNailpaint3} alt="" />
                </NavLink>
              </div>
              <div className="slickNailsfour">
                <NavLink to="/DeBelle">
                  <img src={slickNailpaint4} alt="" />
                </NavLink>
              </div>
              <div className="slickNailsfive">
                <NavLink to="/Jucie-Gloss">
                  <img src={slickNailpaint5} alt="" />
                </NavLink>
              </div>
              <div className="slickNailssix">
                <NavLink to="/Elle18">
                  <img src={slickNailpaint6} alt="" />
                </NavLink>
              </div>
              <div className="slickNailsseven">
                <NavLink to="/Kay-Beauty">
                  <img src={slickNailpaint7} alt="" />
                </NavLink>
              </div>
              <div className="slickNailseight">
                <NavLink to="/Face">
                  <img src={slickNailpaint8} alt="" />
                </NavLink>
              </div>
              <div className="slickNailsnine">
                <NavLink to="/Colorbar">
                  <img src={slickNailpaint9} alt="" />
                </NavLink>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* ---------------purpol Stickers carousel---------------- */}
      <div className="mainpurpalcontainer">
        <div className="mainpurpalBG">
          <img src={stickersBG} alt="" />
        </div>
        <div className="purpalcolorbg">
          <NavLink to="/AllStickers">
            <div className="purpalmainsticker">
              <img src={allStickerspd} alt="" />
            </div>
          </NavLink>
          <div className="purpalimgslider1">
            <img src={stickersPdBg} alt="" />
            <div className="purpalslickcarousel">
              <Slider
                autoplaySpeed={2000}
                initialSlide={0}
                infinite={false}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                slidesToShow={3}
                slidesToScroll={1}
              >
                <div className="slickStickersone">
                  <NavLink to="/LetterSticker">
                    <img src={slickStickers1} alt="" />
                  </NavLink>
                  <p>Letter Stickers</p>
                </div>
                <div className="slickStickerstwo">
                  <NavLink to="/MickeyMouseStickers">
                    <img src={slickStickers2} alt="" />
                  </NavLink>
                  <p>Mickey Mouse Stickers</p>
                </div>
                <div className="slickStickersthree">
                  <NavLink to="/FlowerStickers">
                    <img src={slickStickers3} alt="" />
                  </NavLink>
                  <p>Flower Stickers</p>
                </div>
                <div className="slickStickersfour">
                  <NavLink to="/FruitStickers">
                    <img src={slickStickers4} alt="" />
                  </NavLink>
                  <p>Fruit Stickers</p>
                </div>
                <div className="slickStickersfive">
                  <NavLink to="/Leaf&ModernStickers">
                    <img src={slickStickers5} alt="" />
                  </NavLink>
                  <p>Leafy & Modern Sticker</p>
                </div>
                <div className="slickStickerssix">
                  <NavLink to="/3DStickers">
                    <img src={slickStickers6} alt="" />
                  </NavLink>
                  <p>3D Stickers</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* -------------light pistNavLink Tool Kit------------------- */}
      <div className="mainlightpista">
        <div className="topPistBG">
          <img src={allToolkitsBG} alt="" />
        </div>
        <div className="lightpista">
          <div className="onlylight-pista">
            <NavLink to="/AllToolkit">
              <div className="lightpistatoolkit">
                <img src={allToolkitspd} alt="" />
              </div>
            </NavLink>
            <div className="lightpistaimgslider1">
              <div className="pistabrandtitlename">
                <p>Top Tool Kit Brand</p>
              </div>
              <div className="allpinkcontainer">
                {/* -----------1---------- */}
                <NavLink to="/FlatNailClippers">
                  <div className="diveforThree1">
                    <div className="pdpinkBg1">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd1">
                      <img src={slickToolkit1} alt="" />
                    </div>
                    <div className="toolkitTitle1">
                      <p>Flat Nail Clippers</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------2---------- */}
                <NavLink to="/ObliqueNailClipper">
                  <div className="diveforThree2">
                    <div className="pdpinkBg2">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd2">
                      <img src={slickToolkit2} alt="" />
                    </div>
                    <div className="toolkitTitle2">
                      <p>Oblique Nail Clippers</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------3---------- */}
                <NavLink to="/SmallNailClipper">
                  <div className="diveforThree3">
                    <div className="pdpinkBg3">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd3">
                      <img src={slickToolkit3} alt="" />
                    </div>
                    <div className="toolkitTitle3">
                      <p>Small Nail Clippers</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------4---------- */}
                <NavLink to="/DeadSkinPiler">
                  <div className="diveforThree4">
                    <div className="pdpinkBg4">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd4">
                      <img src={slickToolkit4} alt="" />
                    </div>
                    <div className="toolkitTitle4">
                      <p>Dead Skin Piler</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------5---------- */}
                <NavLink to="/NailFile">
                  <div className="diveforThree5">
                    <div className="pdpinkBg5">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd5">
                      <img src={slickToolkit5} alt="" />
                    </div>
                    <div className="toolkitTitle5">
                      <p>Nail File</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------6---------- */}
                <NavLink to="/Doublepick">
                  <div className="diveforThree6">
                    <div className="pdpinkBg6">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd6">
                      <img src={slickToolkit6} alt="" />
                    </div>
                    <div className="toolkitTitle6">
                      <p>Double Pick</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------7---------- */}
                <NavLink to="/DeadSkinPush">
                  <div className="diveforThree7">
                    <div className="pdpinkBg7">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd7">
                      <img src={slickToolkit7} alt="" />
                    </div>
                    <div className="toolkitTitle7">
                      <p>Dead Skin Push</p>
                    </div>
                  </div>
                </NavLink>
                {/* -----------8---------- */}
                <NavLink to="/DeadSkinShovel">
                  <div className="diveforThree8">
                    <div className="pdpinkBg8">
                      <img src={pdpinkBg} alt="" />
                    </div>
                    <div className="toolkitipd8">
                      <img src={slickToolkit8} alt="" />
                    </div>
                    <div className="toolkitTitle8">
                      <p>Dead Skin Shovel</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------lightpurple jwellery------------------- */}

      <div className="lightpurple-jwellery">
        <div className="lightPjwelley">
          <div className="lightPbrandtitle">
            <p>Top Jwellery Brand</p>
          </div>
          <NavLink to="/AllJwellery">
            <div className="lightPmainjwellery">
              <img src={allJwellerypd} alt="" />
            </div>
          </NavLink>
        </div>
        {/* PD Bg jwellery */}
        <div className="lightJwelleyimages">
          <div className="jwellery-lightpurple">
            <NavLink to="/MetalNailsBeads">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p>Metal Nails Beads</p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery1} alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/BowKnotCrystal">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p>Bow-Knot Crystal</p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery2} alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/3DShellFlower">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p>3D Shell Flower </p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery3} alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/PinkCrystalStone">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p>Pink Crystal Stone</p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery4} alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/PearlBeads">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p> Pearl Beads </p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery5} alt="" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/3DMeatlAlloyStare">
              <div className="ligtpurpaleJwellery1">
                <div className="jwelleryPdBg1">
                  <img src={JwelleryPdBg} alt="" />
                  <p>3D Metal Alloy Star Bead</p>
                </div>
                <div className="jwelleryPD1">
                  <img src={slickJwellery6} alt="" />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/*-------------------- dark-pink-Nail art kit--------------- */}
      <div className="mainedarkpinkartkit">
        <NavLink to="/AllArtKit">
          <div className="drkpinkbgColor">
            <img src={nailArtkitTitlebg} alt="" />
          </div>
        </NavLink>
        <div className="maindarkipinkartkitPD">
          <NavLink to="/KitWithTranning">
            <div className="darkpinkartkitimg1">
              <div className="bagroundimgartkit1">
                <img src={nailArtkitbg} alt="" />
              </div>
              <div className="darkpinkitPDimg1">
                <img src={nailArtkit1} alt="" />
              </div>
            </div>
          </NavLink>
          <NavLink to="/KitWithoutTranning">
            <div className="darkpinkartkitimg2">
              <div className="bagroundimgartkit2">
                <img src={nailArtkitbg} alt="" />
              </div>
              <div className="darkpinkitPDimg2">
                <img src={nailArtkit2} alt="" />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      {/*----------------- Purple New in --------------- */}
      <div className="purpledarkNewin">
        <div className="TopTitleNewin">
          <p>TOP Nails CARE EQUIPMENTS</p>
        </div>
        <NavLink to="/AllNewIn">
          <div className="toppurpleBG">
            <img src={NewinMainPD} alt="" />
          </div>
        </NavLink>
        <div className="PDnweinBg1">
          <img src={NewinpdBG} alt="" />
        </div>
        <div className="mainPurpledarkNewin">
          <div className="purpledarkmainimg1">
            <NavLink to="/LYNNailBuffing">
              <div className="purpleNewinPD1">
                <img src={Newin1} alt="" />
              </div>
            </NavLink>
            <NavLink to="/GLAMBuffingMachine">
              <div className="purpleNewinPD2">
                <img src={Newin2} alt="" />
              </div>
            </NavLink>
            <NavLink to="/GLAMuvLEDLamp">
              <div className="purpleNewinPD3">
                <img src={Newin3} alt="" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* ----------gift card page---------- */}
      <NavLink to="/GiftCard">
        <div className="giftcardbgcolor">
          <div className="Giftcard">
            <img src={giftcard} alt="" />
          </div>
        </div>
      </NavLink>
      {/* -----------Brand page tag--------- */}
      <NavLink to="/OfferMhouse">
        <div className="lastbrandpage">
          <div className="brandlogo">
            <div className="mainbgBrand">
              <img src={brandBg} alt="" />
            </div>
          </div>
        </div>
      </NavLink>
      {/* ----------------Policies dive------------- */}
      <div className="Mainpolicie">
        <div className="policie">
          <div className="policiefreeship">
            <div className="policiefree-shipping-icons">
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="policiefree-shipping">
              <p>FREE SHIPPING</p>
              <span>On Orders Above ₹299</span>
            </div>
          </div>
          <div className="policiereturn">
            <div className="policie-easy-return-icons">
              <i className="fa-solid fa-rotate"></i>
            </div>
            <div className="policie-easy-return">
              <p>EASY RETURNS</p>
              <span>15-Day Return Policy</span>
            </div>
          </div>
          <div className="policie-auth100">
            <div className="policie-authentic-icons">
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="policie-auth-pd">
              <p>100% AUTHENTIC</p>
              <span>Products Sourced Directly</span>
            </div>
          </div>
          <div className="policiebrands">
            <div className="policiebrands-icons">
              <i className="fa-solid fa-tag"></i>
            </div>
            <div className="policiebrand">
              <p>1900+ BRANDS</p>
              <span>1.2 Lakh+ Products</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shopname">
        <p>House of Nails - The Online Beauty Store</p>
      </div>
    </>
  );
};

export default MHouse;
