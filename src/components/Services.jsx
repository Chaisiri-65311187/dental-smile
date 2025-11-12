// src/components/Services.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

/* ไอคอนสำหรับแต่ละการ์ด */
const ICONS = ["🦷","😁","🪥","👩‍⚕️","✨","🦾","🛰️","💎","🌿"];

/* Fallback ถ้า CLINIC.services ไม่มี/ว่าง/ไม่มี title */
const FALLBACK = [
  { key: "general",      title: "General Dentistry" },
  { key: "periodontics", title: "Periodontics" },
  { key: "restoration",  title: "Dental Restoration" },
  { key: "veneer",       title: "Veneer" },
  { key: "implant",      title: "Implant" },
  { key: "allon4",       title: "All-on-4 Implants" },
];

export default function Services() {
  useReveal();

  // ใช้ข้อมูลจริงถ้ามี ไม่งั้นใช้ fallback
  const items = (CLINIC && Array.isArray(CLINIC.services) && CLINIC.services.length > 0)
    ? CLINIC.services
    : FALLBACK;

  return (
    <section id="services" className="section-pad bg-light">
      <Container>
        {/* หัวเรื่อง (บังคับสีให้เข้ม มองเห็นแน่) */}
        <div className="text-center mb-5 reveal">
          <div className="icon-ring mx-auto mb-3">🦷</div>
          <h2 className="fw-bold text-dark">บริการของเรา</h2>
          <p className="text-secondary">
            ครอบคลุมทั้งการตรวจรักษาทั่วไป ฟื้นฟู และความสวยงามด้วยเทคโนโลยีทันสมัย
          </p>
        </div>

        <Row className="g-4 reveal-stagger">
          {items.map((s, i) => {
            const title = s.title || s.name || "Service";
            return (
              <Col md={4} sm={6} xs={12} key={s.key || `${title}-${i}`}>
                <Card
                  className="h-100 border-0 text-center p-4 shadow-sm hover-lift"
                  style={{ borderRadius: 20, background: "linear-gradient(180deg,#fff,rgba(255,255,255,.92))" }}
                >
                  {/* วงกลมไอคอน */}
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 72, height: 72, borderRadius: "50%",
                      background: "linear-gradient(135deg, rgba(14,165,164,.15), rgba(34,211,238,.25))",
                      color: "#0ea5a4", fontSize: "2rem",
                      boxShadow: "0 4px 16px rgba(14,165,164,.15)", transition: "transform .3s ease",
                    }}
                  >
                    {ICONS[i % ICONS.length]}
                  </div>

                  <Card.Body className="p-0">
                    {/* หัวข้อการ์ด (บังคับสีเข้ม) */}
                    <Card.Title className="fw-semibold fs-5 mb-2 text-dark">
                      {title}
                    </Card.Title>
                    <Card.Text className="text-secondary small mb-0">
                      การรักษาโดยทันตแพทย์เฉพาะทาง เน้นผลลัพธ์สวยงามและใช้งานได้ยาวนาน
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
