import { useState, useEffect  } from 'react';
import { NavLink } from 'react-router-dom';
import placeholderLogo from '../assets/placeholderLogo.png';
import HamburgerMenu from '../assets/HamburgerMenu.svg';

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={placeholderLogo} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img style={{height:"50px", width:"25px"}} src={HamburgerMenu} alt="menu"/>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio">Portfolio</NavLink>
            </li>
            <li>
            <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar