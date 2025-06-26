import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { useRecommendation } from "../Context";
import type { Recommendation as RecommendationType } from "../../Types";
import { comma } from "../../assets/Images";

const RecommendationComponent = () => {
  const recommendations = useRecommendation();

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860846/recommendation_y3wtfo.webp")',
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <img src={comma} alt="comma" className="w-10 mx-auto mb-6" />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={30}
          grabCursor
        >
          {recommendations?.map((el: RecommendationType) => (
            <SwiperSlide key={el.id}>
              <div className="flex flex-col items-center text-white">
                <p className="text-sm md:text-base leading-relaxed tracking-wide mb-4">
                  {el.message}
                </p>
                <h4 className="text-sm font-light border-t border-blue-300 pt-3">
                  {el.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendationComponent;
