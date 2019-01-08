import { combineReducers } from 'redux'
import {houses, isLoadingHouses} from './houses-reducer'

const rootReducer = combineReducers({
  houses,
  isLoadingHouses
})

export default rootReducer