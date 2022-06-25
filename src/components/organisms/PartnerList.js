import Link from '../atoms/Link'

const PartnerList = ({ items }) => {
  return (
    <div className="partner-list">
      {
        items.map(item => (
          <div key={item.link}>
            <Link linkTo={item.link}>
							<img src={item.pic} alt={item.picAlt} loading="lazy" />
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default PartnerList