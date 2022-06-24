const TurnusItem = ({ title, date, availablePlaces, totalPlaces, linkToAssign, color }) => {
  return (
    <div className="turnus mx-4 mb-32 lg:mb-0">
      <h3 className="font-bold mb-2 text-beige text-4xl">{title}</h3>
      <h4 className="mb-6 text-beige font-medium text-4xl">{date}</h4>
      <p className="mb-8 font-medium text-3xl" style={{color: `${color}`}}>Zbývá {availablePlaces}/{totalPlaces}</p>
      <a href={linkToAssign} target="_blank" rel="nopener noreferrer" className="text-beige font-bold text-4xl px-6 py-3" style={{backgroundColor: `${color}`}}>
        PŘIHLÁSIT SE
      </a>
    </div>
  )
}

export default TurnusItem