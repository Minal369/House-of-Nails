import React from "react";
import "./Footer.css";
import logo1 from "../../img/house-of-nails.png";

const Footer = () => {
  return (
    <>
      {/* --------------------Footer1-------------------- */}
      <div className="footer1st">
        {/* footer email */}
        <div className="footerdetails">
          <div className="email">
            <div className="email-icon">
              <i className="fa-solid fa-envelope e-icon"></i>
              <p>Get special discount on your inbox</p>
            </div>
            <div className="text-email">
              <input type="email" placeholder="Your Email" />
              <button type="button">Send</button>
            </div>
          </div>

          {/*footer mobile app */}

          <div className="app">
            <div className="app-mob">
              <i className="fa-solid fa-mobile-screen-button"></i>
              <p>Experience The House Nails Moblie App</p>
            </div>
            <div className="app-btn">
              <button
                type="button"
                className="btn btn-dark btn-lg download-buttons"
              >
                <i className="fa-brands fa-google-play app-icons"></i>
                <div className="app-title">
                  <span className="span1">Get It On</span>
                  <p>Google-Play</p>
                </div>
              </button>
              <button
                type="button"
                className="btn btn-dark btn-lg download-buttons"
              >
                <i className="fa-brands fa-apple app-icons"></i>
                <div className="app-title">
                  <span>Download on the</span>
                  <p>Apple Store</p>
                </div>
              </button>
            </div>
          </div>

          {/* footer contact */}

          <div className="contact">
            <div className="contact-icon">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="contact-help">
              <p>For Any Help, You May Call Us At 1800-267-4444</p>
              <p>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------ footer 2nd---------------------*/}

      <div className="footer2nd">
        <div className="footer2-img">
          <img src={logo1} alt="" />
        </div>
        <div className="all-div">
          <div className="ui-list-1">
            <ul>
              <li>Who are we?</li>
              <li>Careers</li>
              <li>Authenticity</li>
              <li>Press</li>
              <li>Testimonials</li>
              <li>Naykka CSR</li>
              <li>Responsible Disclosure</li>
              <li>Investor relations</li>
              <li>Link to Smart ODR</li>
            </ul>
          </div>
          <div className="ui-list">
            <p> Help</p>
            <ul>
              <li>Contact Us</li>
              <li>Frequently asked questions</li>
              <li>Authenticity</li>
              <li>Store Locator</li>
              <li>Cancellation & Return</li>
              <li>Shipping & Delivery</li>
              <li>Sell on Nykaa</li>
            </ul>
          </div>
          <div className="ui-list">
            <p> Inspire Me </p>
            <ul>
              <li>Beauty Book</li>
              <li>Nykaa Network</li>
              <li>Buying Guides</li>
            </ul>
          </div>
          <div className="ui-list">
            <p> Quick Links</p>
            <ul>
              <li>Offer Zone</li>
              <li>New Launches</li>
              <li>Nykaa Man</li>
              <li>Nykaa Fashion</li>
              <li>Nykaa Pro</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="ui-list">
            <p> Top categories</p>
            <ul>
              <li>Colors</li>
              <li>Stickers</li>
              <li>Kundan</li>
              <li>Machines</li>
              <li>Tool Kit</li>
            </ul>
          </div>
        </div>
      </div>

       {/*----------------- footer 3rd --------------------*/}
       <div className="footer3rd">
        <div className="footer">
          <div className="freeship">
            <div className="free-shipping-icons">
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="free-shipping">
              <p>FREE SHIPPING</p>
              <span>On Orders Above ₹299</span>
            </div>
          </div>
          <div className="return">
            <div className="easy-return-icons">
              <i className="fa-solid fa-rotate"></i>
            </div>
            <div className="easy-return">
              <p>EASY RETURNS</p>
              <span>15-Day Return Policy</span>
            </div>
          </div>
          <div className="auth100">
            <div className="authentic-icons">
              <i className="fa-solid fa-award"></i>
            </div>
            <div className="auth-pd">
              <p>100% AUTHENTIC</p>
              <span>Products Sourced Directly</span>
            </div>
          </div>
          <div className="brands">
            <div className="brands-icons">
              <i className="fa-solid fa-tag"></i>
            </div>
            <div className="brand">
              <p>1900+ BRANDS</p>
              <span>1.2 Lakh+ Products</span>
            </div>
          </div>
        </div>
        <div className="footer-media">
          <div className="media">
            <p>Show us some love ❤ on social media</p>
          </div>
          <div className="media-icons">
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-youtube"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-pinterest"></i>
          </div>
        </div>
        <div className="myname">
          <p>Completed by @Minal</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
