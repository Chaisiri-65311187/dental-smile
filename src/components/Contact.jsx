import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  useReveal();
  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");

  return (
    <section id="contact" className="section-pad">
      <Container>
        <div className="text-center mb-4 reveal">
          <div className="icon-ring mx-auto mb-2">📍</div>
          <h2 className="fw-bold text-ink">ติดต่อเรา / นัดหมาย</h2>
          <p className="text-ink-2">เปิดบริการทุกวัน 09:00–19:00 น.</p>
        </div>
        <Row className="g-4 reveal-stagger">
          <Col md={6}>
            <Card className="glass card-soft h-100">
              <Card.Body>
                <h5 className="fw-semibold text-ink">คลินิก</h5>
                <p className="text-ink-2 mb-2">{CLINIC.address}</p>
                <p className="mb-2">
                  โทร: <a href={`tel:${tel}`}>{CLINIC.phone}</a>
                </p>
                <p className="mb-4">
                  อีเมล: <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                </p>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                  <iframe src={CLINIC.map.embed} title="Map" loading="lazy" allowFullScreen />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="glass card-soft h-100">
              <Card.Body>
                <h5 className="fw-semibold text-ink">นัดหมาย / สอบถาม</h5>
                <Form className="small" onSubmit={(e)=>e.preventDefault()}>
                  <Row className="g-2">
                    <Col sm={6}><Form.Label>ชื่อ</Form.Label><Form.Control placeholder="ชื่อ - นามสกุล" /></Col>
                    <Col sm={6}><Form.Label>โทรศัพท์</Form.Label><Form.Control placeholder="09x-xxx-xxxx" /></Col>
                    <Col sm={6}><Form.Label>อีเมล</Form.Label><Form.Control type="email" placeholder="you@example.com" /></Col>
                    <Col sm={6}><Form.Label>วันที่สะดวก</Form.Label><Form.Control type="date" /></Col>
                    <Col xs={12}><Form.Label>ข้อความ</Form.Label><Form.Control as="textarea" rows={4} placeholder="อยากทำบริการอะไร / อาการที่กังวล" /></Col>
                  </Row>
                  <div className="d-flex gap-2 mt-3">
                    <Button type="submit" variant="primary" className="btn-pill">ส่งคำขอ</Button>
                    <Button variant="outline-primary" className="btn-pill" href={`tel:${tel}`}>โทรทันที</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
