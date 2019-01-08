export const addHousesSuccess = (houses) => {
  return {
    type: 'ADD_HOUSES_SUCCESS',
    houses
  }
}

export const isLoadingHouses = (bool) => {
  return {
    type: 'IS_LOADING_HOUSES',
    isLoading: bool
  }
}