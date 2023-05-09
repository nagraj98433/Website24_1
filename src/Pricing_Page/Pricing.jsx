import React from 'react'
import '../All styles/Pricing_Page.css'
import Offer_pic_bg_overlay from '../assets/Images/Offer_pic_bg_overlay.png'
import Six_months_bg from '../assets/Images/Six_months_bg.png'
import { Outlet, NavLink } from "react-router-dom";

function Pricing() {
  return (
    <>
      <div className='Main_container mt-5'>
        <div className="row">
          <div className="col">
            <div className='OfferCard_container'>
              <div class="image-container">
                <img src={Offer_pic_bg_overlay} alt="Example Image" />
                <div class="overlay">
                  <div>Unlimited Profiles for 2 days</div>
                  <div>One Login at a time</div>
                </div>
                {/* Overlay2 */}
                <div class="overlay2">
                  <div>BASIC</div>
                </div>
                {/* Overlay3 */}
                <div class="overlay3_Basic">
                  <div>2 DAYS</div>
                </div>
                {/* Overlay4 */}
                <div class="overlay4_Basic">
                  <div><span><i class="fas fa-rupee-sign"></i></span> 500</div>
                </div>
                {/* Overlay5 */}
                <div class="overlay5_Basic">
                  <NavLink exact to="" className="nav-link">
                    <a href="#" className="btn btn-primary BuyNow_btn">BUY NOW</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='OfferCard_container'>
              <div class="image-container">
                <img src={Offer_pic_bg_overlay} alt="Example Image" />
                <div class="overlay">
                  <div>Unlimited Profiles for 7 days</div>
                  <div>One Login at a time</div>
                </div>
                {/* Overlay2 */}
                <div class="overlay2_Standard">
                  <div>STANDARD</div>
                </div>
                {/* Overlay3 */}
                <div class="overlay3_Standard">
                  <div>7 DAYS</div>
                </div>
                {/* Overlay4 */}
                <div class="overlay4_Standard">
                  <div><span><i class="fas fa-rupee-sign"></i></span> 1000</div>
                </div>
                {/* Overlay5 */}
                <div class="overlay5_Standard">
                  <NavLink exact to="" className="nav-link">
                    <a href="#" className="btn btn-primary BuyNow_btn">BUY NOW</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='OfferCard_container'>
              <div class="image-container">
                <img src={Offer_pic_bg_overlay} alt="Example Image" />
                <div class="overlay">
                  <div>Unlimited Profiles for 15 days</div>
                  <div>One Login at a time</div>
                </div>
                {/* Overlay2 */}
                <div class="overlay2_Premium">
                  <div>PREMIUM</div>
                </div>
                {/* Overlay3 */}
                <div class="overlay3_Premium">
                  <div>15 DAYS</div>
                </div>
                {/* Overlay4 */}
                <div class="overlay4_Premium">
                  <div><span><i class="fas fa-rupee-sign"></i></span> 1500</div>
                </div>
                {/* Overlay5 */}
                <div class="overlay5_Premium">
                  <NavLink exact to="" className="nav-link">
                    <a href="#" className="btn btn-primary BuyNow_btn">BUY NOW</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className='OfferCard_container'>
              <div class="image-container">
                <img src={Offer_pic_bg_overlay} alt="Example Image" />
                <div class="overlay">
                  <div>Unlimited Profiles for 30 days</div>
                  <div>One Login at a time</div>
                </div>
                {/* Overlay2 */}
                <div class="overlay2_Premium">
                  <div>SUPREME</div>
                </div>
                {/* Overlay3 */}
                <div class="overlay3_Premium">
                  <div>30 DAYS</div>
                </div>
                {/* Overlay4 */}
                <div class="overlay4_Premium">
                  <div><span><i class="fas fa-rupee-sign"></i></span> 2500</div>
                </div>
                {/* Overlay5 */}
                <div class="overlay5_Premium">
                  <NavLink exact to="" className="nav-link">
                    <a href="#" className="btn btn-primary BuyNow_btn">BUY NOW</a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='full_width mt-4'>
        <div class="image-container_six_months_bg">
          <img src={Six_months_bg} alt="Sx_months_bg" />
          <div class="overlay_six_months_bg">
            <div><span className='Six_months'>6 Months - </span> <span className='six_months_rate'><span><i class="fas fa-rupee-sign"></i></span>5000</span> <span className='only'>only</span></div>
          </div>
        </div>

      </div>


    </>
  )
}

export default Pricing
