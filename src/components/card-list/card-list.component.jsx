import './card-list.style.css';
import Card from '../card/card.component';


import React from 'react'

const cardList = ({monsters}) => {
  return (
    <div className="card-list">
         {monsters.map((monster) => {
           return <Card monster={monster}/>
         })}
    </div>
  )
}

export default cardList;