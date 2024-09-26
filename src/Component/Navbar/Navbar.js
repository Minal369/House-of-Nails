import React from "react";
import "./Navbar.css";
import logo1 from "../../img/house-of-nails.png";
import logo2 from "../../img/navbarnails.jpg";
import logo3 from "../../img/navbaroffer.jpg";
import img1 from "../../img/buffing-mc.jpg";
import img2 from "../../img/lyn-nail.jpg";
import img3 from "../../img/uv-led.jpg";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const Navbar = () => {

  const {total_item} = useCartContext();

  return (
    <>
      {/* ---------------------------Top Navbar----------------------------- */}
      <div className="top-nav-container">
        <div className="top-nav-left">
          <NavLink to="/">
            <p>BEAUTY BONANZLink toGet Your Amazing Deals!</p>
          </NavLink>
        </div>
        <div className="top-nav-right">
          <ul>
            <NavLink to="/GiftApp">
              <li>
                <i className="fa-solid fa-mobile-screen nav-icons"></i>
                <p className="nav-name">Get App</p>
              </li>
            </NavLink>
            |
            <NavLink to="/Store&Events">
              <li>
                <i className="fa-solid fa-location-dot nav-icons"></i>
                <p className="nav-name">Store & Events</p>
              </li>
            </NavLink>
            |
            <NavLink to="/GiftCard">
              <li>
                <i className="fa-solid fa-gift nav-icons"></i>
                <p className="nav-name">Gift Cards</p>
              </li>
            </NavLink>
            |
            <NavLink to="/Help">
              <li>
                <i className="fa-solid fa-circle-question nav-icons"></i>
                <p className="nav-name">Help</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>

      {/*--------------------- middle navbar -------------------------*/}

      <div className="mid-nav-container">
        <NavLink to="/">
          <img src={logo1} alt="" />
        </NavLink>
        <div className="mid-nav-search">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <input type="text" placeholder="Search for Nail-Paints" />
        </div>
        <NavLink to="/LoginPage">
        <div className="mid-nav-signin">
          <i className="fa-regular fa-user"></i>
        </div>
        </NavLink>
        <div className="mid-nav-wishlist">
          <i className="fa-regular fa-heart"></i>
        </div>

        <NavLink to="/cart">
        <div className="mid-nav-shopping">
          <i className="fa-solid fa-bag-shopping bag"></i>
          <span className="count">{total_item}</span>
        </div>
        </NavLink>
      </div>

      {/*------------------------ last navbar--------------------------- */}

      <div className="bottom-nav-container-list">
        <div className="bottom-nav-img">
          <NavLink to="/AllPD">
            <img src={logo2} alt="" />
          </NavLink>
        </div>
        <div className="bottom-nav-brand">
          <NavLink to="/Brand" style={{ color: "inherit" }}>
            <p>BRANDS</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-brandlist">
            <NavLink to="/SugerPoP">
              <p>SUGER POP</p>
            </NavLink>
            <NavLink to="/Nykaa">
              <p>Nykaa</p>
            </NavLink>
            <NavLink to="/Lakme">
              <p>Lakme</p>
            </NavLink>
            <NavLink to="/DeBelle">
              <p>DeBelle Gell Nail Paint</p>
            </NavLink>
            <NavLink to="/Jucie-Gloss">
              <p>Jucie Gloss</p>
            </NavLink>
            <NavLink to="/Elle18">
              <p>Elle18</p>
            </NavLink>
            <NavLink to="/Kay-Beauty">
              <p>Kay Beauty</p>
            </NavLink>
            <NavLink to="/Face">
              <p>Faces</p>
            </NavLink>
            <NavLink to="/Colorbar">
              <p>Colorbar</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <NavLink to="/AllStickers" style={{ color: "inherit" }}>
            <p>STICKERS</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-sticker">
            <NavLink to="/LetterSticker">
              <p>Letter Stickers</p>
            </NavLink>
            <NavLink to="/MickeyMouseStickers">
              <p>Mickey Mouse Stickers</p>
            </NavLink>
            <NavLink to="/FlowerStickers">
              <p>Flower Stickers</p>
            </NavLink>
            <NavLink to="/FruitStickers">
              <p>Fruit Stickers</p>
            </NavLink>
            <NavLink to="/Leaf&ModernStickers">
              <p>Leafy & Modern Stickers</p>
            </NavLink>
            <NavLink to="/3DStickers">
              <p>3D Stickers</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <NavLink to="/AllToolkit" style={{ color: "inherit" }}>
            <p>TOOL KIT</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-nailtoolkit">
            <NavLink to="/FlatNailClippers">
              <p>Flat Nail Clippers</p>
            </NavLink>
            <NavLink to="/ObliqueNailClipper">
              <p>Oblique Nail Clippers</p>
            </NavLink>
            <NavLink to="/SmallNailClipper">
              <p>Small Nail Clippers</p>
            </NavLink>
            <NavLink to="/DeadSkinPiler">
              <p>Dead Skin Plier</p>
            </NavLink>
            <NavLink to="/NailFile">
              <p>Nail File</p>
            </NavLink>
            <NavLink to="/Doublepick">
              <p>Double pick</p>
            </NavLink>
            <NavLink to="/DeadSkinPush">
              <p>Dead Skin Push</p>
            </NavLink>
            <NavLink to="/DeadSkinShovel">
              <p>Dead Skin Shovel</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <NavLink to="/AllJwellery" style={{ color: "inherit" }}>
            <p>JWELLERY</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-jwellery">
            <NavLink to="/MetalNailsBeads">
              <p>Metal Nails Beads</p>
            </NavLink>
            <NavLink to="/BowKnotCrystal">
              <p>Bow-Knot Crystal</p>
            </NavLink>
            <NavLink to="/3DShellFlower">
              <p>3D Shell Flower</p>
            </NavLink>
            <NavLink to="/PinkCrystalStone">
              <p>Pink Crystal Stone</p>
            </NavLink>
            <NavLink to="/PearlBeads">
              <p>Pearl Beads </p>
            </NavLink>
            <NavLink to="/3DMeatlAlloyStare">
              <p>3D Metal Alloy Star Bead</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <NavLink to="/AllArtKit" style={{ color: "inherit" }}>
            <p>NAIL ART KIT</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-artkit">
            <NavLink to="/KitWithTranning">
              <p>Kit with Traning</p>
            </NavLink>
            <NavLink to="/KitWithoutTranning">
              <p>Kit without Traning</p>
            </NavLink>
          </div>
        </div>
        <div className="bottom-nav-new-in">
          <NavLink to="/AllNewIn" style={{ color: "inherit" }}>
            <p>NEW IN</p>
          </NavLink>
          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-newin">
            <div className="nav-title">
              <NavLink to="/GLAMBuffingMachine">
                <img src={img1} alt="" />
                <p>GLAM Buffing Machine</p>
              </NavLink>
            </div>
            <div className="nav-title">
              <NavLink to="/LYNNailBuffing">
                <img src={img2} alt="" />
                <p>LYN Nail Buffing</p>
              </NavLink>
            </div>
            <div className="nav-title">
              <NavLink to="/GLAMuvLEDLamp">
                <img src={img3} alt="" />
                <p>GLAM UV LED Lamp</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-offer-img">
          <NavLink to="/OfferPage">
            <img src={logo3} alt="" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
