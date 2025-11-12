import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";

export default function Header() {
  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "services", "team", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      className={`header-fixed ${scrolled ? "nav-scrolled" : ""}`}
      style={{ transition: "box-shadow .3s ease, background .3s ease" }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold brand-gradient">
          <span className="icon-ring me-2">🦷</span> Dental Smile Pattaya
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" className="border-0" />

        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#services"
              className={`nav-link-modern ${active === "services" ? "active" : ""}`}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#team"
              className={`nav-link-modern ${active === "team" ? "active" : ""}`}
            >
              Staff
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={`nav-link-modern ${active === "contact" ? "active" : ""}`}
            >
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button variant="outline-primary" className="btn-pill" href="#contact">
              Map
            </Button>
            <Button
              className="btn-pill header-cta text-white"
              href={`tel:${tel}`}
              aria-label={`Call ${CLINIC.phone}`}
            >
              Call {CLINIC.phone}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
