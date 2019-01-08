import { combineReducers } from 'redux'
import {housesReducer, isLoadingHouses} from './houses-reducer'

const rootReducer = combineReducers({
  houses: housesReducer,
  isLoadingHouses
})

export default rootReducer