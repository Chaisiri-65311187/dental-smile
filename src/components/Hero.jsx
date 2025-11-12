// src/components/Hero.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  useReveal();

  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");
  const heroUrl = "/d1.jpg"; // รูปใน public

  return (
    <section id="hero" className="hero-wrap">
      {/* พื้นหลังหลัก */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url("${heroUrl}")` }}
        role="img"
        aria-label="Dental Smile Pattaya Clinic"
      />
      {/* เลเยอร์เบลอจริง */}
      <div
        className="hero-blur-layer"
        style={{ backgroundImage: `url("${heroUrl}")` }}
        aria-hidden
      />
      {/* เกรเดียนต์ทับให้อ่านง่าย */}
      <div className="hero-overlay" aria-hidden />

      <Container className="position-relative z-3">
        {/* กล่องกระจกอ่านง่ายทุกเบราว์เซอร์ */}
        <div className="hero-glass mx-auto reveal-stagger text-center text-white">
          <h1 className="fw-bold display-5 mb-3">
            ยิ้มสวย สุขภาพดี{" "}
            <span className="brand-gradient">ด้วยการดูแลที่อ่อนโยน</span>
          </h1>

          <p className="lead text-white-50 mb-4">
            คลินิกทันตกรรมครบวงจรในพัทยา ทีมทันตแพทย์เฉพาะทาง
            และมาตรฐานปลอดเชื้อระดับสากล
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap mb-3">
            <Button
              variant="light"
              size="lg"
              className="btn-pill fw-semibold"
              href={`tel:${tel}`}
            >
              📞 โทร {CLINIC.phone}
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              className="btn-pill fw-semibold"
              href="#services"
            >
              ดูบริการ →
            </Button>
          </div>

          {/* ที่อยู่ / info ย้ายให้ห่างขึ้นเล็กน้อย */}
          <div className="text-white-50 small mb-3">{CLINIC.address}</div>

          {/* ชิปบริการ – ขาวสะอาด อ่านง่ายบนกล่องแก้ว */}
          <div className="d-flex justify-content-center gap-2 flex-wrap">
            {(CLINIC.services || []).slice(0, 6).map((s) => (
              <span
                key={s.key || s.title || s.name}
                className="badge bg-white text-ink-2 border rounded-pill"
              >
                {s.title || s.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
