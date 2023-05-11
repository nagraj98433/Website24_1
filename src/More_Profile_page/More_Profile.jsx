import React, { useState, useEffect } from "react";
import "../All styles/More_Profile_Page.css";
import "../../node_modules//bootstrap/dist/css/bootstrap.min.css";
import Profile_pic_1 from '../assets/Images/Profile_pic-1.png'
import Profile_pic_2 from '../assets/Images/Profile_pic-2.png'
import Profile_pic_3 from '../assets/Images/Profile_pic-3.png'
import { Outlet, NavLink } from "react-router-dom";
import Profile_Cards from "../Profile_Cards/Profile_Cards";



function More_Profile() {

  const [cgsProfile, setCgsProfile] = useState([]);

  useEffect(() => {
    fetch('https://admin.care24.co.in/desertbox/api/getCGSProfile/?page=1', {
      method: 'GET',
      headers: {
        'Authorization': 'Token b22c4f7adc8ac8ea95138067bddb04b64358202c',
        'Cookie': 'csrftoken=s0ildCtQbbUhlXi5IKdYsSGJ2djUOuAXr8SrEAYheWul9tAd10YhSe78XV2DCHbz'
      }
    })
      .then(response => response.json())
      .then(data => setCgsProfile(data.data))
      .catch(error => console.error(error))
  }, []);

  cgsProfile.map((preval) => { console.log(preval) })



  return (
    <>
      {/* Img Overlay content start */}
      <div className="container Full_width mt-3">
        <div class="image-container">
          <div className="Bg_background_img"></div>

          <div class="overlay_profile">
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


                    {cgsProfile.map((value, ind) => (

                      <Profile_Cards cg_name={value.cg_name} profile_pc={value.profile_pic} price={value.price_package} key={ind} />

                    ))}









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
