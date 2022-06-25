import PartnerList from '../organisms/PartnerList'
import { utb, facultyList, unionList, partnerList } from '../../data/partnerList'
import Link from '../atoms/Link'
import SectionTitle from '../atoms/SectionTitle'
import FacultyList from '../organisms/FacultyList'

const Partners = () => {

  return (
    <section id="partneri">
      <SectionTitle title="Partneři" />
      <FacultyList items={facultyList} />
      <div className="w-full px-6 lg:px-0 my-16 flex flex-col items-center gap-y-16">
        <Link linkTo={utb.link}>
          <img className="w-96 h-auto" src={utb.pic} alt={utb.picAlt} loading="lazy" />
        </Link>
        <PartnerList items={unionList} />
      </div>
      {/* <PartnerList items={partnerList} /> */}
    </section>
  )
}

export default Partners