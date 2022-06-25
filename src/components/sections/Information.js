import Link from '../atoms/Link'
import nerd from '../../assets/img/nerd.png'
import chatBubble from '../../assets/img/chat_bubble.png'
import questionMark from '../../assets/img/question.png'
import '../../scss/Information.scss'

const Information = () => {
  const totalPriceCZK = 2599
  const depositCZK = totalPriceCZK - 1000

  const links = [
    { linkName: 'Mapa zde', linkTo: 'https://goo.gl/maps/mTdBDjBknPJoU5Yr8/' },
    { linkName: 'IDOS spoje zde', linkTo: 'https://idos.idnes.cz/vlakyautobusy/spojeni/vysledky/?date=22.08.2022&time=&f=&t=Byst%C5%99i%C4%8Dka,,u%20Nov%C3%A1k%C5%AF&tc=200003/' },
    { linkName: 'Web kempu zde', linkTo: 'http://kemp-bystricka.cz/' }
  ]


  return (
    <section id="informace" className="bg-browny text-center lg:text-left relative">
      <div className="flex justify-center lg:justify-end lg:w-4/5 xl:w-3/5 mx-auto">
        {/* <img src={nerd} alt="nerd postava" className="absolute -top-40" /> */}
        {/* <img src={questionMark} alt="nerd postava" className="absolute -top-96 left-20" /> */}
        {/* <img src={chatBubble} alt="nerd postava" className="block absolute top-20 right-20" /> */}
        <div className="info-table w-full mx-4 lg:mx-0 md:w-full lg:w-4/5 xl:w-3/5 md:px-16 py-12 my-8 md:bg-beige">
          <div className="info-price mb-8">
            <h4 className="text-yellow_orange md:text-browny text-2xl uppercase font-extrabold">Kolik to stojí?</h4>
            <p className="uppercase text-3xl font-bold mb-2 text-white md:text-dark_blu">{totalPriceCZK.toString()} / 105€</p>
            <p className="text-white md:text-dark_blu">Zálohu {depositCZK.toString()} Kč pošleš při přihlášení a zbylých<br />1 000 Kč zaplatíš až na místě.</p>
          </div>
          <div className="info-place mb-8">
          <h4 className="text-yellow_orange md:text-browny text-2xl uppercase font-extrabold">KDE BUDU?</h4>
            <p className="uppercase text-3xl font-bold mb-2 text-white md:text-dark_blu">Kemp Ranč Bystřička</p>
            <div className="flex justify-center flex-col md:flex-row lg:justify-start gap-y-4 md:gap-x-6 text-white md:text-dark_blu">
              {
                links.map(({ linkName, linkTo }) => (
                  <Link key={linkName} linkName={linkName} linkTo={linkTo} />
                ))
              }
            </div>
          </div>
          <div className="info-prepare-or-die">
            <h4 className="text-yellow_orange md:text-browny text-2xl uppercase font-extrabold">JAK SE MÁM PŘIPRAVIT?</h4>
            <p className="text-white md:text-dark_blu">Ubytování v chatkách a kompletní strava po celý pobyt je zajištěna.Vezmi si sportovní oblečení na teplé dny, ale i na chladnější rána.	A hlavně si nezapomeň dobrou náladu! Bude to jízda! Koukni na minulé ročníky!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information