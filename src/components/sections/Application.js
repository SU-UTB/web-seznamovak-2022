import TurnusItem from '../moleculs/TurnusItem'
import '../../scss/Application.scss'
import useGoogleSheets from 'use-google-sheets'
import Information from './Information'
import InfoText from '../InfoText'
import Notification from '../moleculs/Notification'
import TurnusHeadline from '../moleculs/TurnusHeadline'

const Application = () => {
  // year:month(0-11):day:hour:minute:second
  const startDate = new Date(2022, 6, 5, 0, 0, 0)
  const shouldStartRegistration = Date.now() >= startDate

  const { data: turnusOneData, loading: isLoadingTurnusOne, error: errorTurnusOne } = shouldStartRegistration ?
    useGoogleSheets({
      apiKey: process.env.REACT_APP_SHEETS_API_KEY,
      sheetId: process.env.REACT_APP_SHEET_TURNUS_ONE_ID,
  }) : { data: null, loading: false, error: null }

  const { data: turnusTwoData, loading: isLoadingTurnusTwo, error: errorTurnusTwo } = shouldStartRegistration ?
    useGoogleSheets({
      apiKey: process.env.REACT_APP_SHEETS_API_KEY,
      sheetId: process.env.REACT_APP_SHEET_TURNUS_TWO_ID,
  }) : { data: null, loading: false, error: null }

  const turnusList = [
    {
      title: '1. Turnus',
      date: '22. 8. – 25. 8. 2022',
      range: '(pondělí – čtvrtek)',
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
      date: '29. 8. – 1. 9. 2022',
      range: '(pondělí – čtvrtek)',
      totalPlaces: 100,
      color: '#F3A548',
      data: turnusTwoData,
      isLoading: isLoadingTurnusTwo,
      error: errorTurnusTwo,
      regLink: 'https://forms.gle/KDb4pAEMcPy2WgRq5',
      subRegLink: 'https://forms.gle/yCaTPcaRN2DKTshD6'
    },
  ]

  return (
    <section id="prihlaska">
      <div className="w-full lg:w-4/5 mx-auto flex justify-around flex-wrap pt-32 lg:pb-16">
        {!shouldStartRegistration &&
          <div className="notify-headline w-full">
            <Notification />
            <div className="flex justify-around flex-wrap w-full lg:w-4/5 mx-auto pt-16">
              {
                turnusList.map(({ title, date, color, range }) => (
                  <TurnusHeadline key={title} title={title} date={date} range={range} color={color} />
                ))
              }
            </div>
          </div>

        }
        {
          shouldStartRegistration &&
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
              shouldStart={shouldStartRegistration}
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
