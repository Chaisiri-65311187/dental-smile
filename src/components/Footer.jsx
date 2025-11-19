// src/components/Footer.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const mailHref = `mailto:${CLINIC_INFO.email || ""}`;

  return (
    <footer className="footer-section border-top border-white-10 py-3 py-md-4">
      <div className="container">
        <div className="row g-3 align-items-center">
          {/* LEFT */}
          <div className="col-md-6">
            <div className="d-flex flex-column gap-1 small text-ink-3">
              <span className="fw-semibold text-ink">
                {CLINIC_INFO.name}
              </span>
              <span>{CLINIC_INFO.addressMain}</span>
              <span>
                Tel:{" "}
                <a href={phoneHref} className="link-secondary">
                  {CLINIC_INFO.phone}
                </a>
              </span>
              <span>
                E-mail:{" "}
                <a href={mailHref} className="link-secondary">
                  {CLINIC_INFO.email}
                </a>
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 d-flex flex-column align-items-md-end gap-2">
            <div className="tiny text-ink-3">
              &copy; {year} {CLINIC_INFO.name}. All rights reserved.
            </div>
            <div className="d-flex align-items-center gap-2">
              {CLINIC_INFO.links.facebook && (
                <a
                  href={CLINIC_INFO.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                  aria-label="Facebook"
                >
                  f
                </a>
              )}
              {CLINIC_INFO.links.map && (
                <a
                  href={CLINIC_INFO.links.map}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                  aria-label="Map"
                >
                  📍
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
