import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Carousel() {
  const sliders = [
    {
      src: "https://res.cloudinary.com/dknozjmje/image/upload/v1707039520/Credot/static/ljfkku0eauukm6yn18nb.png",
      alt: "image1",
    },
    {
      src: "https://res.cloudinary.com/dknozjmje/image/upload/v1707039520/Credot/static/ljfkku0eauukm6yn18nb.png",
      alt: "image2",
    },
    {
      src: "https://res.cloudinary.com/dknozjmje/image/upload/v1707039520/Credot/static/ljfkku0eauukm6yn18nb.png",
      alt: "image3",
    },
    {
      src: "https://res.cloudinary.com/dknozjmje/image/upload/v1707039520/Credot/static/ljfkku0eauukm6yn18nb.png",
      alt: "image4",
    },
  ];
  return (
    <>
      <Swiper
        style={{ "--swiper-navigation-size": "30px" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {sliders.map((slide) => {
          return (
            <SwiperSlide key={slide?.alt}>
              <img className="img-fluid " src={slide.src} alt={slide?.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Carousel;
