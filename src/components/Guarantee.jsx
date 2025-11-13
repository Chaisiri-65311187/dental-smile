// src/components/Guarantee.jsx
import React from "react";
import { WARRANTY_POLICY } from "../data/warranty";

export default function Guarantee() {
  return (
    <section
      id="guarantee"
      style={{
        background: "#020617",
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
            Treatment guarantee
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#9ca3af",
            }}
          >
            {WARRANTY_POLICY.introEn}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1.2fr) minmax(0,0.9fr)",
            gap: "1.6rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#a5b4fc",
                marginBottom: "0.6rem",
              }}
            >
              Covered treatments
            </h3>
            <div
              style={{
                borderRadius: 20,
                border: "1px solid rgba(55,65,81,0.95)",
                background: "rgba(15,23,42,0.95)",
                padding: "1rem 1rem 0.8rem",
                boxShadow: "0 18px 46px rgba(15,23,42,0.9)",
              }}
            >
              {WARRANTY_POLICY.treatments.map((t) => (
                <div
                  key={t.treatment}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: "1px dashed rgba(55,65,81,0.7)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "0.75rem",
                      alignItems: "baseline",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#f9fafb",
                      }}
                    >
                      {t.treatment}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#a5b4fc",
                      }}
                    >
                      {t.durationYears} years
                    </div>
                  </div>
                  <p
                    style={{
                      margin: "0.15rem 0 0",
                      fontSize: 12,
                      color: "#9ca3af",
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#a5b4fc",
                marginBottom: "0.6rem",
              }}
            >
              Conditions
            </h3>
            <ul
              style={{
                margin: 0,
                marginBottom: "0.8rem",
                paddingLeft: "1.1rem",
                fontSize: 12,
                color: "#e5e7eb",
              }}
            >
              {WARRANTY_POLICY.conditionsEn.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <h4
              style={{
                fontSize: 13,
                margin: "0.9rem 0 0.3rem",
                color: "#f97316",
              }}
            >
              Not covered
            </h4>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.1rem",
                fontSize: 12,
                color: "#9ca3af",
              }}
            >
              {WARRANTY_POLICY.exclusionsEn.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            <p
              style={{
                marginTop: "0.85rem",
                fontSize: 12,
                color: "#9ca3af",
              }}
            >
              {WARRANTY_POLICY.refundPolicyEn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
