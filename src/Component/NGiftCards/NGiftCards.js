import React from 'react';
import "./NGiftCards.css";
import img1 from "../../img/giftcard.png";
import img2 from "../../img/giftcard2.png";
import { giftcardmapping } from "../../Component/API-Data/GiftCardMap";

const NGiftCards = () => {
  return (
   <>
    <div className="giftnavbarbaground">
        <div className="giftcardnavbar">
          <div className="giftcardimg">
            <div className="giftcardimg1">
              <img src={img1} alt="" />
            </div>
            <div className="giftcardimg2">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
        {/* -----------------------giftcard nav list---------------------- */}
        <div className="giftcardlist">
        <div className="giftlist1">
          <div className="giftlist">
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#egiftcard"
                  data-bs-toggle="tab"
                >
                  E-Gift Card
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#howtouse" data-bs-toggle="tab">
                  How To Use
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#termscondition" data-bs-toggle="tab">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="active tab-pane fade in show " id="egiftcard">
              <div className="giftcardtopcontaner ">
                <div className="giftcardtitle">
                  <div className="giftcardtitle1">
                    <p>Choose a design</p>
                  </div>
                  <div className="giftcardtitle2">
                    <span>That captures the mood</span>
                  </div>
                </div>
                <div className="giftcardscartcontainer">
                  <div className="giftcardscartsborder">
                    {giftcardmapping.map((item) => {
                      return (
                        <>
                          <div className="giftcards">
                            <div className="giftcardsimg">
                              <img src={item.imgSrc} alt="" />
                            </div>
                            <div className="giftdetails">
                              <div className="giftheading1">
                                <p>{item.Title}</p>
                              </div>
                              <div className="giftheading2">
                                <span>{item.title}</span>
                              </div>
                              <div className="giftheading3">
                                <h6>{item.description}</h6>
                              </div>
                            </div>
                            <div className="giftcardbtn">
                              <button>Send</button>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="howtouse">
              <div className="giftcardhowtousecontainer">
                <div className="howtousetoptitle">
                  <p>How To Use An E-Gift Card At House of Nails?</p>
                </div>
                <div className="howtousetitle2">
                  <p>Online at website or in app</p>
                </div>
                <div className="howtousemeddiledetails">
                  <ul>
                    <li>
                      Go to Nykaa.com and select the items you want to purchase.
                    </li>
                    <li>
                      Once you reach our payment page, select the "Gift Card"
                      payment option.
                    </li>
                    <li>
                      Enter your 16-digit Card Code and the corresponding Card
                      PIN and click on apply. The Gift Card amount will be
                      deducted from the payable amount.
                    </li>
                    <li>
                      If the amount of your e-Gift Card doesn't cover your order
                      amount, you will be prompted to select an additional
                      payment option.
                    </li>
                  </ul>
                </div>
                <div className="howtousebottomtitle">
                  <p>Offline at Nykaa stores</p>
                </div>
                <div className="bottomdetails">
                  <ul>
                    <li>
                      Go to any Nykaa retail store and select the items you want
                      to purchase.
                    </li>
                    <li>
                      At the bill desk, ask the cashier for payment through the
                      Gift Card.
                    </li>
                    <li>
                      Share the 16-digit card code and the corresponding card
                      PIN with the cashier while making the payment.
                    </li>
                    <li>
                      If the amount of your e-Gift Card doesn't cover your order
                      amount, you will have to pay the remaining amount through
                      other payment methods.
                    </li>
                    <li>
                      If the order value is less than the e-Gift Card amount,
                      e-Gift Card won’t be applied to the order.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="termscondition">
              <div className="termandcondition">
                <div className="termsandconditiontitle1">
                  <p>Terms and Conditions</p>
                </div>
                <div className="termsandconditiondetails1">
                  <ul>
                    <li>
                      “Nykaa Gift Card” is issued by Pine Labs Pvt. Ltd. Pine
                      Labs Pvt. Ltd ("Pine Labs") is a private limited company
                      incorporated under the laws of India, and is authorised by
                      the Reserve Bank of India ("RBI") to issue such Gift
                      Cards. The Gift cards are issued under the brand name of
                      “Qwikcilver”. By purchasing the Gift Card(s) either online
                      or offline, you/Cardholder are agreeing to and accept
                      these Terms & Conditions. Your use, redeem, purchase or
                      receipt of the Gift Cards shall be deemed to be your
                      understanding of, and agreement, to each of the terms and
                      conditions set forth below.
                    </li>
                  </ul>
                </div>
                <div className="termsandconditiontitle1">
                  <p>Purchase, Gifting and issue</p>
                </div>
                <div className="termsandconditiondetails1">
                  <ul>
                    <li>
                      For individual retail customers, Gift Cards can be
                      purchased using the following payment modes only - Credit
                      Card, Debit Card, Net Banking and UPI.
                    </li>
                    <li>
                      There is no fee or other charges associated with Gift Card
                      purchase or redemption
                    </li>
                    <li>
                      Gift cards can be issued / gifted to the recipient as per
                      the issuance process as provided on
                      https://www.nykaa.com/giftcard/list. The value of the gift
                      card is not further transferable to any other account or
                      to any bank account. Additionally, Gift Cards can be
                      purchased offline through Nykaa Retail Stores.
                    </li>
                    <li>
                      This Gift Card cannot be used to purchase other gift
                      cards.
                    </li>
                    <li>
                      This Gift Card shall have a validity period of 365 days
                      from the date of issue.
                    </li>
                    <li>
                      The linking of the Gift Card onto the user’s Nykaa Wallet
                      account shall be at customer’s discretion and constitute
                      registration of the user on the Nykaa Platform.
                    </li>
                    <li>
                      The Gift Card once purchased cannot be cancelled, refunded
                      or returned. Once purchased, the recipient email ID or
                      mobile number cannot be changed.
                    </li>
                  </ul>
                </div>
                <div className="termsandconditiontitle1">
                  <p>Redemption</p>
                </div>
                <div className="termsandconditiondetails1">
                  <ul>
                    <li>
                      This Gift Card is redeemable on the online ecommerce
                      platforms of Nykaa group entities to include
                      www.nykaa.com, www.nykaaman.com, www.nykaafashion.com, and
                      across all Nykaa Retail stores.
                    </li>
                    <li>
                      For online transaction: If the order value exceeds the
                      Gift Card amount, the balance must be paid by other
                      payment option. If the order value is less than the amount
                      of the Gift Card, the outstanding balance (after deduction
                      of order value) will reflect under the same Gift Card.
                    </li>
                  </ul>
                </div>
                <div className="termsandconditionnote">
                  <p>
                    For offline transaction: If the amount of your Gift Card
                    doesn't cover your order amount, you will have to pay the
                    remaining amount through other payment methods. If the order
                    value is less than the Gift Card amount, Gift Card won’t be
                    applied to the order.
                  </p>
                </div>
                <div className="termsandconditiondetails1">
                  <ul>
                    <li>You can redeem only 1 Gift Card per order.</li>
                    <li>
                      Registered users can add multiple Nykaa Gift Cards to
                      their Nykaa Wallet and use the combined Nykaa Wallet
                      Balance for redemption.
                    </li>
                    <li>
                      Nykaa Gift Cards/E Gift Cards / Nykaa Wallet Balance
                      cannot be used to purchase Gold/Silver Coins, Gold/Silver
                      Bars and Jewellery.
                    </li>
                    <li>
                      The Gift Card can be combined with promotional codes and
                      with other payment options.
                    </li>
                    <li>
                      E -Gift Cards cannot be redeemed for Cash or Credit and
                      cannot be reloaded.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default NGiftCards
