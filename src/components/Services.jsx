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

  const items =
    CLINIC && Array.isArray(CLINIC.services) && CLINIC.services.length > 0
      ? CLINIC.services
      : FALLBACK;

  return (
    <section
      id="services"
      className="section-pad section-fade"
      style={{
        background:
          "radial-gradient(circle at 80% 0%, rgba(14,165,164,.08), transparent 70%), linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)",
      }}
    >
      <Container>
        {/* ===== หัวเรื่องหลัก ===== */}
        <div className="text-center mb-5 reveal show">
          <h2 className="fw-bold display-6 text-ink mb-2">
            บริการของเรา
          </h2>
          <div
            style={{
              width: "90px",
              height: "4px",
              borderRadius: "3px",
              background:
                "linear-gradient(90deg, #0ea5a4, #22d3ee, #0ea5a4)",
              margin: "0 auto 1.2rem",
              boxShadow: "0 0 10px rgba(14,165,164,.4)",
            }}
          />
          <p className="text-ink-2 fs-5">
            คลินิกทันตกรรมครบวงจรในพัทยา  
            <br className="d-none d-md-block" />
            ดูแลโดยทีมทันตแพทย์เฉพาะทาง พร้อมเทคโนโลยีที่ทันสมัย
          </p>
        </div>

        {/* ===== การ์ดบริการ ===== */}
        <Row className="g-4 reveal-stagger">
          {items.map((s, i) => {
            const title = s.title || s.name || "Service";
            return (
              <Col md={4} sm={6} xs={12} key={s.key || `${title}-${i}`}>
                <Card
                  className="h-100 border-0 text-center p-4 shadow-sm hover-lift service-card"
                  style={{
                    borderRadius: 24,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  {/* วงกลมไอคอน */}
                  <div
                    className="mx-auto mb-4 service-icon"
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, rgba(14,165,164,.18), rgba(34,211,238,.25))",
                      color: "#0ea5a4",
                      fontSize: "2.6rem",
                      boxShadow: "0 6px 20px rgba(14,165,164,.15)",
                      transition: "transform .3s ease, box-shadow .3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ICONS[i % ICONS.length]}
                  </div>

                  <Card.Body className="p-0">
                    <Card.Title className="fw-semibold fs-5 mb-2 text-ink">
                      {title}
                    </Card.Title>
                    <Card.Text className="text-ink-2 small mb-0">
                      การรักษาโดยทันตแพทย์เฉพาะทาง เน้นผลลัพธ์ที่สวยงาม
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
