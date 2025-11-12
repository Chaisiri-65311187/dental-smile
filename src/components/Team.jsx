import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useReveal } from "../hooks/useReveal";

const STAFF = [
  { name: "Dr. Patcharin (Dr. Cherry)", role: "Prosthodontist & Implant", img: "/placeholders/doctor-cherry.jpg" },
  { name: "Dr. Pabhinvitch (Dr. Tob)", role: "Orthodontist", img: "/placeholders/doctor-tob.jpg" },
  { name: "Dr. Assawinee (Dr. Ae)", role: "Periodontist", img: "/placeholders/doctor-ae.jpg" },
  { name: "Dr. Surpun (Dr. Nung)", role: "Endodontist", img: "/placeholders/doctor-nung.jpg" },
  { name: "Dr. Woradet (Dr. Boy)", role: "Advanced General Dentistry", img: "/placeholders/doctor-boy.jpg" },
  { name: "Dr. Chaichan (Dr. Gui)", role: "Advanced General Dentistry", img: "/placeholders/doctor-gui.jpg" },
];

const STAFF_URL = "https://www.dentalsmilepattaya.com/staff.html";

export default function Team() {
  useReveal();

  return (
    <section
      id="team"
      className="section-pad"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%), radial-gradient(circle at 10% 0%, rgba(14,165,164,.08), transparent 60%)",
      }}
    >
      <Container>
        {/* ===== หัวเรื่องหลัก ===== */}
        <div className="text-center mb-5 reveal show">
          <div className="icon-ring mx-auto mb-3">👩‍⚕️</div>
          <h2 className="fw-bold display-6 text-ink mb-2">ทีมทันตแพทย์ของเรา</h2>
          <div
            style={{
              width: "90px",
              height: "4px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #0ea5a4, #22d3ee, #0ea5a4)",
              margin: "0 auto 1rem",
              boxShadow: "0 0 10px rgba(14,165,164,.4)",
            }}
          />
          <p className="text-ink-2 fs-5">
            ทีมทันตแพทย์เฉพาะทางมากประสบการณ์ ดูแลอย่างอ่อนโยน  
            พร้อมเทคโนโลยีการรักษาทันสมัย มุ่งเน้นผลลัพธ์ระยะยาว
          </p>
        </div>

        {/* ===== การ์ดทีมทันตแพทย์ ===== */}
        <Row className="g-4 reveal-stagger">
          {STAFF.slice(0, 6).map((d, i) => (
            <Col md={4} sm={6} xs={12} key={i}>
              <Card
                className="team-card h-100 text-center border-0"
                style={{
                  borderRadius: 24,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85))",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                {/* วงกลมภาพหมอ */}
                <div className="team-img-wrapper mx-auto mt-4">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="team-img"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop";
                    }}
                  />
                </div>

                <Card.Body className="pb-4">
                  <Card.Title className="fw-semibold text-ink mt-3 mb-1">{d.name}</Card.Title>
                  <Card.Text className="text-ink-2 small">{d.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 reveal">
          <Button
            variant="outline-primary"
            className="btn-pill px-4 fw-semibold"
            href={STAFF_URL}
            target="_blank"
            rel="noreferrer"
          >
            ดูทีมแพทย์ทั้งหมด →
          </Button>
        </div>
      </Container>
    </section>
  );
}
