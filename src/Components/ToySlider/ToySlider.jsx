import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Slide from "../Slide/Slide";
const ToySlider = ({ toys }) => {

const filteredToys = toys.filter(toy => toy.slider === true);


  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper bg-base-300 h-[650px]"
    >
          {filteredToys.map(item => <SwiperSlide key={item.id}><Slide item={item}></Slide></SwiperSlide>)}
    </Swiper>
  );
};

export default ToySlider;
