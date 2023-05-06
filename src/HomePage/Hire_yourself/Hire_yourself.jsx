import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../All styles/Hire_yourself.css'
import Hire_Yourself from '../../assets/Images/Hire_yourself.png'

const Hire_yourself = () => {

  const [index, setIndex] = useState(0);


  const handleSlideChange = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    handleSlideChange(index);
  }, [index]);



  return (
    <div className='Main_container mt-5'>
      <div className="row  mx-0">
        <div className="col-7">


          <Carousel activeIndex={index} onSelect={handleSlideChange}>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="First slide" />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="Second slide" />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="Third slide" />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>





        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-10">
              <div className='from_container'>
                <form>
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
                  </div>
                  <div class="mb-3">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Mobile Number' />
                  </div>
                  <div className='text-center'> <button type="submit" class="btn btn-primary form_btn">SUBMIT</button></div>
                </form>
                <div className='Horizontal_line mt-4'><hr /></div>
                <div className='text-center'>
                  <div className='Available_services'>AVAILABLE SERVICES</div>
                  <div className='Available_service_container d-flex justify-content-center mt-2'>
                    <div className='Elder_care care'>Elder Care</div>
                    <div className='Nursing care'>Nursing</div>
                    <div className='Baby_care care'>Baby Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Hire_yourself
