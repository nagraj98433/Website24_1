import React from 'react'
import '../../All styles/Cards.css'
import ElderCare from '../../assets/Images/ElderCare.png'
import BabyCare from '../../assets/Images/BabyCare.png'
import Nursing from '../../assets/Images/Nursing.png'
import CardGroup_pic from '../../assets/Images/CardGroup_pic.png'
import { Outlet, NavLink } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className='Main_container mt-5'>
        <div className='Container-fluid'>
          <div className="row">

            <div className="col-auto col-md-12 col-lg-12 col-xl-12 col-xxl-12 px-0 Destop_responsive">
              <div className='Flex_container'>
                {/* First Card */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={ElderCare} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">John Doe</h5>
                    <button type="button" class="btn btn-primary EdlerCareBtn_Cards">Elder Care</button>
                    <div className="Rating_icons text-center mt-2">
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                    </div>
                    <div className="Location_rate_container mt-2">
                      <div>
                        <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
                        <span className="text-warning me-4 Marging_right">Mumbai </span>
                      </div>
                      <div>
                        <span className='Hours'>24hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1400, </span>
                        <span className='Hours'>12hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1000</span>

                      </div>
                    </div>
                    <p className="card-text mt-2"><span className='fw-bold'>Condition Handled :</span> It is a long established fact that a reader long established fact</p>
                    <div className='Available_Btn_container'>
                      <NavLink exact to="/Available" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                      </NavLink>
                    </div>
                    <div className='On_Duty d-none'>
                      <NavLink exact to="" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_OnDuty">ON DUTY</a>
                      </NavLink>
                    </div>
                  </div>
                </div>


                {/* Extra Small first mobile card start */}


                <div className="card CardStyle XS_Block mb-5">
                  <div className='Flex_container'>
                    <div className='Img_container'>
                      <img src={ElderCare} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-0" style={{ maxWidth: '240px' }}>
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when that a reader will be distracted by the </p>
                      <div className='Btn_icons_Flex_container'>
                        <NavLink exact to="" className="nav-link">
                          <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                        </NavLink>
                        <div className='Cards_icons'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Extra Small first mobile card End */}



                {/* Second Cards */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={BabyCare} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">Micheal Dawe</h5>
                    <button type="button" class="btn btn-primary EdlerCareBtn_Cards">Elder Care</button>
                    <div className="Rating_icons text-center mt-2">
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                    </div>
                    <div className="Location_rate_container mt-2">
                      <div>
                        <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
                        <span className="text-warning me-4 Marging_right">Mumbai </span>
                      </div>
                      <div>
                        <span className='Hours'>24hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1400, </span>
                        <span className='Hours'>12hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1000</span>

                      </div>
                    </div>
                    <p className="card-text mt-2"><span className='fw-bold'>Condition Handled :</span> It is a long established fact that a reader long established fact</p>
                    <div className='Available_Btn_container'>
                      <NavLink exact to="/Available" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                      </NavLink>
                    </div>

                    <div className='On_Duty d-none'>
                      <NavLink exact to="" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_OnDuty">ON DUTY</a>
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Third Card */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={Nursing} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">Mathew Suja</h5>
                    <button type="button" class="btn btn-primary EdlerCareBtn_Cards">Elder Care</button>
                    <div className="Rating_icons text-center mt-2">
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                    </div>
                    <div className="Location_rate_container mt-2">
                      <div>
                        <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
                        <span className="text-warning me-4 Marging_right">Mumbai </span>
                      </div>
                      <div>
                        <span className='Hours'>24hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1400, </span>
                        <span className='Hours'>12hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1000</span>

                      </div>
                    </div>
                    <p className="card-text mt-2"><span className='fw-bold'>Condition Handled :</span> It is a long established fact that a reader long established fact</p>
                    <div className='Available_Btn_container'>
                      <NavLink exact to="/Available" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                      </NavLink>
                    </div>
                    <div className='On_Duty d-none'>
                      <NavLink exact to="" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_OnDuty">ON DUTY</a>
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* Forth Cards */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={BabyCare} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">Bohden Hele</h5>
                    <button type="button" class="btn btn-primary EdlerCareBtn_Cards">Elder Care</button>
                    <div className="Rating_icons text-center mt-2">
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                      <span><i class="fas fa-star"></i></span>
                    </div>
                    <div className="Location_rate_container mt-2">
                      <div>
                        <span className="pe-2 text-warning"><i class="fas fa-map-marker-alt"></i></span>
                        <span className="text-warning me-4 Marging_right">Mumbai </span>
                      </div>
                      <div>
                        <span className='Hours'>24hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1400, </span>
                        <span className='Hours'>12hr -</span> <span className='Rupee'><i class="fas fa-rupee-sign"></i></span><span className='Rate'>1000</span>

                      </div>
                    </div>
                    <p className="card-text mt-2"><span className='fw-bold'>Condition Handled :</span> It is a long established fact that a reader long established fact</p>
                    <div className='Available_Btn_container'>
                      <NavLink exact to="/Available" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                      </NavLink>
                    </div>
                    <div className='On_Duty d-none'>
                      <NavLink exact to="" className="nav-link">
                        <a href="#" className="btn btn-primary CardBtn_OnDuty">ON DUTY</a>
                      </NavLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>



            {/* mobile second & third card started */}

            <div className="col-auto col-md-12 col-lg-9 col-xl-9 col-xxl-9 px-0 Destop_responsive">
              <div className='Flex_container'>

                {/* Extra Small second mobile cards start */}

                <div className="card CardStyle XS_Block mb-5">
                  <div className='Flex_container'>
                    <div className='Img_container'>
                      <img src={ElderCare} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-0" style={{ maxWidth: '240px' }}>
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when that a reader will be distracted by the </p>
                      <div className='Btn_icons_Flex_container'>
                        <NavLink exact to="" className="nav-link">
                          <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                        </NavLink>
                        <div className='Cards_icons'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra Small second mobile cards End */}

              </div>
            </div>

            <div className="col-auto col-md-12 col-lg-9 col-xl-9 col-xxl-9 px-0 Destop_responsive">
              <div className='Flex_container'>

                {/* Extra Small third mobile cards start */}

                <div className="card CardStyle XS_Block mb-5">
                  <div className='Flex_container'>
                    <div className='Img_container'>
                      <img src={ElderCare} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-0" style={{ maxWidth: '240px' }}>
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when that a reader will be distracted by the </p>
                      <div className='Btn_icons_Flex_container'>
                        <NavLink exact to="" className="nav-link">
                          <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                        </NavLink>
                        <div className='Cards_icons'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra Small third mobile cards End */}




                {/* mobile second & third card started */}

              </div>
            </div>

            {/* mobile forth card started */}
            {/* mobile second & third card started */}



            <div className="col-auto col-md-12 col-lg-9 col-xl-9 col-xxl-9 px-0 Destop_responsive">
              <div className='Flex_container'>

                {/* Extra Small forth mobile cards start */}

                <div className="card CardStyle XS_Block mb-5">
                  <div className='Flex_container'>
                    <div className='Img_container'>
                      <img src={ElderCare} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body p-0" style={{ maxWidth: '240px' }}>
                      <h5 className="card-title">John Doe</h5>
                      <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when that a reader will be distracted by the </p>
                      <div className='Btn_icons_Flex_container'>
                        <NavLink exact to="" className="nav-link">
                          <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                        </NavLink>
                        <div className='Cards_icons'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extra Small forth mobile cards End */}


              </div>
            </div>

          </div>
        </div>
      </div>


      {/* View More Profile start */}
      <div className='View_more_profile_container text-center'>
        <div className='Cards_icons'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
        <div className='View_more_profile_btn_container mt-2'>
          <NavLink exact to="/More_Profile" className="nav-link">
            <a href="#" className="btn btn-primary View_more_profile_btn">VIEW MORE PROFILE</a>
          </NavLink>
        </div>
      </div>
      {/* View More Profile end */}
    </>
  )
}

export default Cards
