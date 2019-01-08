import {mapDispatchToProps, mapStateToProps} from './App'
import {addHousesSuccess} from '../../actions'
import {fetchHouses} from '../../thunks/fetchHouses'

describe ('mapStateToProps', () => {
  
  it('should return an object with a houses array', () => {
    const mockState = {
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
      }],
      isLoadingHouses: false
    }
    const expected = {houses: [{
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
    }],
    isLoadingHouses: false
  }
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)

})
})

describe ('mapDispatchToProps', () => {

  it.skip('calls dispatch with an addhouses action on page load', () => {
    const mockDispatch = jest.fn()
    const houses =  [{
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
    const mockUrl = 'google.com'
    const actionToDispatch = addHousesSuccess(houses)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchHouses(mockUrl)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})