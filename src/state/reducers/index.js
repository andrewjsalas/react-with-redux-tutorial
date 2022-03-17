// Combine all reducers
import { combineReducers } from 'redux'
import accountReducer from './accountReducer'

// A function that takes in an object of all the reducers we want to combine
const reducers = combineReducers({
  accout: accountReducer
})

export default reducers