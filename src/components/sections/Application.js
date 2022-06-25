import TurnusItem from '../moleculs/TurnusItem'
import '../../scss/Application.scss'
import useGoogleSheets from 'use-google-sheets'

const Application = () => {
  

  const { data: turnusOneData, loading: isLoadingTurnusOne, error: errorTurnusOne } = useGoogleSheets({
    apiKey: process.env.REACT_APP_SHEETS_API_KEY,
    sheetId: process.env.REACT_APP_SHEET_ID,
    sheetsNames: ['List 1']
  })

  const { data: turnusTwoData, loading: isLoadingTurnusTwo, error: errorTurnusTwo } = useGoogleSheets({
    apiKey: process.env.REACT_APP_SHEETS_API_KEY,
    sheetId: process.env.REACT_APP_SHEET_ID,
    sheetsNames: ['List 1']
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

  return (
    <section id="prihlaska" className="relative">
      <div className="w-full lg:w-4/5 mx-auto flex justify-around flex-wrap">
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
      <div className="info-text py-6 px-8 mt-16 text-beige mx-4 sm:w-4/5 lg:w-3/5 sm:mx-auto text-lg text-left">
        <p className="mb-4">Právě se rozmýšlíš nad nejlepším rozhodnutím svého života. Jo, jakože FAKT!</p>
        <p className="mb-4"> <span className="font-bold">Celouniverzitní Seznamovák UTB</span> již 5. rokem přichází na scénu. Tuto nabombenou akci pod záštitou Univerzity Tomáše Bati ve Zlíně pro Tebe připravuje <span className="font-bold">Studentská unie UTB</span> - parta pohodových lidí, kteří se postarají o nezapomenutelnou tečku za koncem léta.</p>
        <p className="mb-4">Je libo kamarády na celý život? Zážitky, kterými se můžeš chlubit kámošům u piva? Či letní lásku nečekanou? U nás můžeš dělat co chceš, jít spát kdy chceš a hlavně… <span className="font-bold">Být sám sebou!</span></p>
        <p className="mb-4">Po Seznamováku zcela jistě zjistíš, že Zlín byla ta správná volba. Město studentů, talentovaných lidí, ale hlavně to bude tvůj domov, ze kterého se ti bude těžce odjíždět.</p>
        <p className="mb-4">Jdeš do toho že jo? Tak pošli přihlášku a dojeď za námi na Bystřičku. My se Tě už nemůžeme dočkat.</p>
        <p className="font-bold">Začíná to UTeBe, začíná to na Seznamováku!</p>
      </div>
    </section>
  )
}

export default Application