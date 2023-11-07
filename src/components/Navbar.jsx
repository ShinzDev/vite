// import React from 'react'
import logo from '../assets/logo.png'
import './nav.css'


const Navbar = () => {
  return (
    <div className='nav_container'>
        <div className="logo"> <img src={logo} alt="" /></div>
        <div className="navigation">
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">About Us</a></li>
                <div>
                    
                <p>core features</p>
                {/* <select name="type " id="">
                       <option value="">house</option>
                       <option value="">Links</option>
                       <option value="">Shop</option>
                       <option value=""><li>jump</li></option>
                    </select> */}
                </div>
                   
                <li><a href="">News</a></li>
            </ul>
        </div>
        <div className="start">
            <li>Get Started</li>
        </div>
    </div>
  )
}

export default Navbar
