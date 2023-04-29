import React, { useEffect, useState } from 'react'
import '../../All styles/TopHeader.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Outlet, NavLink } from "react-router-dom";

function TopHeader() {


  return (
    <>
      <div className="Position_fixed">
        <header className='NavMenu_container'>
          <nav className="navbar navbar-expand-lg Position_fixed">
            <div className="container BottomShadow">
              <div className='PadLeft'><span className='HeaderLeft_content'>H'EY:</span> <span className='HeaderLeft_content_1'>HIRE'EM YOURSELF</span></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink exact to='/' className="nav-link" aria-current="page">Home</NavLink>
                  <NavLink exact to='/aboutus' className="nav-link">About us</NavLink>
                  <NavLink exact to="/services" className="nav-link">Services</NavLink>
                  <NavLink exact to="/Contactus" className="nav-link">Contact us</NavLink>
                  <NavLink to="/login" className="nav-link"><span className='bgRounded'>Login/Signup</span></NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <Outlet />
    </>
  )
}

export default TopHeader
