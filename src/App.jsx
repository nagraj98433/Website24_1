import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import AboutUS from './AboutUS_Page/AboutUS';
import TopHeader from './HomePage/TopHeader/TopHeader';
import Services from './ServicesPage/Services';
import ContactUS from './ContactUS_Page/ContactUS';
import LoginSingup from './Login_signup_Page/LoginSingup';
import Error from './ErrorPage';
import HireNow from './HireNow_page/HireNow';
import Pricing from './Pricing_Page/Pricing';


function App() {
  return (
    <>
      <div className='BG_IMG'>
        <TopHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUS />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contactus' element={<ContactUS />} />
          <Route path='/Login' element={<LoginSingup />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/HireNow' element={< HireNow />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
