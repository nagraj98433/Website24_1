import React from "react";
import "../All styles/HireNow_Page.css";
import "../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'
import { Outlet, NavLink } from "react-router-dom";


function HireNow() {
  return (
    <>
      {/* Img Overlay content start */}
      <div className="container Full_width mt-3">
        <div class="image-container">
          <div className="Bg_background_img"></div>

          <div class="overlay">
            <div className="Overlay_flex_container">
              <div className="Bold_Container_flex">
                <div className="Bold_content hire_SM">WHY US</div>
                <div className="Bold_content">WHY</div>
                <div className="Bold_content text-center">US</div>
              </div>
              <div className="List_container">
                <ul>
                  <li>
                    30 to 40% less amount have to pay for the service compare to
                    other
                  </li>
                  <li>agency No agency commission </li>
                  <li>
                    Choose caregiver as your choice instead of agency choose for
                    you
                  </li>
                  <li>Direct pay to caregiver not to agency</li>
                  <li>
                    One time hiring charge, In agency every service commission
                    have to pay
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Img Overlay content end */}

      {/* Range and cards start */}

      <div className="Main_container mt-5">
        <div className="Range_Cards_flex_container">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-12">
                  <div className="Range_container">
                    <div>Search by keywords</div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text Text_light"
                        id="basic-addon1"
                      >
                        <i class="fas fa-search text-warning"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control border-start-0"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div>Location</div>
                    <div class="input-group mb-0">
                      <span
                        class="input-group-text Text_light"
                        id="basic-addon1"
                      >
                        <i class="fas fa-map-marker-alt text-warning"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control border-start-0"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div>Radius around selected destination</div>
                    <div className="mt-3">
                      <input
                        type="range"
                        class="form-range"
                        id="customRange1"
                      />
                    </div>
                    <div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Experience
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Fresher
                        </label>
                      </div>
                    </div>
                    <div>Price</div>
                    <div className="mt-3">
                      <input
                        type="range"
                        class="form-range"
                        id="customRange1"
                      />
                    </div>
                    <div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 Mobile_width_100">
              <div className="row">
                <div className="col-12 ps-3">
                  <div className="profile_Cards_Container">

                    <div className="card CardStyle_Hire mb-4">
                      <div className='Flex_container'>
                        <div className='Img_container1'>
                          <img src={Profile_pic_1} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body p-0" style={{ maxWidth: '540px' }}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                              <div className="card-title_hire pe-4">NISHA THORAT</div>
                              <button type="button" class="btn btn-primary EdlerCareBtn">Elder Care</button>
                            </div>
                            <div>
                              <div className='Btn_icons_Flex_container'>
                                <NavLink exact to="" className="nav-link">
                                  <a href="#" className="btn btn-primary CardBtn_style_hire">HIRE NOW</a>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="Rating_icons text-start mt-2">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
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
                            <div>
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2">
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda debitis modi?</div>
                          </div>

                          {/* for mobile start */}
                          <div>
                            <div className='Btn_icons_Flex_container_Hire1 mt-3'>
                              <NavLink exact to="" className="nav-link">
                                <a href="#" className="btn btn-primary CardBtn_style_hire1">HIRE NOW</a>
                              </NavLink>
                            </div>
                          </div>
                          {/* for mobile start */}


                        </div>
                      </div>
                    </div>

                    {/* Second card */}
                    <div className="card CardStyle_Hire mb-4">
                      <div className='Flex_container'>
                        <div className='Img_container1'>
                          <img src={Profile_pic_2} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body p-0" style={{ maxWidth: '540px' }}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                              <div className="card-title_hire pe-4">JOHN THORAT</div>
                              <button type="button" class="btn btn-primary EdlerCareBtn">Elder Care</button>
                            </div>
                            <div>
                              <div className='Btn_icons_Flex_container'>
                                <NavLink exact to="" className="nav-link">
                                  <a href="#" className="btn btn-primary CardBtn_style_hire">HIRE NOW</a>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="Rating_icons text-start mt-2">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
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
                            <div>
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2">
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda debitis modi?</div>
                          </div>

                          {/* for mobile start */}
                          <div>
                            <div className='Btn_icons_Flex_container_Hire1 mt-3'>
                              <NavLink exact to="" className="nav-link">
                                <a href="#" className="btn btn-primary CardBtn_style_hire1">HIRE NOW</a>
                              </NavLink>
                            </div>
                          </div>
                          {/* for mobile start */}


                        </div>
                      </div>
                    </div>

                    {/* Third Card */}
                    <div className="card CardStyle_Hire mb-4">
                      <div className='Flex_container'>
                        <div className='Img_container1'>
                          <img src={Profile_pic_3} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body p-0" style={{ maxWidth: '540px' }}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                              <div className="card-title_hire pe-4">ADAM THORAT</div>
                              <button type="button" class="btn btn-primary EdlerCareBtn">Elder Care</button>
                            </div>
                            <div>
                              <div className='Btn_icons_Flex_container'>
                                <NavLink exact to="" className="nav-link">
                                  <a href="#" className="btn btn-primary CardBtn_style_hire">HIRE NOW</a>
                                </NavLink>
                              </div>
                            </div>
                          </div>
                          <div className="Rating_icons text-start mt-2">
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
                            <span><i class="fas fa-star"></i></span>
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
                            <div>
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2">
                            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda debitis modi?</div>
                          </div>

                          {/* for mobile start */}
                          <div>
                            <div className='Btn_icons_Flex_container_Hire1 mt-3'>
                              <NavLink exact to="" className="nav-link">
                                <a href="#" className="btn btn-primary CardBtn_style_hire1">HIRE NOW</a>
                              </NavLink>
                            </div>
                          </div>
                          {/* for mobile start */}


                        </div>
                      </div>
                    </div>





                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Range and cards end */}

      {/* Footer Start */}
      <footer className="bg-warning p-2 mt-5 text-center FooterFont">
        © 2021 Care24. All Rights Reserved.
      </footer>
      {/* Footer end */}
    </>
  );
}

export default HireNow;
