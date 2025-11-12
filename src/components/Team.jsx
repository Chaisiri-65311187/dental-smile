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
    <section id="team" className="section-pad bg-light">
      <Container>
        <div className="text-center mb-4 reveal">
          <div className="icon-ring mx-auto mb-2">👩‍⚕️</div>
          <h2 className="fw-bold text-ink">ทีมทันตแพทย์ของเรา</h2>
          <p className="text-ink-2">ประสบการณ์สูง ดูแลอย่างอ่อนโยน มุ่งผลลัพธ์ระยะยาว</p>
        </div>
        <Row className="g-4 reveal-stagger">
          {STAFF.slice(0,6).map((d,i)=>(
            <Col md={4} sm={6} key={i}>
              <Card className="card-soft h-100 hover-lift">
                <div className="ratio ratio-4x3 img-zoom bg-light">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="object-fit-cover"
                    onError={(e)=>{ e.currentTarget.src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="mb-1 text-ink">{d.name}</Card.Title>
                  <Card.Text className="text-ink-2 small">{d.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4 reveal">
          <Button variant="outline-primary" className="btn-pill" href={STAFF_URL} target="_blank" rel="noreferrer">
            ดูทีมแพทย์ทั้งหมด
          </Button>
        </div>
      </Container>
    </section>
  );
}
