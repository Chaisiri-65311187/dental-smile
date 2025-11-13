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
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, #1e40af 0, #020617 45%, #020617 100%)",
        color: "#e5e7eb",
      }}
    >
      {/* glow circles */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "0",
          opacity: 0.45,
          backgroundImage:
            "radial-gradient(circle at 10% 0, rgba(59,130,246,0.8), transparent 55%), radial-gradient(circle at 90% 20%, rgba(236,72,153,0.65), transparent 55%)",
          pointerEvents: "none",
        }}
      />
      {/* grid pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "0",
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "4.5rem 1.25rem 3.5rem",
          display: "grid",
          gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
          gap: "3.5rem",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.25rem 0.75rem",
              borderRadius: 999,
              background: "rgba(15,23,42,0.7)",
              border: "1px solid rgba(148,163,184,0.3)",
              fontSize: 12,
              marginBottom: "0.9rem",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, #4ade80 0, #22c55e 40%, #166534 100%)",
                boxShadow: "0 0 12px #22c55e",
              }}
            />
            <span>Honest dentist in Pattaya • 18+ years</span>
          </div>

          <h1
            style={{
              fontSize: "2.6rem",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              margin: "0 0 1rem",
              color: "#f9fafb",
            }}
          >
            Dental care that{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #38bdf8, #6366f1, #a855f7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              feels like a startup
            </span>{" "}
            — clean, smart and transparent.
          </h1>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#cbd5f5",
              maxWidth: 520,
              marginBottom: "1.4rem",
            }}
          >
            {CLINIC_INFO.intro.longEn}
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 1.6rem",
              display: "grid",
              gridTemplateColumns: "repeat(2,minmax(0,1fr))",
              gap: "0.5rem 1.25rem",
              fontSize: 13,
              color: "#e5e7eb",
            }}
          >
            {CLINIC_INFO.mainServiceAreas.slice(0, 4).map((item) => (
              <li
                key={item}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <span
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 999,
                    background:
                      "radial-gradient(circle, #22c55e, #16a34a 60%, #166534)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                  }}
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <a
              href="#contact"
              style={{
                padding: "0.65rem 1.4rem",
                borderRadius: 999,
                background:
                  "linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)",
                color: "#f9fafb",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 16px 40px rgba(37,99,235,0.65)",
              }}
            >
              Book an appointment
            </a>

            <a
              href={phoneHref}
              style={{
                padding: "0.6rem 1.1rem",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.5)",
                background: "rgba(15,23,42,0.85)",
                color: "#e5e7eb",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
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
              style={{
                marginTop: "1rem",
                fontSize: 12,
                color: "#a5b4fc",
              }}
            >
              <strong>New office:</strong> {CLINIC_INFO.movedNotice.en}
            </p>
          )}
        </div>

        {/* Right visual */}
        <div
          style={{
            position: "relative",
            justifySelf: "stretch",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              aspectRatio: "4 / 5",
              borderRadius: 32,
              overflow: "hidden",
              background:
                "radial-gradient(circle at top, rgba(59,130,246,0.35), rgba(15,23,42,1))",
              boxShadow:
                "0 30px 80px rgba(15,23,42,0.9), 0 0 0 1px rgba(148,163,184,0.35)",
            }}
          >
            <img
              src={CLINIC_INFO.images.hero}
              alt="Dental Smile Pattaya"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "screen",
              }}
            />
            {/* floating card */}
            <div
              style={{
                position: "absolute",
                left: "8%",
                bottom: "10%",
                right: "8%",
                padding: "0.7rem 0.9rem",
                borderRadius: 18,
                background: "rgba(15,23,42,0.92)",
                border: "1px solid rgba(148,163,184,0.55)",
                color: "#e5e7eb",
                fontSize: 12,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#9ca3af",
                    marginBottom: 2,
                  }}
                >
                  Clinic status
                </div>
                <div style={{ fontWeight: 600 }}>Open today 09:00–19:00</div>
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, #22c55e, #16a34a 60%, #166534)",
                  boxShadow: "0 0 20px rgba(22,163,74,0.9)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
