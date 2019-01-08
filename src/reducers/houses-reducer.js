 export const houses = (state=[], action) => {
  switch(action.type) {
    case 'ADD_HOUSES_SUCCESS':
      return action.houses
    default:
      return state
  }
}

export const isLoadingHouses = (state=false, action) => {
  switch(action.type) {
    case 'IS_LOADING_HOUSES':
      return action.isLoading
    default:
      return state
  }
}

// export default houses;