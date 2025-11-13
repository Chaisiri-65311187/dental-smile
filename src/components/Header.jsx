// src/components/Header.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";

const NAV_ITEMS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Doctors" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#facility", label: "Facility" },
  { href: "#contact", label: "Contact" },
  { href: "#map", label: "Map" },
];

export default function Header() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  return (
    <header
      className="ds-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        background:
          "linear-gradient(90deg, rgba(15,23,42,0.9), rgba(30,64,175,0.9))",
        borderBottom: "1px solid rgba(148,163,184,0.25)",
      }}
    >
      <div
        className="ds-header-inner"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0.6rem 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo / Brand */}
        <div
          className="ds-logo"
          style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "999px",
              background:
                "conic-gradient(from 180deg at 50% 50%, #38bdf8, #6366f1, #a855f7, #38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: 18,
              boxShadow: "0 8px 22px rgba(15,23,42,0.45)",
            }}
          >
            DS
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#e5e7eb",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              {CLINIC_INFO.name}
            </div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>
              {CLINIC_INFO.tagline}
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav
          className="ds-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            fontSize: 14,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  style={{
                    color: "#cbd5f5",
                    textDecoration: "none",
                    fontWeight: 500,
                    position: "relative",
                  }}
                >
                  <span className="ds-nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div
            className="ds-nav-cta"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <a
              href={phoneHref}
              style={{
                fontSize: 13,
                color: "#bfdbfe",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span role="img" aria-label="phone">
                📞
              </span>
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "0.4rem 0.9rem",
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)",
                color: "#f9fafb",
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(30,64,175,0.7)",
                whiteSpace: "nowrap",
              }}
            >
              Book appointment
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
