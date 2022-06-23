import Link from '../atoms/Link'

const Information = () => {
  const totalPriceCZK = 2599
  const depositCZK = totalPriceCZK - 1000


  return (
    <section id="informace">
      <div>
        <img src="" alt="nerd postava" />
        <div className="info-table">
          <div className="info-price">
            <h4>Kolik to stojí?</h4>
            <p>{totalPriceCZK.toString()} / 105€</p>
            <p>Zálohu {depositCZK.toString()} Kč pošleš při přihlášení a zbylých<br />1 000 Kč zaplatíš až na místě.</p>
          </div>
          <div className="info-place">
            <h4></h4>
            <p></p>
            <div className="flex">
              <Link linkName="Mapa zde" linkTo="https://goo.gl/maps/mTdBDjBknPJoU5Yr8/" />
              <Link linkName="IDOS spoje zde" linkTo="https://idos.idnes.cz/vlakyautobusy/spojeni/vysledky/?date=22.08.2022&time=&f=&t=Byst%C5%99i%C4%8Dka,,u%20Nov%C3%A1k%C5%AF&tc=200003/" />
              <Link linkName="Web kempu zde" linkTo="http://kemp-bystricka.cz/" />
            </div>
          </div>
          <div className="info-prepare-or-die">
            <p>Ubytování v chatkách a kompletní strava po celý pobyt je zajištěna.Vezmi si sportovní oblečení na teplé dny, ale i na chladnější rána.	A hlavně si nezapomeň dobrou náladu! Bude to jízda! Koukni na minulé ročníky!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information