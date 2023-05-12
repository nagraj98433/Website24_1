import React from 'react';
import '../All styles/Available_page.css'
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'
import { Outlet, NavLink } from "react-router-dom";


function Available_page() {

  return (
    <>

      <div className="container Full_width mt-3">
        {/* first section of the page start */}
        <div class="image-container_available">
          <div className="Bg_background_img_available"></div>
          <div class="overlay_profile_available_img">
            <img src={Profile_pic_1} alt="" />
          </div>
          <div class="overlay_profile_available_content">

            <div className='available_cgDetails1_flex_container'>
              <div className='cgname'>Nisha Thorat</div>
              <div className='Age_gender'><span className='me-2'>32 Years,</span> <span> Female</span></div>
            </div>
            <div className='available_cgDetails2_flex_container'>
              <div className='me-3'><button type="button" class="btn btn-warning">Nursing</button></div>
              <div>
                <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
                <span className="text-warning me-4 Marging_right">Mumbai </span>
              </div>
              <div className="Rating_icons1 text-start">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
              </div>
              <div className='status_availibily'><span><i class="fas fa-circle"></i></span> <span className='text-warning'>Available</span></div>
            </div>
            <div className='status_availibilty'>
              <span><i class="fas fa-circle"></i></span>
            </div>


          </div>
        </div>
        {/* first section of the page end */}

        {/* Second section of the page start */}

        <div className='Main_container'>
          <div className='Highlight_condtion_handled_container'>
            <div className='d-flex justify-content-between'>
              <div className='Highlight_container'>
                <div className='Highlight_text'>HIGHLIGHTS</div>
                <div className='Highlight_line'><hr /></div>
                <div className='mt-3'>
                  <ul>
                    <li>24hr - 1400</li>
                    <li>12hr - 1000</li>
                    <li>Fully Vaccinated</li>
                    <li>1.5 years of experience</li>
                    <li>Joined: Since 28-02-2020</li>
                    <li>Vegetarian</li>
                  </ul>
                </div>
              </div>

              <div className='Highlight_container'>
                <div className='Conditions_handled_text'>Conditions handled</div>
                <div className='Highlight_line'><hr /></div>
                <div className='Available_List_conainer'>
                  <div className='mt-2'>
                    <ul>
                      <li>24hr - 1400</li>
                      <li>12hr - 1000</li>
                      <li>Fully Vaccinated</li>
                      <li>1.5 years of experience</li>
                      <li>Joined: Since 28-02-2020</li>
                      <li>Vegetarian</li>
                    </ul>
                  </div>
                  <div className='mt-2'>
                    <ul>
                      <li>24hr - 1400</li>
                      <li>12hr - 1000</li>
                      <li>Fully Vaccinated</li>
                      <li>1.5 years of experience</li>
                      <li>Joined: Since 28-02-2020</li>
                      <li>Vegetarian</li>
                    </ul>
                  </div>
                  <div className='mt-2'>
                    <ul>
                      <li>24hr - 1400</li>
                      <li>12hr - 1000</li>
                      <li>Fully Vaccinated</li>
                      <li>1.5 years of experience</li>
                      <li>Joined: Since 28-02-2020</li>
                      <li>Vegetarian</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Second section of the page End */}


        {/* Third section of the page start */}


        <div className='Main_container mt-5'>
          <div className="d-flex justify-content-center">
            <div className='Btn_icons_Flex_container_Hire me-3'>
              <NavLink exact to="" className="nav-link">
                <a href="#" className="btn btn-primary Available_CardBtn_style_hire"><span><i class="fas fa-lock"></i></span> CALL NOW</a>
              </NavLink>
            </div>

            <div>
              <div className='Btn_icons_Flex_container_Hire'>
                <NavLink exact to="" className="nav-link">
                  <a href="#" className="btn btn-primary Available_CardBtn_style_hire_schedule"><span><i class="fas fa-lock"></i></span> SCHEDULE CALL</a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Third section of the page end */}


      </div>


    </>
  )
}

export default Available_page
