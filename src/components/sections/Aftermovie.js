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
          key={ytSrc}
          src={ytSrc}
          frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen title="teaser" sandbox='allow-scripts allow-same-origin allow-presentation' loading='lazy'>
        </iframe>
        ))
      }
    </section>
  )
}

export default Aftermovie