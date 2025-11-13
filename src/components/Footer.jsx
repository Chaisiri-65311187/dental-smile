// src/components/Footer.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  return (
    <footer
      style={{
        background: "#020617",
        borderTop: "1px solid rgba(30,64,175,0.6)",
        padding: "1.5rem 1.25rem 1.3rem",
        color: "#9ca3af",
        fontSize: 12,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.8rem",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: 600,
              color: "#e5e7eb",
            }}
          >
            {CLINIC_INFO.name}
          </div>
          <div>{CLINIC_INFO.addressMain}</div>
          <div style={{ marginTop: 2 }}>
            Tel:{" "}
            <a
              href={phoneHref}
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              {CLINIC_INFO.phone}
            </a>{" "}
            · Email:{" "}
            <a
              href={`mailto:${CLINIC_INFO.email}`}
              style={{ color: "#a5b4fc", textDecoration: "none" }}
            >
              {CLINIC_INFO.email}
            </a>
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div>© {year} Dental Smile Pattaya.</div>
          <div>Design prototype by {`<your name>`}.</div>
        </div>
      </div>
    </footer>
  );
}
