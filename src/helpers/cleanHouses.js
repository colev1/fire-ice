export const cleanHouses = (houses) => {
 return houses.map(house => ({
    weapons: house.ancestralWeapons, 
    url: house.url,
    coatOfArms: house.coatOfArms,
    founded: house.founded,
    name: house.name,
    seats: house.seats,
    titles: house.titles,
    word: house.words
  }))
}