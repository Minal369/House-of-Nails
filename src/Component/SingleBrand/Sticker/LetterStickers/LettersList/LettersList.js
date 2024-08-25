import React from "react";
import FilterSection from "../../../../FilterSection/FilterSection";
import img1 from "../../../../../img/Letterstickercarousel1.jpeg";
import LettersMap from "../LettersMap/LettersMap";

const LettersList = () => {
  return (
    <>
      <div className="allpdcontainer">
        <div className="allpdTop">
          <img src={img1} alt="" />
        </div>
        <div className="allfilterpd">
          <div className="sidebarfilter">
            <FilterSection />
          </div>
          <div className="itemcontainer">
            <LettersMap />
          </div>
        </div>
      </div>
    </>
  );
};

export default LettersList;
