import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function TopBrands() {
  const swiperParams = {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    modules: [Autoplay],
    effect: "slide",
    speed: 800,
    grabCursor: true,

    breakpoints: {
      425: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 20,
      },
    },
  };

  const brands = [
    {
      brandLogo: (
        <i className="bx bxl-meta h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-dribbble h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-discord h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-microsoft h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-trello h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-tux h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-airbnb h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
    {
      brandLogo: (
        <i className="bx bxl-pocket h1 p-4 btn-gray rounded-circle me-3 top-brand-icon"></i>
      ),
    },
  ];
  return (
    <div className="ps-3 ps-lg-5 my-5 ">
      <Swiper {...swiperParams}>
        {brands.map((e) => (
          <SwiperSlide key={e} className=" py-6 ">
            <div key={e}>{e.brandLogo}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopBrands;
