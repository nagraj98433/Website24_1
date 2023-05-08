import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './HomePage/Home';
import TopHeader from './HomePage/TopHeader/TopHeader';
import Services from './ServicesPage/Services';
import ContactUS from './ContactUS_Page/ContactUS';
import LoginSingup from './Login_signup_Page/LoginSingup';
import Error from './ErrorPage';
import More_Profile from './More_Profile_page/More_Profile';
import Pricing from './Pricing_Page/Pricing';
import Available_page from './Available_page/Available_page';


function App() {
  return (
    <>
      <div className='BG_IMG'>
        <TopHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Available' element={<Available_page />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contactus' element={<ContactUS />} />
          <Route path='/Login' element={<LoginSingup />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/More_Profile' element={< More_Profile />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App
