import React from 'react'
import './intro.scss'
import avatar from '../../assets/man.svg'
import { IoIosArrowDown } from 'react-icons/io'

const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <p>hi, there i'm</p>
          <h1>ahmed ait ziane</h1>
          <h2>front end developer</h2>
        </div>
        <a href="#contact">
          <IoIosArrowDown />
        </a>
      </div>
    </section>
  )
}

export default Intro
