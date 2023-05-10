import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../All styles/Hire_yourself.css'
import Hire_Yourself from '../../assets/Images/Hire_yourself.png'

const Hire_yourself = () => {

  const [index, setIndex] = useState(0);

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setFormValidated(true);
  };




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
        <div className="col-auto col-xxl-7 col-xl-7 col-lg-8 col-md-8 col-sm-12">


          <Carousel activeIndex={index} onSelect={handleSlideChange}>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="First slide" className='Slider_img' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="Second slide" className='Slider_img' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Hire_Yourself} alt="Third slide" className='Slider_img' />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>





        </div>
        <div className="col-auto col-xxl-5 col-xl-5 col-lg-4 col-md-4 col-sm-12 mt-md-5 mt-sm-5 FormSection">
          <div className="row">
            <div className="col-auto col-md-12 col-sm-12">
              <div className='from_container'>

                <form noValidate onSubmit={handleSubmit} className={formValidated ? 'was-validated' : ''}>
                  <div className="mb-3">
                    <input type="text" className="form-control HomePage_Form" id="exampleInputName" placeholder="Enter Your Name" pattern="[A-Za-z]{3,}" required value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' />
                    <div className="invalid-feedback">Please enter your name</div>
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control HomePage_Form" id="exampleInputMobile" placeholder="Enter Mobile Number" pattern="[0-9]{10}" required value={mobile} onChange={(e) => setMobile(e.target.value)} autoComplete='off' />
                    <div className="invalid-feedback">Please enter a valid 10-digit mobile number</div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary form_btn">SUBMIT</button>
                  </div>
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
