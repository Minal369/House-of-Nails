import React from "react";
import "./Navbar.css";
import logo1 from "../../img/house-of-nails.png";
import logo2 from "../../img/navbarnails.jpg";
import logo3 from "../../img/navbaroffer.jpg";
import img1 from "../../img/buffing-mc.jpg";
import img2 from "../../img/lyn-nail.jpg";
import img3 from "../../img/uv-led.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* ---------------------------Top Navbar----------------------------- */}
      <div className="top-nav-container">
        <NavLink to="" />
        <div className="top-nav-left">
          <p>BEAUTY BONANZLink toGet Your Amazing Deals!</p>
        </div>

        <div className="top-nav-right">
          <ul>
            <NavLink to="/GiftApp" />
            <li>
              <i className="fa-solid fa-mobile-screen nav-icons"></i>
              <p className="nav-name">Get App</p>
            </li>
            <Link />
            |
            <NavLink to="/Store&Events" />
            <li>
              <i className="fa-solid fa-location-dot nav-icons"></i>
              <p className="nav-name">Store & Events</p>
            </li>
            <Link />
            |
            <NavLink to="/GiftCard" />
            <li>
              <i className="fa-solid fa-gift nav-icons"></i>
              <p className="nav-name">Gift Cards</p>
            </li>
            <Link />
            |
            <NavLink to="/Help" />
            <li>
              <i className="fa-solid fa-circle-question nav-icons"></i>
              <p className="nav-name">Help</p>
            </li>
            <Link />
          </ul>
        </div>
      </div>

      {/*--------------------- middle navbar -------------------------*/}

      <div className="mid-nav-container">
        <img src={logo1} alt="" />
        <div className="mid-nav-search">
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <input type="text" placeholder="Search for Nail-Paints" />
        </div>

        <div className="mid-nav-signin">
          <i className="fa-regular fa-user"></i>
        </div>

        <div className="mid-nav-wishlist">
          <i className="fa-regular fa-heart"></i>
        </div>

        <div className="mid-nav-shopping">
          <i className="fa-solid fa-bag-shopping bag"></i>
          <span className="count">0</span>
        </div>
      </div>

      {/*------------------------ last navbar--------------------------- */}

      <div className="bottom-nav-container-list">
        <div className="bottom-nav-img">
          <NavLink to="/AllPD">
            <img src={logo2} alt="" />
          </NavLink>
        </div>
        <div className="bottom-nav-brand">
          <p>BRANDS</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-brandlist">
            <NavLink to="/SugerPoP">
              <p>SUGER POP</p>
            </NavLink>
            <NavLink to="/Nykaa">
              <p>Nykaa</p>
            </NavLink>
            <p>Lakme</p>

            <p>DeBelle Gell Nail Paint</p>

            <p>Jucie Gloss</p>

            <p>Elle18</p>

            <p>Kay Beauty</p>

            <p>Faces</p>

            <p>Colorbar</p>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <p>STICKERS</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-sticker">
            <p>Letter Stickers</p>

            <p>Mickey Mouse Stickers</p>

            <p>Flower Stickers</p>

            <p>Fruit Stickers</p>

            <p>Leafy & Modern Stickers</p>

            <p>3D Stickers</p>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <p>TOOL KIT</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-nailtoolkit">
            <p>Flat Nail Clippers</p>

            <p>Oblique Nail Clippers</p>

            <p>Small Nail Clippers</p>

            <p>Dead Skin Plier</p>

            <p>Nail File</p>

            <p>Double pick</p>

            <p>Dead Skin Push</p>

            <p>Dead Skin Shovel</p>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <p>JWELLERY</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-jwellery">
            <p>Metal Nails Beads</p>

            <p>Bow-Knot Crystal</p>

            <p>3D Shell Flower</p>

            <p>Pink Crystal Stone</p>

            <p>Pearl Beads </p>

            <p>3D Metal Alloy Star Bead</p>
          </div>
        </div>
        <div className="bottom-nav-brand">
          <p>NAIL ART KIT</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-artkit">
            <p>Kit with Traning</p>

            <p>Kit without Traning</p>
          </div>
        </div>
        <div className="bottom-nav-new-in">
          <p>NEW IN</p>

          <i className="fa-solid fa-chevron-down"></i>
          <div className="nav-newin">
            <div className="nav-title">
              <img src={img1} alt="" />
              <p>GLAM Buffing Machine</p>
            </div>
            <div className="nav-title">
              <img src={img2} alt="" />
              <p>LYN Nail Buffing</p>
            </div>
            <div className="nav-title">
              <img src={img3} alt="" />
              <p>GLAM UV LED Lamp</p>
            </div>
          </div>
        </div>
        <div className="nav-offer-img">
          <img src={logo3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
