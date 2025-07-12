import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import type { Recommendation as RecommendationType } from "../../Types";
import { comma } from "../../assets/Images";
import { useRecommendation } from "../../Hooks/useRecommendation";
import { UseLoading } from "../../Hooks/useLoading";

const RecommendationComponent = () => {
  const recommendations = useRecommendation();
  const Loading = UseLoading();

  return Loading.isLoadingRecommendation ? (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-24 "
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860846/recommendation_y3wtfo.webp")',
      }}
    >
      <div className="max-w-3xl mx-auto text-center animate-pulse">
        {/* عنصر نائب للأيقونة */}
        <div className="w-10 h-8 mx-auto mb-6 bg-gray-400/50 rounded-md"></div>

        <div className="flex flex-col items-center text-white">
          {/* عنصر نائب للرسالة */}
          <div className="h-4 bg-gray-400/50 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400/50 rounded w-4/5 mb-2"></div>
          <div className="h-4 bg-gray-400/50 rounded w-2/3 mb-4"></div>
          {/* عنصر نائب للاسم */}
          <div className="h-5 bg-gray-400/50 rounded w-1/4 pt-3"></div>
        </div>
      </div>
    </div>
  ) : (
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
