import React from 'react'
import './sidebar.scss'
 import { SiMinutemailer } from 'react-icons/si'
import { RiSmartphoneFill } from 'react-icons/ri'
import { PortfolioContext } from '../../context'

const SideBar = () => {
  const { isMenuOpen, toggleMenu } = React.useContext(PortfolioContext)

  return (
    <section
      className={`${isMenuOpen ? 'sidebar showMenu' : 'sidebar'}`}
      id="sidebar"
    >
      <ul>
        <li onClick={toggleMenu}>
          <a href="#intro">home</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#portfolio">portfolio</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#work">work</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#testimonials">testimonials</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="infoContainer">
        <RiSmartphoneFill className="icon" />
        <span>+213 673 19 10 98</span>
      </div>
      <div className="infoContainer">
        <SiMinutemailer className="icon" />
        <span>me@ahmed.com</span>
      </div>
    </section>
  )
}

export default SideBar
