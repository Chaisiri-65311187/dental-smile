import React from "react";
import { Container, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  useReveal();
  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");

  return (
    <section id="hero" className="hero-wrap">
        <div className="hero-blur-layer" />
      <div
        className="hero-bg"
        style={{ backgroundImage: `url("/d1.jpg")` }}
        role="img"
        aria-label="Dental Smile Pattaya Clinic"
      />
      <div className="hero-overlay" />

      <Container className="position-relative z-2 text-center text-white">
        <h1 className="fw-bold display-4 mb-3">
          ยิ้มสวย สุขภาพดี <span className="grad-text">ด้วยการดูแลที่อ่อนโยน</span>
        </h1>
        <p className="lead text-white-50 mb-4">
          คลินิกทันตกรรมครบวงจรในพัทยา ทีมทันตแพทย์เฉพาะทาง และมาตรฐานปลอดเชื้อระดับสากล
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="light" size="lg" className="btn-pill fw-semibold" href={`tel:${tel}`}>
            📞 โทร {CLINIC.phone}
          </Button>
          <Button variant="outline-light" size="lg" className="btn-pill fw-semibold" href="#services">
            ดูบริการ →
          </Button>
        </div>

        <div className="mt-4 text-white-50 small">{CLINIC.address}</div>
        <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
          {(CLINIC.services || []).slice(0, 5).map((s) => (
            <span key={s.key || s.title} className="badge bg-white text-ink-2 border rounded-pill">
              {s.title || s.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
