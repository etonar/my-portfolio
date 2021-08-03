import React from 'react'
import './navbar.scss'
import { SiMinutemailer } from 'react-icons/si'
import { RiSmartphoneFill } from 'react-icons/ri'

import { PortfolioContext } from '../../context'

const Navbar = () => {
  const { isMenuOpen, toggleMenu } = React.useContext(PortfolioContext)

  return (
    <section className={`${isMenuOpen ? 'navbar active' : 'navbar'}`}>
      <div className="nav-center">
        <div className="left">
          <a href="#intro">ezio.</a>
          <div className="infoContainer">
            <RiSmartphoneFill className="icon" />
            <span>+213 673 19 10 98</span>
          </div>
          <div className="infoContainer">
            <SiMinutemailer className="icon" />
            <span>me@ahmed.com</span>
          </div>
        </div>
        <div className="right">
          <div className="humberger" onClick={toggleMenu}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
