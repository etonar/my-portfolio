import { data } from './data'

const reducer = (state, action) => {
  if (action.type === 'TOGGLE_MENU') {
    return { ...state, isMenuOpen: !state.isMenuOpen }
  }
  if (action.type === 'SET_ACT_PORTFOLIO') {
    return {
      ...state,
      activePortfolio: action.payload.title,
      projects: data[action.payload.index]
    }
  }
}

export default reducer
