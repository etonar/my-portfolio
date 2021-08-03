import React from 'react'
import './work.scss'
import { slides } from '../../utils/slides'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/all'

const Work = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <section className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => {
          const { id, icon, title, desc, img } = slide
          return (
            <div className="container" key={id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={icon} alt="icon" className="img" />
                    </div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <span>Projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={img} alt={title} className="img" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <MdKeyboardArrowLeft
        className="arrow left"
        onClick={() => {
          setCurrentSlide((oldSlide) => {
            let tempSlide = oldSlide - 1
            if (tempSlide < 0) {
              tempSlide = slides.length - 1
            }
            return tempSlide
          })
        }}
      />
      <MdKeyboardArrowRight
        className="arrow right"
        onClick={() => {
          setCurrentSlide((oldSlide) => {
            let tempSlide = oldSlide + 1
            if (tempSlide > slides.length - 1) {
              tempSlide = 0
            }
            return tempSlide
          })
        }}
      />
    </section>
  )
}

export default Work
