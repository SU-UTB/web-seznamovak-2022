import TurnusItem from '../moleculs/TurnusItem'
import '../../scss/Application.scss'
import useGoogleSheets from 'use-google-sheets'
import Information from './Information'
import InfoText from '../InfoText'

const Application = () => {
  

  const { data: turnusOneData, loading: isLoadingTurnusOne, error: errorTurnusOne } = useGoogleSheets({
    apiKey: process.env.REACT_APP_SHEETS_API_KEY,
    sheetId: process.env.REACT_APP_SHEET_TURNUS_ONE_ID,
  })

  const { data: turnusTwoData, loading: isLoadingTurnusTwo, error: errorTurnusTwo } = useGoogleSheets({
    apiKey: process.env.REACT_APP_SHEETS_API_KEY,
    sheetId: process.env.REACT_APP_SHEET_TURNUS_TWO_ID,
  })
  
  const turnusList = [
    {
      title: '1. Turnus',
      date: '22.8. – 25.8.2022',
      totalPlaces: 100,
      color: '#E25525',
      data: turnusOneData,
      isLoading: isLoadingTurnusOne,
      error: errorTurnusOne,
      regLink: 'https://forms.gle/AsUNow9AbFCjQoj79',
      subRegLink: 'https://forms.gle/CA8qT4Auz8dpbEf5A'
    },
    {
      title: '2. Turnus',
      date: '29.8. – 1.9.2022',
      totalPlaces: 100,
      color: '#F3A548',
      data: turnusTwoData,
      isLoading: isLoadingTurnusTwo,
      error: errorTurnusTwo,
      regLink: 'https://forms.gle/KDb4pAEMcPy2WgRq5',
      subRegLink: 'https://forms.gle/yCaTPcaRN2DKTshD6'
    },
  ]

  const totalPriceCZK = 2599
  const depositCZK = totalPriceCZK - 1000

  const links = [
    { linkName: 'Mapa zde', linkTo: 'https://goo.gl/maps/mTdBDjBknPJoU5Yr8/' },
    { linkName: 'IDOS spoje zde', linkTo: 'https://idos.idnes.cz/vlakyautobusy/spojeni/vysledky/?date=22.08.2022&time=&f=&t=Byst%C5%99i%C4%8Dka,,u%20Nov%C3%A1k%C5%AF&tc=200003/' },
    { linkName: 'Web kempu zde', linkTo: 'http://kemp-bystricka.cz/' }
  ]

  return (
    <section id="prihlaska" className="relative">
      <div className="w-full lg:w-4/5 mx-auto flex justify-around flex-wrap pt-32 lg:pb-16">
        {
          turnusList.map(({ title, date, totalPlaces, linkToAssign, color, data, isLoading, error, regLink, subRegLink}) => (
            <TurnusItem 
              key={title}
              title={title} 
              date={date} 
              totalPlaces={totalPlaces} 
              linkToAssign={linkToAssign} 
              color={color}
              data={data}
              isLoading={isLoading}
              error={error}
              regLink={regLink}
              subRegLink={subRegLink}
            />
          ))
        }
      </div>
      <InfoText />
      <Information />
    </section>
  )
}

export default Application