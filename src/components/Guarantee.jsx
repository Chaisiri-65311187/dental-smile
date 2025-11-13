// src/components/Guarantee.jsx
import React from "react";
import { WARRANTY_POLICY } from "../data/warranty";

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      style={{
        background: "linear-gradient(to bottom, #f9fafb, #e5f3ff)",
        color: "#0f172a",
        padding: "3.2rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            maxWidth: 640,
            marginBottom: "1.9rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "0.25rem 0.75rem",
              borderRadius: 999,
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(148,163,184,0.45)",
              fontSize: 11,
              color: "#0369a1",
              marginBottom: "0.75rem",
            }}
          >
            <span>🛡️</span>
            <span>Clear warranty, no hidden fine print</span>
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "1.8rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#020617",
            }}
          >
            Treatment guarantee
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            {WARRANTY_POLICY.introEn}
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.9fr)",
            gap: "1.8rem",
            alignItems: "flex-start",
          }}
        >
          {/* Covered treatments */}
          <div>
            <h3
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#0ea5e9",
                marginBottom: "0.6rem",
              }}
            >
              Covered treatments
            </h3>
            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.55)",
                background: "rgba(255,255,255,0.95)",
                padding: "0.9rem 1rem 0.6rem",
                boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
              }}
            >
              {WARRANTY_POLICY.treatments.map((t, idx) => (
                <div
                  key={t.treatment}
                  style={{
                    padding: "0.55rem 0",
                    borderBottom:
                      idx === WARRANTY_POLICY.treatments.length - 1
                        ? "none"
                        : "1px dashed rgba(203,213,225,0.9)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#020617",
                      }}
                    >
                      {t.treatment}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        padding: "0.1rem 0.55rem",
                        borderRadius: 999,
                        background: "rgba(219,234,254,0.9)",
                        color: "#1d4ed8",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                      }}
                    >
                      {t.durationYears} years
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "0.18rem 0 0",
                      fontSize: 12,
                      color: "#6b7280",
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions / exclusions */}
          <div>
            <h3
              style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#0ea5e9",
                marginBottom: "0.6rem",
              }}
            >
              Conditions & exclusions
            </h3>

            <div
              style={{
                borderRadius: 18,
                border: "1px solid rgba(148,163,184,0.5)",
                background: "rgba(255,255,255,0.9)",
                padding: "0.9rem 1rem 0.85rem",
                boxShadow: "0 14px 34px rgba(15,23,42,0.05)",
              }}
            >
              <h4
                style={{
                  fontSize: 13,
                  margin: "0 0 0.3rem",
                  color: "#0f172a",
                  fontWeight: 600,
                }}
              >
                Conditions
              </h4>
              <ul
                style={{
                  margin: 0,
                  marginBottom: "0.7rem",
                  paddingLeft: "1.05rem",
                  fontSize: 12,
                  color: "#4b5563",
                  lineHeight: 1.55,
                }}
              >
                {WARRANTY_POLICY.conditionsEn.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <h4
                style={{
                  fontSize: 13,
                  margin: "0.5rem 0 0.25rem",
                  color: "#f97316",
                  fontWeight: 600,
                }}
              >
                Not covered
              </h4>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: "1.05rem",
                  fontSize: 12,
                  color: "#6b7280",
                  lineHeight: 1.55,
                }}
              >
                {WARRANTY_POLICY.exclusionsEn.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              <p
                style={{
                  marginTop: "0.7rem",
                  fontSize: 11.5,
                  color: "#6b7280",
                }}
              >
                {WARRANTY_POLICY.refundPolicyEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
