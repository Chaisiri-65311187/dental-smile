import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  useReveal();
  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");

  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%), radial-gradient(circle at 10% 0%, rgba(14,165,164,.08), transparent 60%)",
      }}
    >
      <Container>
        {/* ===== หัวเรื่อง ===== */}
        <div className="text-center mb-5 reveal show">
          <div className="icon-ring mx-auto mb-3">📍</div>
          <h2 className="fw-bold display-6 text-ink mb-2">ติดต่อเรา / นัดหมาย</h2>
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
          <p className="text-ink-2 fs-5">เปิดบริการทุกวัน 09:00 – 19:00 น.</p>
        </div>

        {/* ===== กล่องแผนที่ + ฟอร์ม ===== */}
        <Row className="g-4 reveal-stagger">
          {/* ---- แผนที่ ---- */}
          <Col md={6}>
            <Card
              className="contact-card h-100 text-start border-0"
              style={{
                borderRadius: 24,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.9), rgba(255,255,255,.85))",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Card.Body>
                <h5 className="fw-semibold text-ink mb-2">คลินิก</h5>
                <p className="text-ink-2 mb-1">{CLINIC.address}</p>
                <p className="mb-1">
                  โทร: <a href={`tel:${tel}`}>{CLINIC.phone}</a>
                </p>
                <p className="mb-4">
                  อีเมล: <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                </p>
                <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm border border-teal-100">
                  <iframe
                    src={CLINIC.map.embed}
                    title="Map"
                    loading="lazy"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* ---- ฟอร์มนัดหมาย ---- */}
          <Col md={6}>
            <Card
              className="contact-card h-100 border-0"
              style={{
                borderRadius: 24,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.85), rgba(255,255,255,.8))",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Card.Body>
                <h5 className="fw-semibold text-ink mb-3">นัดหมาย / สอบถาม</h5>
                <Form
                  className="small"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("✅ ส่งคำขอเรียบร้อยแล้ว ขอบคุณค่ะ");
                  }}
                >
                  <Row className="g-3">
                    <Col sm={6}>
                      <Form.Label>ชื่อ</Form.Label>
                      <Form.Control placeholder="ชื่อ - นามสกุล" />
                    </Col>
                    <Col sm={6}>
                      <Form.Label>โทรศัพท์</Form.Label>
                      <Form.Control placeholder="09x-xxx-xxxx" />
                    </Col>
                    <Col sm={6}>
                      <Form.Label>อีเมล</Form.Label>
                      <Form.Control type="email" placeholder="you@example.com" />
                    </Col>
                    <Col sm={6}>
                      <Form.Label>วันที่สะดวก</Form.Label>
                      <Form.Control type="date" />
                    </Col>
                    <Col xs={12}>
                      <Form.Label>ข้อความ</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="อยากทำบริการอะไร / อาการที่กังวล"
                      />
                    </Col>
                  </Row>

                  <div className="d-flex gap-2 mt-4">
                    <Button
                      type="submit"
                      className="btn-pill fw-semibold text-white"
                      style={{
                        background: "linear-gradient(90deg, #0ea5a4, #22d3ee)",
                        border: "none",
                      }}
                    >
                      ✉️ ส่งคำขอ
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="btn-pill fw-semibold"
                      href={`tel:${tel}`}
                    >
                      📞 โทรทันที
                    </Button>
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
