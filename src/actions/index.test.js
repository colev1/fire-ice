import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of ADD_HOUSES_SUCCESS', () => {
    const houses = [
        {
          weapons: "Lady Forlorn",
          coatOfArms: "ravens",
          founded: '1020',
          name: "House Corbray of Heart's Home",
          seats: ["Heart's Home"],
          titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
          words: "blah blah"
        },
        {
          weapons: "weapons",
          coatOfArms: "birds",
          founded: '2000',
          name: "House Dayne",
          seats: ["One"],
          titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
          words: "blah"
        }
      ]
    const expectedAction = {
      type: 'ADD_HOUSES_SUCCESS',
      houses: [{
        weapons: "Lady Forlorn",
        coatOfArms: "ravens",
        founded: '1020',
        name: "House Corbray of Heart's Home",
        seats: ["Heart's Home"],
        titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
        words: "blah blah"
      },
      {
        weapons: "weapons",
        coatOfArms: "birds",
        founded: '2000',
        name: "House Dayne",
        seats: ["One"],
        titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
        words: "blah"
      }]
    }
      const result = actions.addHousesSuccess(houses);
      expect(result).toEqual(expectedAction)
  })

  it('should have a type of Is Loading houses', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING_HOUSES',
      isLoading: true
    }
    const result = actions.isLoadingHouses(bool)
    expect(result).toEqual(expectedAction)
  })
})