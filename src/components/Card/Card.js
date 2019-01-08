import React from 'react';
import '../../containers/App/App.css'

export const Card = (props) => {
  const {name, seats, coatOfArms, founded, titles, word, weapons} = props.house;
  const displayTitles = titles.map(title => 
    <p key={title}> Titles: {title} </p>
  )
  return (
    <div className='Card' key={name}>
      <h1> {name} </h1> 
      <h3> {word} </h3>
      <h4> Founded: {founded ? founded : 'N/A'} </h4>
      <p> Seats: {seats} </p>
      {displayTitles}
      <p> Ancestral weapons: {weapons} </p>
      <p> Coat of Arms: {coatOfArms} </p>
    </div>
  )
}

