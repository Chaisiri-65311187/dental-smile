import React from "react";
import { Container } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";

export default function Footer() {
  return (
    <footer className="mt-5 text-white" style={{
      background:"linear-gradient(180deg, #0b1c2e, #02222a 60%, #001a1f)"
    }}>
      <div className="wave-top" />
      <Container className="py-5 text-center small">
        <h5 className="fw-bold mb-3">Dental Smile Pattaya</h5>
        <p className="mb-2 opacity-90">{CLINIC.address}</p>
        <p className="mb-2 opacity-90">
          โทร: <a className="text-white text-decoration-underline" href={`tel:${(CLINIC.phoneHref||CLINIC.phone).replace(/\s|-/g,"")}`}>{CLINIC.phone}</a> ·
          อีเมล: <a className="text-white text-decoration-underline" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
        </p>
        <p className="mb-0 opacity-75">© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
