import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id='nav' className='navbar'>
     <div className="left-panel">

      <div className="logo">

      </div>
      <div className="logo-text">
        PCCoE Art Circle
      </div>

     </div>
     <div className="right-panel">
      <ul className='menu'>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT US</Link></li>
        <li><a href="/activities">ACTIVITIES</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Header
