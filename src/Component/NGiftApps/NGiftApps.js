import React from 'react'
import "./NGiftApps.css";
import img1 from "../../img/Nail paint-GetApp.jpg";

const NGiftApps = () => {
  return (
    <>
       <div className="getappmainconatiner">
      {/* <img src={} alt="" /> */}
        <div className="getappleftconatiner">
          <div className="getappborder">
            <div className="getapp">
              <div className="getapptitle1">
                <h6>BEAUTY TO GO!</h6>
              </div>
              <div className="getapptitle2">
                <p>
                  Download the Nykaa App for the best beauty <br /> products and
                  online offers!
                </p>
              </div>
            </div>
            <div className="downloadlink">
              <div className="downloadname1">
                <p className="downloadname">GET DOWNLOAD LINK VIA SMS</p>
              </div>
              <div className="input">
                <input type="text" placeholder="Enter Your Mobile Number" />
                <button>send link</button>
              </div>
            </div>
            <div className="appstore">
              <p className="storename">AVAILABLE ON</p>
              <div className="appbtn">
                <button className="appbtns">
                  <i className="fa-brands fa-app-store-ios"></i>
                  <p>app store</p>
                </button>
                <button className="appbtns">
                  <i className="fa-brands fa-google-play"></i>
                  <p>play store</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="getapprightconatiner">
          <div className="mobappimg">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NGiftApps