import React from 'react';
import '../All styles/Available_page.css'
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'


function Available_page() {

  return (
    <>

      <div className="container Full_width mt-3">
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
              <div className='me-3'><button type="button" class="btn btn-primary">Nursing</button></div>
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
              <div className='status_availibily'><span>green</span> <span>Available</span></div>
            </div>


          </div>
        </div>
      </div>


    </>
  )
}

export default Available_page
