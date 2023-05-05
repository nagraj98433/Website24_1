import React from 'react'
import '../../All styles/Why_US.css'

function Why_US() {
  return (
    <>
      <div className="container Full_width mt-3">
        <div class="image-container_Why_US">
          <div className="Bg_background_img"></div>

          <div class="overlay_Why_US">
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <div className="line_left_Review pe-3"><hr /></div>
                <div className="HowItWorks_heading_Review">WHY US</div>
                <div className="line_right line_left_Review ps-3"><hr /></div>
              </div>
            </div>

            <div className="Why_US_List_Container">
              <div>
                <ul>
                  <li>30 to 40% less amount have to pay for the service compare to other agency</li>
                  <li>No agency commission </li>
                  <li>Choose caregiver as your choice instead of agency choose for you</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Direct pay to caregiver not to agency </li>
                  <li>One time hiring charge, In agency every service commission have to pay</li>
                </ul>
              </div>
            </div>




          </div>
        </div>
      </div>
    </>
  )
}

export default Why_US
