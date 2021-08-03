import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { PortfolioProvider } from './context'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </StrictMode>,
  rootElement
)
