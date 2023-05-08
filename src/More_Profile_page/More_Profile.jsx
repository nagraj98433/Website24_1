import React, { useState } from "react";
import "../All styles/More_Profile_Page.css";
import "../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'
import { Outlet, NavLink } from "react-router-dom";


function More_Profile() {





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
                        class="form-control available_form border-start-0"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div>Location</div>
                    <div class="input-group mb-3">
                      <span
                        class="input-group-text Text_light"
                        id="basic-addon1"
                      >
                        <i class="fas fa-map-marker-alt text-warning"></i>
                      </span>
                      <select class="form-select border-start-0" id="inputGroupSelect01">
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>
                    <div>Radius around selected destination</div>
                    <div className="mt-3">
                      <input
                        type="range"
                        class="form-range"
                        id="customRange1"
                      />
                    </div>

                    <div>Service Price</div>
                    <div className="mt-3">
                      <input
                        type="range"
                        class="form-range"
                        id="customRange1"
                      />
                    </div>

                    <div>
                      <div>Service Experience</div>
                      <div className="d-inline-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Experience
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Fresher
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">CareTaker Gender</div>
                      <div className="d-inline-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">Eating Habit</div>
                      <div className="d-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                          <label class="form-check-label" for="flexCheckDefault">
                            Veg
                          </label>
                        </div>
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            Non-Veg
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            Any
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">Urgency (when service required)</div>
                      <div className="d-inline-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Immediate Jointer
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            After 2-3 days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-4">Language Prefrence</div>
                      <div className="d-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                          <label class="form-check-label" for="flexCheckDefault">
                            Hindi
                          </label>
                        </div>
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            English
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            Marathi
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-4">Religious Prefrence</div>
                      <div className="d-inline-flex">
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Hindu
                          </label>
                        </div>
                        <div class="form-check pe-3">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Muslim
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                          <label class="form-check-label" for="flexRadioDefault1">
                            Any
                          </label>
                        </div>

                      </div>
                    </div>

                    <div className='filter_apply_btn_container mt-4'>
                      <NavLink exact to="" className="nav-link">
                        <a href="#" className="btn btn-primary filter_apply_btn">APPLY</a>
                      </NavLink>
                    </div>

                    {/* More Profile Cards start */}

                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 Mobile_width_100">
              <div className="row">
                <div className="col-12 ps-3">
                  <div className="profile_Cards_Container">
                    <div className="mb-4 ps-4">
                      Showing 4 of 156 employer
                    </div>
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
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

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
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2 f_size">
                            <div><span className="fw-bold">Condition Handled : </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda </div>
                          </div>

                          {/* for mobile start */}
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
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2 f_size">
                            <div><span className="fw-bold">Condition Handled : </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda </div>
                          </div>

                          {/* for mobile start */}
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



                    {/* Forth Card */}
                    <div className="card CardStyle_Hire mb-4">
                      <div className='Flex_container'>
                        <div className='Img_container1'>
                          <img src={Profile_pic_1} className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body p-0" style={{ maxWidth: '540px' }}>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content-between">
                              <div className="card-title_hire pe-4">ADAM THORAT</div>
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
                              24hr - <span><i class="fas fa-rupee-sign"></i></span><span>1400, </span>
                              12hr - <span><i class="fas fa-rupee-sign"></i></span><span>1000</span>

                            </div>
                          </div>
                          <div className="Condition_container text-start mt-2 f_size">
                            <div><span className="fw-bold">Condition Handled : </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tenetur officia reprehenderit vero asperiores maxime. Molestiae suscipit assumenda </div>
                          </div>

                          {/* for mobile start */}
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

export default More_Profile;