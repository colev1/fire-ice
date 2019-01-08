import React from 'react';
import wolf from '../../assets/wolf.gif';
import '../App/App.css'

export const Loading = () => {
  return(
    <div>
      <img src={wolf} className='Wolf' alt='Wolf'/>
    </div>
  )

}