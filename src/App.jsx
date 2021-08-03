import './main.css'
import './normalize.css'
import './app.scss'

import {
  Navbar,
  SideBar,
  Intro,
  Work,
  Portfolio,
  Testimonials,
  Contact
} from './components'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}
