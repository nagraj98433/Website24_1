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
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <NavLink exact to="/hirenow" className="nav-link">
                      <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                    </NavLink>
                    <div className='mt-2'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
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
                        <NavLink exact to="/hirenow" className="nav-link">
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
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <NavLink exact to="/hirenow" className="nav-link">
                      <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                    </NavLink>
                    <div className='mt-2'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                  </div>
                </div>
                {/* Third Card */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={Nursing} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <NavLink exact to="/hirenow" className="nav-link">
                      <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                    </NavLink>
                    <div className='mt-2'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
                  </div>
                </div>

                {/* Forth Cards */}
                <div className="card CardStyle SM_Block m-4" style={{ width: '18rem' }}>
                  <img src={BabyCare} className="card-img-top" alt="..." />
                  <div className="card-body px-0">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <NavLink exact to="/hirenow" className="nav-link">
                      <a href="#" className="btn btn-primary CardBtn_style">AVAILABLE</a>
                    </NavLink>
                    <div className='mt-2'><img src={CardGroup_pic} alt="CardGroup_pic" /></div>
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
                        <NavLink exact to="/hirenow" className="nav-link">
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
                        <NavLink exact to="/hirenow" className="nav-link">
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
                        <NavLink exact to="/hirenow" className="nav-link">
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
    </>
  )
}

export default Cards
