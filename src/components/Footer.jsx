import React from "react";
import { Container } from "react-bootstrap";
import { CLINIC } from "../constants/clinic";

export default function Footer() {
  return (
    <footer
      className="text-white position-relative"
      style={{
        background: "linear-gradient(180deg, #03202b 0%, #001519 100%)",
        overflow: "hidden",
      }}
    >
      {/* wave ด้านบน */}
      <div
        className="wave-top"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 120%, #0ea5a4 40%, transparent 60%)",
          opacity: 0.12,
        }}
      />

      <Container className="py-5 text-center small position-relative z-2">
        <h5 className="fw-bold mb-3 grad-text">Dental Smile Pattaya</h5>
        <p className="mb-2 text-white-50">{CLINIC.address}</p>

        <p className="mb-2 text-white-50">
          โทร:{" "}
          <a
            className="footer-link"
            href={`tel:${(CLINIC.phoneHref || CLINIC.phone).replace(/\s|-/g, "")}`}
          >
            {CLINIC.phone}
          </a>{" "}
          · อีเมล:{" "}
          <a className="footer-link" href={`mailto:${CLINIC.email}`}>
            {CLINIC.email}
          </a>
        </p>

        <div className="opacity-75 mt-4 pt-3 border-top border-white-10">
          © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
