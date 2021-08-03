import React from 'react'
import './portfolio.scss'
import { PortfolioContext } from '../../context'
import { tabs } from '../../utils/tabs'

const Portfolio = () => {
  const { activePortfolio, setActivePortfolio, projects } = React.useContext(
    PortfolioContext
  )

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h1>portfolio</h1>
        <ul>
          {tabs.map((item, index) => {
            const { id, title } = item
            return (
              <li
                key={id}
                className={`${activePortfolio === title ? 'active' : null}`}
                onClick={() => setActivePortfolio(index, title)}
              >
                {title}
              </li>
            )
          })}
        </ul>
        <div className="items-container">
          {projects.map((project) => {
            const { id, title, img } = project
            return (
              <div className="item" key={id}>
                <img src={img} alt={title} className="img" />
                <h3>{title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
