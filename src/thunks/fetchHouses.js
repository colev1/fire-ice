import {isLoadingHouses, addHousesSuccess} from '../actions'
import {cleanHouses} from '../helpers/cleanHouses'

export const fetchHouses = (url) => {
  return async(dispatch) => {
    try {
      dispatch(isLoadingHouses(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoadingHouses(false))
      const data = await response.json()
      console.log(data)
      const houses = await cleanHouses(data)
      dispatch(addHousesSuccess(houses))
    } catch(error) {
      console.log(error.message)
    }
  }
}