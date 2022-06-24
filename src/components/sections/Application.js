import TurnusItem from '../moleculs/TurnusItem'
import '../../scss/Application.scss'

const Application = () => {

  return (
    <section id="prihlaska">
      <div className="w-full lg:w-4/5 mx-auto flex justify-around flex-wrap">
        <TurnusItem title="1. Turnus" date="22.8. – 25.8.2022" availablePlaces={35} totalPlaces={100} linkToAssign="https://example.com" color="#E25525" />
        <TurnusItem title="2. Turnus" date="29.8. – 1.9.2022" availablePlaces={12} totalPlaces={100} linkToAssign="https://example.com" color="#F3A548" />
      </div>
    </section>
  )
}

export default Application