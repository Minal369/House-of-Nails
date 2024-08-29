import React from "react";
import "./OfferMHouse.css";
import TopOffer from "../../img/OfferMhouseAllOffers.jpg";
import ComboNailsOffer from "../../img/OfferMhouseAllComboNailPaint.webp";
import NailRemover from "../../img/OfferMhouseAllNailRemovers.jpg";
import NailsExtensions from "../../img/OfferMhouseAllExtensions.webp";
import OfferSticker from "../../img/OfferMhouseAllStickers.jpg";
import OfferCrystal from "../../img/OfferMhouseAllCrystal.jpg";
import Offer3DnailArt from "../../img/OfferMhouseAll3DNailArtBottle.jpg";
import OfferStripsTaps from "../../img/OfferMhouseAllStripingTapes.jpg";
import OfferToolkit from "../../img/OfferMhouseAllToolKit.jpg";
import OfferGiftCard from "../../img/OfferMhouseGiftCard.webp";
import OfferBaner from "../../img/OfferMhouseBaner.jpg";
import { NavLink } from "react-router-dom";

const OfferMHouse = () => {
  return (
    <>
      <div className="mainOfferpage">
        <NavLink to="/OfferAllPD">
          <div className="bumperOffer">
            <img src={TopOffer} alt="" />
          </div>
        </NavLink>
        {/* -----------Combo-nail-paints------------- */}
        <NavLink to="/OfferComboNails">
          <div className="combo-nail-offer">
            <img src={ComboNailsOffer} alt="" />
          </div>
        </NavLink>
        {/* ----------------Nail-Removers----------------- */}
        <NavLink to="/OfferNailRemover">
          <div className="offerremover">
            <div className="nails-remover">
              <img src={NailRemover} alt="" />
            </div>
          </div>
        </NavLink>
        {/* -----------NailsExtensions------------- */}
        <NavLink to="/OfferExtension">
          <div className="OfferExtensions">
            <img src={NailsExtensions} alt="" />
          </div>
        </NavLink>
        {/* -----------Nails-Stickers-Crystal------------ */}
        <div className="sticker-Crystal">
          <div className="offersticker">
            <NavLink to="/OfferSticker">
              <img src={OfferSticker} alt="" />
            </NavLink>
          </div>
          <div className="offerCrystal">
            <NavLink to="/OfferCrystals">
              <img src={OfferCrystal} alt="" />
            </NavLink>
          </div>
        </div>
        {/*-----------------3dNailArt------------ */}
        <NavLink to="/Offer3DGlitters">
          <div className="Offer3D">
            <div className="offer3dNailArt">
              <img src={Offer3DnailArt} alt="" />
            </div>
          </div>
        </NavLink>
        {/*-----------------OfferStripingTapes------------ */}
        <NavLink to="/OfferStripingTapes">
          <div className="offerStripinTapes">
            <div className="OffStripingTapes">
              <img src={OfferStripsTaps} alt="" />
            </div>
          </div>
        </NavLink>
        {/*-----------------OfferToolkit------------ */}
        <NavLink to="/OfferToolKits">
          <div className="offerTookits">
            <div className="OffToolKits">
              <img src={OfferToolkit} alt="" />
            </div>
          </div>
        </NavLink>
        {/*-----------------OfferGiftCard------------ */}
        <NavLink to="/GiftCard">
          <div className="offerBaner">
            <div className="OfferGiftCard">
              <img src={OfferGiftCard} alt="" />
            </div>
          </div>
        </NavLink>
        {/*-----------------OfferBaner------------ */}
        <NavLink to="/">
          <div className="offerBaner">
            <div className="OffBaner">
              <img src={OfferBaner} alt="" />
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default OfferMHouse;
