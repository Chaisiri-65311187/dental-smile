import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";

export default function Header() {
  const tel = (CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "");
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return ()=>window.removeEventListener("scroll", onScroll);
  },[]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      bg="white"
      className={`glass ${scrolled ? "nav-scrolled" : ""}`}
      style={{ transition:"box-shadow .3s ease, background .3s ease" }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold text-ink">
          <span className="icon-ring me-2">🦷</span> Dental Smile Pattaya
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="me-auto">
            <Nav.Link href="#services" className="text-ink-2">Services</Nav.Link>
            <Nav.Link href="#team" className="text-ink-2">Staff</Nav.Link>
            <Nav.Link href="#contact" className="text-ink-2">Contact</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button variant="outline-primary" className="btn-pill" href="#contact">Map</Button>
            <Button variant="primary" className="btn-pill" href={`tel:${tel}`}>Call {CLINIC.phone}</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
