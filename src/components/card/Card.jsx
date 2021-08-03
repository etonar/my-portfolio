import React from 'react'
import './card.scss'
import arrow from '../../assets/right-arrow.png'

const Card = ({ name, title, img, icon, desc, featured }) => {
  return (
    <article className={`${featured ? 'card featured' : 'card'}`}>
      <div className="header">
        <img className="img" src={arrow} alt="arrow" />
        <img className="img user" src={img} alt={name} />
        <img className="img" src={icon} alt="icon" />
      </div>
      <div className="content">
        <p>{desc}</p>
      </div>
      <footer>
        <h3>{name}</h3>
        <p>{title}</p>
      </footer>
    </article>
  )
}

export default Card
