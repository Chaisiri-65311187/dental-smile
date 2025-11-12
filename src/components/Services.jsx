import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

/* ไอคอนแต่ละการ์ด */
const ICONS = ["🦷","😁","🪥","👩‍⚕️","✨","🦾","🛰️","💎","🌿"];

/* fallback ถ้า CLINIC ไม่มีข้อมูล */
const FALLBACK = [
  { key: "general", title: "General Dentistry" },
  { key: "periodontics", title: "Periodontics" },
  { key: "restoration", title: "Dental Restoration" },
  { key: "veneer", title: "Veneer" },
  { key: "implant", title: "Implant" },
  { key: "allon4", title: "All-on-4 Implants" },
];

export default function Services() {
  useReveal();
  const items = (CLINIC && Array.isArray(CLINIC.services) && CLINIC.services.length > 0)
    ? CLINIC.services
    : FALLBACK;

  return (
    <section
      id="services"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
      }}
    >
      <Container>
        {/* หัวเรื่องหลัก */}
        <div className="text-center mb-5 reveal show">
          <h2 className="fw-bold display-6 text-ink mb-2">
            บริการของเรา
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "3px",
              background:
                "linear-gradient(90deg, #0ea5a4, #22d3ee, #0ea5a4)",
              margin: "0 auto 1rem",
            }}
          />
          <p className="text-ink-2 fs-5">
            คลินิกทันตกรรมครบวงจรในพัทยา — ดูแลโดยทีมทันตแพทย์เฉพาะทาง  
            ครอบคลุมทั้งการรักษา ฟื้นฟู และเสริมความงามด้วยเทคโนโลยีทันสมัย
          </p>
        </div>

        {/* การ์ดบริการ */}
        <Row className="g-4 reveal-stagger">
          {items.map((s, i) => {
            const title = s.title || s.name || "Service";
            return (
              <Col md={4} sm={6} xs={12} key={s.key || `${title}-${i}`}>
                <Card
                  className="h-100 border-0 text-center p-4 shadow-sm hover-lift"
                  style={{
                    borderRadius: 20,
                    background:
                      "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.95) 100%)",
                  }}
                >
                  {/* วงกลมไอคอน */}
                  <div
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(14,165,164,.12), rgba(34,211,238,.2))",
                      color: "#0ea5a4",
                      fontSize: "2.4rem",
                      boxShadow: "0 4px 20px rgba(14,165,164,.15)",
                      transition: "transform .3s ease",
                    }}
                  >
                    {ICONS[i % ICONS.length]}
                  </div>

                  <Card.Body className="p-0">
                    <Card.Title className="fw-semibold fs-5 mb-2 text-ink">
                      {title}
                    </Card.Title>
                    <Card.Text className="text-ink-2 small mb-0">
                      การรักษาโดยทันตแพทย์เฉพาะทาง เน้นผลลัพธ์สวยงาม  
                      และการใช้งานที่ยั่งยืนในระยะยาว
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
