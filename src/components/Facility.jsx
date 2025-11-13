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

const ICONS = ["🩻", "🧼", "⚕️", "🪑", "🌐"];

export default function Facility() {
  return (
    <section
      id="facility"
      style={{
        background: "linear-gradient(to bottom, #f9fafb, #e0f2fe)",
        color: "#0f172a",
        padding: "3.2rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            maxWidth: 620,
            marginBottom: "1.9rem",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#020617",
            }}
          >
            Clinic facility
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            Designed for both local and international patients: clean, modern
            and efficient.
          </p>
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "1.2rem",
          }}
        >
          {FEATURES.map((f, idx) => (
            <article
              key={f.title}
              style={{
                borderRadius: 18,
                padding: "0.9rem 1rem 0.85rem",
                background: "rgba(255,255,255,0.98)",
                border: "1px solid rgba(148,163,184,0.55)",
                boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
                display: "flex",
                flexDirection: "row",
                gap: "0.75rem",
                alignItems: "flex-start",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, #e0f2fe 0, #bae6fd 50%, #7dd3fc 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  boxShadow: "0 6px 14px rgba(12,74,110,0.25)",
                }}
              >
                {ICONS[idx] || "🏥"}
              </div>

              {/* Text */}
              <div>
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#0ea5e9",
                    marginBottom: 4,
                  }}
                >
                  Facility
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#020617",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    marginTop: 5,
                    fontSize: 12,
                    color: "#6b7280",
                  }}
                >
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
