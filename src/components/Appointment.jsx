// src/components/Appointment.jsx
import React from "react";
import { Container, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";

export default function Appointment() {
  return (
    <section id="appointment" className="py-5 bg-light text-center">
      <Container>
        <h2 className="fw-bold mb-4 text-primary">นัดหมายกับทันตแพทย์</h2>
        <p className="text-muted mb-4">
          เปิดให้บริการทุกวัน ตั้งแต่เวลา <strong>09:00 – 19:00 น.</strong><br />
          สามารถโทรสอบถาม หรือนัดหมายล่วงหน้าได้เลย
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
          <Button
            variant="primary"
            size="lg"
            className="fw-semibold rounded-pill px-4 shadow-sm"
            href={`tel:${CLINIC.phoneHref}`}
          >
            📞 โทร {CLINIC.phone}
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            className="fw-semibold rounded-pill px-4"
            href={CLINIC.map.embed}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 เปิดแผนที่
          </Button>
        </div>

        <div className="mt-5 ratio ratio-16x9 rounded shadow-sm overflow-hidden">
          <iframe
            src={CLINIC.map.embed}
            allowFullScreen
            loading="lazy"
            title="Dental Smile Pattaya Map"
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
