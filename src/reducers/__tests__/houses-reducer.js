import {housesReducer, isLoadingHouses} from '../houses-reducer'

describe('houses reducer', () => {
  it('should return initial state', () => {
    const expected = []
    const result = housesReducer(undefined,{})
    expect(result).toEqual(expected)
  })

  it('should return state with all houses', () => {
    const action = {
      type: 'ADD_HOUSES_SUCCESS',
      houses: [
        {name: 'yo', titles: ['a', 'b']
      },
      {name: 'hi', titles: ['c', 'd']
      }
    ]
  };
    const expected = [{name: 'yo', titles: ['a', 'b']},{name: 'hi', titles: ['c', 'd']
  }];
    const result = housesReducer(undefined, action)
    expect(result).toEqual(expected)
  })

  it('should return loading is true', () => {
    const action = {
      type: 'IS_LOADING_HOUSES',
      isLoading: true
    }

    const expected = true;
    const result = isLoadingHouses(undefined, action)
    expect(result).toEqual(expected)
  })
})