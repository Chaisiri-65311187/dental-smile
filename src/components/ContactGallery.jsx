// src/components/ContactGallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/contact-gallery.css";

export default function ContactGallery() {
  const images = [
    "/review01.jpg",
    "/review02.jpg",
    "/review03.jpg",
    "/review04.jpg",
    "/review06.jpg",
    "/review07.jpg",
  ];

  return (
    <div className="contact-gallery">
      <h3 className="gallery-title">Patient reviews</h3>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          768: { slidesPerView: 2.1 },
          1200: { slidesPerView: 3.1 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="contact-gallery-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="gallery-card">
              <img src={src} alt={`Patient review ${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
