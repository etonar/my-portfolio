import React from 'react'
import './contact.scss'
import contactBcg from '../../assets/scene3.png'
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="left">
        <img className="img" src={contactBcg} alt="contact bcg" />
      </div>
      <div className="right">
        <h1>contact</h1>
        <form action="https://formspree.io/f/xpzkyrao" method="POST">
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="_replyto"
          />
          <textarea className="input" name="message" placeholder="Message"></textarea>
          <button type="submit" className="btn btn-block">
            get in touch
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
