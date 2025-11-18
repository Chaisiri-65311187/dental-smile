// src/components/Hero.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";

export default function Hero() {
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, #e0f2fe 0, #f9fafb 45%, #ffffff 100%)",
        color: "#0f172a",
      }}
    >
      {/* soft glow */}
      <div
        aria-hidden
        className="hero-glow"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.7,
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(45,212,191,0.4), transparent 55%), radial-gradient(circle at 90% 10%, rgba(56,189,248,0.45), transparent 55%)",
        }}
      />
      {/* subtle grid */}
      <div
        aria-hidden
        className="hero-grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          mixBlendMode: "soft-light",
          opacity: 0.6,
        }}
      />

      <div
        className="hero-inner"
        style={{
          position: "relative",
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "4.25rem 1.25rem 3.5rem",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left */}
          <div
            className="hero-left"
            style={{ flex: "1 1 320px", minWidth: 0 }}
          >
            {/* badge */}
            <div
              className="hero-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.3rem 0.8rem",
                borderRadius: 999,
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(148,163,184,0.4)",
                fontSize: 12,
                marginBottom: "1rem",
                boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, #22c55e 0, #16a34a 45%, #15803d 100%)",
                  boxShadow: "0 0 12px rgba(34,197,94,0.8)",
                }}
              />
              <span style={{ color: "#0f172a", fontWeight: 500 }}>
                dentist in Pattaya 
              </span>
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: "2.6rem",
                lineHeight: 1.1,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                margin: "0 0 1rem",
                color: "#020617",
              }}
            >
              Dental care that{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #0ea5e9, #14b8a6, #22c55e)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                feels modern
              </span>{" "}
              — clean, gentle, and transparent.
            </h1>

            <p
              className="hero-subtitle"
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                color: "#4b5563",
                maxWidth: 540,
                marginBottom: "1.4rem",
              }}
            >
              {CLINIC_INFO.intro.longEn}
            </p>

            <ul
              className="hero-list"
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 1.6rem",
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: "0.55rem 1.5rem",
                fontSize: 13,
                color: "#111827",
              }}
            >
              {CLINIC_INFO.mainServiceAreas.slice(0, 4).map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 999,
                      background:
                        "radial-gradient(circle, #22c55e, #16a34a 60%, #15803d)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: "#f9fafb",
                      boxShadow: "0 0 12px rgba(22,163,74,0.7)",
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="hero-cta-row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                alignItems: "center",
              }}
            >
              <a
                href="#contact"
                className="hero-cta-main"
                style={{
                  padding: "0.7rem 1.5rem",
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, #0ea5e9, #14b8a6, #22c55e)",
                  color: "#f9fafb",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 16px 40px rgba(8,47,73,0.35)",
                  border: "1px solid rgba(45,212,191,0.6)",
                }}
              >
                Book an appointment
              </a>

              <a
                href={phoneHref}
                className="hero-cta-phone"
                style={{
                  padding: "0.65rem 1.15rem",
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.7)",
                  background: "rgba(255,255,255,0.9)",
                  color: "#0f172a",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                }}
              >
                <span role="img" aria-label="phone">
                  📞
                </span>
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>

            {CLINIC_INFO.movedNotice && (
              <p
                className="hero-moved"
                style={{
                  marginTop: "1rem",
                  fontSize: 12,
                  color: "#0f766e",
                }}
              >
                <strong>New office:</strong> {CLINIC_INFO.movedNotice.en}
              </p>
            )}
          </div>

          {/* Right visual */}
          <div
            className="hero-right"
            style={{
              flex: "1 1 280px",
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="hero-image-wrapper"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 420,
                aspectRatio: "4 / 5",
                borderRadius: 28,
                overflow: "hidden",
                background:
                  "radial-gradient(circle at top, rgba(125,211,252,0.25), rgba(255,255,255,1))",
                boxShadow:
                  "0 26px 70px rgba(15,23,42,0.18), 0 0 0 1px rgba(148,163,184,0.35)",
              }}
            >
              <img
                src={CLINIC_INFO.images.hero}
                alt="Dental Smile Pattaya"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* floating card */}
              <div
                className="hero-floating-card"
                style={{
                  position: "absolute",
                  left: "8%",
                  right: "8%",
                  bottom: "8%",
                  padding: "0.75rem 1rem",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(148,163,184,0.6)",
                  color: "#0f172a",
                  fontSize: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.75rem",
                  boxShadow: "0 18px 40px rgba(15,23,42,0.18)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "#6b7280",
                      marginBottom: 3,
                    }}
                  >
                    Clinic status
                  </div>
                  <div style={{ fontWeight: 600 }}>
                    Open today 09:00–19:00
                  </div>
                </div>
                <div
                  className="hero-status-dot"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle, #22c55e, #16a34a 60%, #15803d)",
                    boxShadow: "0 0 20px rgba(22,163,74,0.8)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
