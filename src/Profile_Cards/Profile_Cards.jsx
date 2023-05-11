import React from 'react'
import "../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'
import { Outlet, NavLink } from "react-router-dom";

function Profile_Cards(props) {
  return (
    <div className="card CardStyle_Hire mb-4">
      <div className='Flex_container'>
        <div className='Img_container1'>
          <img src={props.profile_pc} className="card-img-top MaxHeight" alt="..." />
          <div class="overlay_fav">
            <div><span className="Myfavourite"><i class="fab fa-gratipay"></i></span></div>
          </div>
        </div>



        <div className="card-body p-0" style={{ maxWidth: '540px' }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="card-title_hire pe-4">{props.cg_name}</div>
              <button type="button" class="btn btn-primary EdlerCareBtn">Elder Care</button>
            </div>
            <div>
              <div className='Btn_icons_Flex_container_Hire'>
                <NavLink exact to="" className="nav-link">
                  <a href="#" className="btn btn-primary CardBtn_style_hire"><span><i class="fas fa-lock"></i></span> HIRE NOW</a>
                </NavLink>
              </div>
            </div>

          </div>
          <div className="Rating_and A_btn_container d-flex justify-content-between">
            <div className="Rating_icons text-start mt-2">
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
            </div>
            <div>
              <div className='Btn_icons_Flex_container_Hire'>
                <NavLink exact to="" className="nav-link">
                  <a href="#" className="btn btn-primary CardBtn_style_hire_schedule"><span><i class="fas fa-lock"></i></span> SCHEDULE CALL</a>
                </NavLink>
              </div>
            </div>
          </div>
          {/* for mobile start */}
          <div className="rating_btn_container d-flex justify-content-evenly">
            <div className="Hiding_mobile">
              <button type="button" class="btn btn-primary EdlerCareBtn1">Elder Care</button>
            </div>
            <div className="Rating_icons1 text-start Hiding_mobile">
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
              <span><i class="fas fa-star"></i></span>
            </div>
          </div>
          {/* for mobile end */}

          <div className="Location_rate_container mt-2">
            <div>
              <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
              <span className="text-warning me-4 Marging_right">Mumbai </span>
            </div>
            <div className="HireNow_cards">
              {props.price}

            </div>
          </div>
          <div className="Condition_container text-start mt-2 f_size">
            <div><span className="fw-bold">Condition Handled : </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda </div>
          </div>
          {/* for mobile start */}
          {/* <div>
        <div className='Btn_icons_Flex_container_Hire1 mt-3'>
          <NavLink exact to="" className="nav-link">
            <a href="#" className="btn btn-primary CardBtn_style_hire1">HIRE NOW</a>
          </NavLink>
        </div>
      </div> */}


          <div className="d-flex justify-content-between">
            <div>
              <div className='Btn_icons_Flex_container_Hire1 mt-3'>
                <NavLink exact to="" className="nav-link">
                  <a href="#" className="btn btn-primary CardBtn_style_hire"><span><i class="fas fa-lock"></i></span> HIRE NOW</a>
                </NavLink>
              </div>
            </div>

            <div>
              <div className='Btn_icons_Flex_container_Hire1 mt-3'>
                <NavLink exact to="" className="nav-link">
                  <a href="#" className="btn btn-primary CardBtn_style_hire_schedule2"><span><i class="fas fa-lock"></i></span> SCHEDULE CALL</a>
                </NavLink>
              </div>
            </div>
          </div>
          {/* for mobile start */}


        </div>
      </div>
    </div>
  )
}

export default Profile_Cards
