import React from 'react'
import './Header.css';


function Header() {
  return (
    <div className='navbar'>
     <div className="left-panel">

      <div className="logo">

      </div>
      <div className="logo-text">
        PCCoE Art Circle
      </div>

     </div>
     <div className="right-panel">
      <ul className='menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
     </div>
    </div>
  )
}

export default Header
