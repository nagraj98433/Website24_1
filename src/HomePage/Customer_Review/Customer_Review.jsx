import React from 'react'
import '../../All styles/Customer_Review.css'
import Footer_img from '../../assets/Images/Footer_img.png'

function Customer_Review() {
  return (
    <>
      <div class="image-container1 mt-5">
        <img src={Footer_img} alt="Footer_img" />
        <div class="overlay1">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="line_left_Review pe-3"><hr /></div>
              <div className="HowItWorks_heading_Review">CUSTOMER REVIEWS</div>
              <div className="line_right line_left_Review ps-3"><hr /></div>
            </div>

          </div>

          <div className='text-warning Review_StarIcon'>
            <span><i class="fas fa-star"></i></span>
            <span><i class="fas fa-star"></i></span>
            <span><i class="fas fa-star"></i></span>
            <span><i class="fas fa-star"></i></span>
            <span><i class="fas fa-star"></i></span>
          </div>

          <div>
            <div className='Review_feedback mt-4 px-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fuga omnis accusantium facilis, delectus soluta! Voluptates reiciendis qui ipsum cupiditate quisquam mollitia veritatis. A mollitia veniam reiciendis? Blanditiis, beatae ad modi reiciendis sit sunt et quibusdam suscipit, maxime omnis distinctio aspernatur necessitatibus? Nesciunt possimus dolorum cumque, incidunt enim eligendi nulla totam beatae sint, exercitationem odio quos! Non consequatur veniam distinctio voluptas in, qui corrupti placeat unde corporis dolorum at est sapiente, quibusdam tenetur ipsa. Atque, libero architecto? Et debitis atque placeat! Voluptatem hic mollitia numquam eius, nisi pariatur dolorem nam sit? Voluptas magni praesentium at exercitationem obcaecati incidunt vero inventore!</div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Customer_Review
