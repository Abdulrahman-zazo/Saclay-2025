import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import "./Recommendation.css";

import { comma } from "../../assets/Images";
import { useRecommendation } from "../Context";
import type { Recommendation } from "../../Types";

const RecommendationComponent = () => {
  const Recommendation = useRecommendation();
  // Recommendation_messages
  return (
    <div className="recommendation">
      <div className="recommendation-element">
        <img src={comma} alt="comma" />
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {Recommendation?.map((el: Recommendation) => (
            <SwiperSlide key={el.id}>
              <p>{el.message}</p>
              <h4>{el.name}</h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendationComponent;
