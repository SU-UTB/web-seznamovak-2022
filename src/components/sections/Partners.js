import PartnerList from '../organisms/PartnerList'
import { utb, facultyList, unionList, partnerList } from '../../data/partnerList'
import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'

const Partners = () => {

  return (
    <section id="partneri">
      <SectionTitle title="Partneři" />
      <Link>
        <img src={utb.pic} alt={utb.picAlt} loading="lazy" />
      </Link>
      <PartnerList items={facultyList} />
      <PartnerList items={unionList} />
      <PartnerList items={partnerList} />
    </section>
  )
}

export default Partners