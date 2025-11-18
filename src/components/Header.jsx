// src/components/Header.jsx
import React, { useEffect, useState } from "react";
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

export default function Header({ lang = "en", toggleLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  const headerClassName = [
    "header-fixed",
    isScrolled ? "nav-scrolled" : "",
    isMounted ? "header-enter" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={headerClassName}
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
      }}
    >
      <div
        className="ds-header-inner"
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0.8rem 1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "rem", 
        }}
      >
        {/* Logo / Brand */}
        <div
          className="ds-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <div
            className="logo-badge"
            style={{
              width: 40,
              height: 40,
              borderRadius: "999px",
              background:
                "conic-gradient(from 180deg at 50% 50%, #22d3ee, #0ea5a4, #a5f3fc, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: 20,
              boxShadow: "0 10px 26px rgba(15,23,42,0.18)",
            }}
          >
            🦷
          </div>

          <div style={{ lineHeight: 1.2 }}>
            <div
              className="brand-gradient"
              style={{
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {CLINIC_INFO.name}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "#6b7280",
                fontWeight: 400,
                maxWidth: 260,
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {CLINIC_INFO.tagline}
            </div>
          </div>
        </div>

        {/* Nav + CTA */}
        <nav
          className="ds-nav"
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.8rem", // ⬅ เพิ่มช่องไฟระหว่างเมนูกับโซนปุ่ม
            fontSize: 14,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: "1.1rem", // ⬅ เมนูแต่ละอันห่างขึ้น
              margin: 0,
              padding: 0,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="nav-link-modern nav-link-animate"
                  style={{
                    textDecoration: "none",
                    padding: "0.35rem 0.7rem", // ⬅ เพิ่ม padding รอบตัวหนังสือ
                    borderRadius: 999,
                    letterSpacing: "0.03em", // ⬅ ตัวอักษรห่างกันขึ้นนิดหน่อย
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA area */}
          <div
            className="ds-nav-cta"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginLeft: "0.25rem",
            }}
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="btn btn-pill text-white header-cta header-cta-anim hero-cta-main"
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "0.4rem 1.1rem",
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
