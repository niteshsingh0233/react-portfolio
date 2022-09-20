import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Ritesh Singh",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil undesed velit rem eaque illum error, dicta ipsa doloremque iusto culpamaxime necessitatibus totam alias in atque veniam assumenda saepe",
    },
    {
      avatar: AVTR2,
      name: "Kirti Singh",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil undesed velit rem eaque illum error, dicta ipsa doloremque iusto culpamaxime necessitatibus totam alias in atque veniam assumenda saepe",
    },
    {
      avatar: AVTR3,
      name: "Advika Singh",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil undesed velit rem eaque illum error, dicta ipsa doloremque iusto culpamaxime necessitatibus totam alias in atque veniam assumenda saepe",
    },
    {
      avatar: AVTR4,
      name: "Praveen Pradhan",
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil undesed velit rem eaque illum error, dicta ipsa doloremque iusto culpamaxime necessitatibus totam alias in atque veniam assumenda saepe",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((data) => {
          return (
            <SwiperSlide key={data.index} className="testimonial">
              <div className="client__avatar">
                <img src={data.avatar} />
              </div>
              <h5 className="client__name">{data.name}</h5>
              <small className="client__review">{data.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
