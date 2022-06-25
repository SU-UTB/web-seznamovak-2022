import ContactTitle from '../atoms/ContactTitle'
import Link from '../atoms/Link'

const ContactSocials = ({ title, desc, fbLink, fbImg, igLink, igImg }) => {
  return (
    <div className="socials lg:mt-auto">
      <div className="text-center">
        <ContactTitle title={title} />
      </div>
      <p className="mb-4">{desc}</p>
      <div className="img-links flex justify-center gap-x-6 lg:gap-x-0 mx-auto lg:justify-between lg:max-w-xs mb-12">
        <Link linkTo={fbLink}>
          <img className="w-32 h-auto lg:px-2 xl:px-0" src={fbImg} alt={`facebook: ${title}`} />
        </Link>
        <Link linkTo={igLink}>
          <img className="w-32 h-auto lg:px-2 xl:px-0" src={igImg} alt={`instagram: ${title}`} />
        </Link>
      </div>
    </div>
  )
}

export default ContactSocials