import SectionTitle from '../atoms/SectionTitle'
import instructors from '../../data/instructorsList'
import { Swiper, SwiperSlide } from 'swiper/react'

const Instructors = () => {
  return (
    <section id="instruktori">
      <SectionTitle title="A tito frajeři tě budou celým seznamovákem provázet." />
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        navigation={true}
        loop={true}
      >
        {
          instructors.map(instructor => (
              <SwiperSlide key={instructor.pic}>
                <img src={instructor.pic} alt={instructor.name} />
                <h5>{instructor.name}</h5>
              </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Instructors