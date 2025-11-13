// src/components/Facility.jsx
import React from "react";

const FEATURES = [
  {
    title: "Digital X-ray & imaging",
    body: "Low-radiation digital X-ray system for precise diagnosis and treatment planning.",
  },
  {
    title: "Sterilization protocol",
    body: "Autoclave and strict sterilization workflow following international infection-control standards.",
  },
  {
    title: "Implant surgery room",
    body: "Dedicated clean room for implant surgery with surgical light and monitoring.",
  },
  {
    title: "Comfortable treatment chairs",
    body: "Ergonomic dental chairs with in-chair entertainment for long sessions.",
  },
  {
    title: "Multilingual front desk",
    body: "English-speaking staff helping with appointment, hotel, and transport advice.",
  },
];

export default function Facility() {
  return (
    <section
      id="facility"
      style={{
        background: "radial-gradient(circle at top, #020617, #020617 55%)",
        color: "#e5e7eb",
        padding: "3.5rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ maxWidth: 640, marginBottom: "1.8rem" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#f9fafb",
            }}
          >
            Clinic facility
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#9ca3af",
            }}
          >
            Designed for both local and international patients: clean, modern
            and efficient.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "1.4rem",
          }}
        >
          {FEATURES.map((f) => (
            <article
              key={f.title}
              style={{
                borderRadius: 20,
                padding: "1rem 1rem 0.9rem",
                background:
                  "radial-gradient(circle at top left, #0f172a, #020617)",
                border: "1px solid rgba(51,65,85,0.9)",
                boxShadow: "0 16px 36px rgba(15,23,42,0.85)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#64748b",
                  marginBottom: 6,
                }}
              >
                Facility
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#f9fafb",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  color: "#9ca3af",
                }}
              >
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
