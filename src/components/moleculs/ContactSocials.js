import Link from '../atoms/Link'

const ContactSocials = ({ title, desc, fbLink, fbImg, igLink, igImg }) => {
  return (
    <div className="socials">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="img-links">
        <Link linkTo={fbLink}>
          <img src={fbImg} alt={`facebook: ${title}`} />
        </Link>
        <Link linkTo={igLink}>
          <img src={igImg} alt={`instagram: ${title}`} />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials