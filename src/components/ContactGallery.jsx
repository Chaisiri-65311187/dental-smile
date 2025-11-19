// src/components/ContactGallery.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/contact-gallery.css";

export default function ContactGallery() {
    // เปลี่ยน path รูปให้ตรงกับของโปรเจกต์คุณ
    const images = [
        "/public/review01.jpg",
        "/public/review02.jpg",
        "/public/review03.jpg",
        "/public/review04.jpg",
        "/public/review06.jpg",
        "/public/review07.jpg",
    ];

    return (
        <section className="contact-gallery-section fade-in-soft">
            <div className="container">
                <h3 className="gallery-title">Review</h3>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 3500,              // 3.5 วิ ต่อภาพ
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,  // เอาเมาส์ไปวางแล้วหยุดชั่วคราว
                    }}
                    spaceBetween={20}
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
                                <img src={src} alt={`Clinic view ${idx + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
