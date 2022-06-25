import SectionTitle from '../atoms/SectionTitle'
import instructors from '../../data/instructorsList'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import '../../scss/Instructors.scss'

const Instructors = () => {
  return (
    <section id="instruktori" className="bg-browny">
      <div className="lg:w-3/5 text-left mx-auto py-16 px-4">
        <SectionTitle title="A tito frajeři tě budou celým seznamovákem provázet." color="#FDECBE" />
      </div>
      <div className="mx-4">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        slidesPerGroup={1}
        navigation={true}
        loop={true}
        loopAdditionalSlides={true}
        centeredSlides={true}
        modules={[Navigation]}
        className="mx-8"
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
            slidesPerGroup: 2
          },

          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
            slidesPerGroup: 5
          }
        }}
      >
        {
          instructors.map(instructor => (
              <SwiperSlide key={instructor.pic}>
                <img src={instructor.pic} alt={instructor.name} />
                <h5 className="font-bold text-xl md:text-3xl xl:text-4xl text-beige my-4">{instructor.name}</h5>
              </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Instructors