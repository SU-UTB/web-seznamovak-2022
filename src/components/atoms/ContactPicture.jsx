const ContactPicture = ({ imgSrc, webpImgSrc, imgAlt }) => {
  return (
    <picture>
      <source srcSet={webpImgSrc} type="image/webp" />
      <img className="w-32 h-auto lg:px-2 xl:px-0" src={imgSrc} type="image/png" alt={imgAlt} loading="lazy" />
  </picture>
  )
}
export default ContactPicture