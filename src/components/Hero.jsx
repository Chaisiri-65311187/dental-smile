import React from "react";
import { Container, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
    useReveal();
    const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");

    return (
        <section id="hero" className="hero-wrap">
            <div
                className="hero-bg"
                style={{
                    backgroundImage: `url("${CLINIC.images?.hero ?? "/d1.jpg"}")`,
                }}
            />
            <div className="hero-overlay" />
            <Container className="position-relative z-2 text-center">
                <div className="reveal">
                    <h1 className="fw-bold display-4 text-white mb-3">
                        ยิ้มสวย สุขภาพดี <span className="grad-text">ด้วยการดูแลที่อ่อนโยน</span>
                    </h1>
                    <p className="lead text-white-50 mb-4">
                        คลินิกทันตกรรมครบวงจรในพัทยา ทีมทันตแพทย์เฉพาะทาง และมาตรฐานปลอดเชื้อระดับสากล
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Button variant="light" size="lg" className="btn-pill fw-semibold" href={`tel:${tel}`}>📞 โทร {CLINIC.phone}</Button>
                        <Button variant="outline-light" size="lg" className="btn-pill fw-semibold" href="#services">ดูบริการ →</Button>
                    </div>
                    <div className="mt-4 text-white-50 small">{CLINIC.address}</div>
                    <div className="mt-4 d-flex justify-content-center gap-2 flex-wrap">
                        {CLINIC.services.slice(0, 5).map(s => (
                            <span key={s.key} className="badge bg-white text-ink-2 border rounded-pill">{s.title}</span>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
