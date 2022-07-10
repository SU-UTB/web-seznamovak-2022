const Picture = ({ imgSrc, webpImgSrc, imgAlt }) => {
  return (
    <picture>
      <source srcSet={webpImgSrc} type="image/webp" />
      <img src={imgSrc} type="image/png" alt={imgAlt} loading="lazy" />
  </picture>
  )
}
export default Picture