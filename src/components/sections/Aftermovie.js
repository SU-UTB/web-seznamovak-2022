import '../../scss/Aftermovie.scss'

const Aftermovie = () => {
  const ytSources = [
    'https://www.youtube.com/embed/3USX4ZVBYuw',
    'https://www.youtube.com/embed/I_tYUzDFuTw',
    'https://www.youtube.com/embed/sB2v7_IGqsc'
  ]

  return (
    <section id="aftermovie">
      { ytSources.map(ytSrc => (
        <iframe 
          className="w-full relative z-30" 
          key={ytSrc}
          src={ytSrc}
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen title="teaser" loading="lazy">
        </iframe>
        ))
      }
    </section>
  )
}

export default Aftermovie