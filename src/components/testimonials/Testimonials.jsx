import React from 'react'
import './testimonials.scss'
import { testimonials } from '../../utils/testimonials'
import Card from '../card/Card'

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h1>testimonials</h1>
      <div className="container">
        {testimonials.map((person) => {
          return <Card key={person.id} {...person} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
