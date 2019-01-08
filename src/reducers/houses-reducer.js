 const houses = (state=[], action) => {
  switch(action.type) {
    case 'ADD_HOUSES_SUCCESS':
      return action.houses
    default:
      return state
  }
}

export default houses;