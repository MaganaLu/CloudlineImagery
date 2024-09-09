import { useState, useEffect  } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import placeholderLogo from '../assets/placeholderLogo.png'

import './Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const navigate = useNavigate();
  // method to jump to the desired element by using the element's id
  const jumpToReleventDiv = async (id) => {
    navigate("/");
    console.log(id);

    await sleep(1000);


    const releventDiv = document.getElementById("ContactSection");
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={placeholderLogo} />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={faBars} />
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
            <li to="/" style={{ color: "black" }} className='CustomContactButton' onClick={() => jumpToReleventDiv("ContactSection")}>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar