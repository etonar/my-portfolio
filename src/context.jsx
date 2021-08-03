import React, { useReducer } from 'react'
import reducer from './reducer'
import { data } from './data'
const PortfolioContext = React.createContext()

const initState = {
  isMenuOpen: false,
  activePortfolio: 'featured',
  projects: data[0]
}

const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  const toggleMenu = () => {
    dispatch({ type: 'TOGGLE_MENU' })
  }
  const setActivePortfolio = (index, title) => {
    dispatch({ type: 'SET_ACT_PORTFOLIO', payload: { index, title } })
  }
  return (
    <PortfolioContext.Provider
      value={{ ...state, toggleMenu, setActivePortfolio }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export { PortfolioContext, PortfolioProvider }
