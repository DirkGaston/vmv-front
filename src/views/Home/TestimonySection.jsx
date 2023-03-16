import cards from "../../utils";
import TestimonyCard from "../../components/Cards/TestimonyCard";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TestimonySection() {
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#be2ed6",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "10px",
        "--swiper-pagination-bullet-horizontal-gap": "10px",
        "--swiper-navigation-color": "black",
      }}
      modules={[Pagination, Navigation, A11y]}
      className="w-full lg:w-5/6 cursor-grab"
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={8}
      autoplay={{ delay: 8000 }}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        720: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 2.5,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={card.id} index={card.id}>
          <TestimonyCard card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TestimonySection;
