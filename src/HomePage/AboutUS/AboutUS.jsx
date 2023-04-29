import React from 'react'
import '../../All styles/AboutUS.css'
import Aboutus_pic from '../../assets/Images/Aboutus_pic.png'

function AboutUS() {
  return (
    <>
      <div className='Main_container mt-5'>
        <div className='container'>
            <div className='row'>
                <div className="col-5 SM_ImgHide">
									<div className='AboutUS_Img_container'>
										<img src={Aboutus_pic} alt="" />
									</div>
								</div>
                <div className="col-7 SMWidth_100">
									<div className="row">
										<div className="col-auto col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className='AboutUs_header'>ABOUT US</div>
                      </div>
										<div className="col-auto col-sm-6 col-md-6 col-lg-6 col-xl-6">
                      <div className='Line'></div>
                    </div>
									</div>
									<div className="row">
										<div className="col-12">
                      <div className='AboutUs_SuBheader'>How We Can Help You Properly.</div>
                    </div>
									</div>
									<div className="row">
										<div className="col-12 mt-3">
                      <div className='AboutUs_Regular_content'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
                      </div>
                    </div>
									</div>
									<div className="row">
										<div className="col-12 mt-3">
											<div className='AboutUs_Regular_List'>
                      <ul>
												<li>Lorem ipsum dolor sit amet ipsum dolor sit amet barefoot caring.</li>
												<li>Lorem ipsum dolor sit amet ipsum dolor sit amet barefoot caring.</li>
												<li>Lorem ipsum dolor sit amet ipsum dolor sit amet barefoot caring.</li>
												<li>Lorem ipsum dolor sit amet ipsum dolor sit amet barefoot caring.</li>
											</ul>
                      </div>
										</div>
									</div>
									<div className="row">
										<div className="col-12 mt-3">
										<div className='AboutUs_Btn_container'>
                    <button type="button" class="btn btn-primary">READ MORE</button>
                    </div>
										</div>
									</div>
								</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutUS
