import React from 'react'

const TurnusItem = ({ title, date, availablePlaces, totalPlaces, linkToAssign, color }) => {
  return (
    <div className="turnus">
      <h3 className="font-bold">{title}</h3>
      <h4 className="">{date}</h4>
      <p>Zbývá {availablePlaces}/{totalPlaces}</p>
      <a href={linkToAssign} target="_blank" rel="nopener noreferrer" style={`color: ${color}`}>
        PŘIHLÁSIT SE
      </a>
    </div>
  )
}

export default TurnusItem