import { SpinnerCircular } from 'spinners-react'

const TurnusItem = ({ title, date, totalPlaces, color, data, isLoading, error, regLink, subRegLink }) => {

  const availablePlaces = data.length > 0 ? totalPlaces - data[0].data.length : 0

  return (
    <div className="turnus mx-4 mb-32 lg:mb-12 xl:mb-0">
      <h3 className="font-bold mb-2 text-beige text-4xl">{title}</h3>
      <h4 className="mb-6 text-beige font-medium text-4xl">{date}</h4>
      { isLoading && 
        <div className="flex justify-center">
          <SpinnerCircular thickness={220} color="#FDECBE" /> 
        </div>
      }
      { error && <p className="text-beige text-2xl">Neco se pokazilo...</p> }
      { data.length > 0 &&  
        <div>
          <p className="mb-8 font-medium text-3xl" style={{color: `${color}`}}>
            {availablePlaces > 0 ? `Zbývá ${availablePlaces}/${totalPlaces}` : 'Vyprodáno'}
          </p>
          <a href={availablePlaces > 0 ? regLink : subRegLink} target="_blank" rel="nopener noreferrer" className="text-beige font-bold text-4xl px-6 py-3 max-w-lg block" style={{backgroundColor: `${color}`}}>
            {availablePlaces > 0 ? 'PŘIHLÁSIT SE' : 'PŘIHLÁSIT SE JAKO NÁHRADNÍK'}
          </a>
        </div>
      }
    </div>
  )
}

export default TurnusItem