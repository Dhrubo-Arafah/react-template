import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars, FaCoffee  } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick =()=> setClick(!click);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL<FaCoffee/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? < FaTimes />: < FaBars />}
</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
