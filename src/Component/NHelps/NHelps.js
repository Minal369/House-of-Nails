import React from 'react';
import "./NHelps.css";

const NHelps = () => {
  return (
    <>
      <div className="helpcentermaincontainer">
        <div className="helpcontainer">
          <div className="helptopconatiner">
            <div className="helptop">
              <div className="topcontainer1">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="topcontainer2">
                <p>Getting help is easy</p>
                <span>Sign in to get help with recent orders</span>
              </div>
            </div>
            <div className="topconatinerbtn">
              <button>Signup</button>
            </div>
          </div>
          <div className="helpmiddleconatiner">
            <div className="middercontenrtitile">
              <p>Browse Topics</p>
            </div>
            <div className="middboxrow1">
              <div className="middborderbox">
                <div className="bags">
                  <div className="shoppingbags1">
                    <i className="fa-solid fa-cart-shopping "></i>
                  </div>
                  <div className="shoppingbags2">
                    <span>?</span>
                  </div>
                  <div className="bag1title">
                    <p>Order Related</p>
                  </div>
                </div>
                <div className="bags">
                  <div className="shoppingbags1">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div className="shoppingtag">
                    <i class="fa-solid fa-tag"></i>
                  </div>
                  <div className="bag1title">
                    <p>Shopping</p>
                  </div>
                </div>
                <div className="bags">
                  <div className="shoppingbags1">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <div className="shoppinginvoice">
                    <i class="fa-solid fa-file-invoice"></i>
                  </div>
                  <div className="bag1title">
                    <p>House Nail Account</p>
                  </div>
                </div>
                <div className="bags">
                  <div className="shoppingbags1">
                    <i className="fa-solid fa-credit-card"></i>
                  </div>
                  <div className="shoppingrupee">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <div className="bag1title">
                    <p>Payments</p>
                  </div>
                </div>
                <div className="bags">
                  <div className="shoppingbags1">
                    <i className="fa-solid fa-box-archive "></i>
                  </div>
                  <div className="shoppingcircle">
                    <i class="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="bag1title">
                    <p>Sell on House Nail</p>
                  </div>
                </div>
                <div className="bags">
                  <div className="shoppingbags1">
                    <i className="fa-solid fa-file-lines "></i>
                  </div>
                  <div className="shoppinginfo">
                    <span>i</span>
                  </div>
                  <div className="bag1title">
                    <p>Other</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="helpbottomconatiner">
            <div className="helpbottomtitle">
              <div className="bottomname1">
                <p>Other Options</p>
              </div>
              <div className="bottomname2">
                <div className="msg">
                  <i className="fa-regular fa-message"></i>
                  <p>Write to us</p>
                </div>
                <div className="msgarrow">
                <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NHelps