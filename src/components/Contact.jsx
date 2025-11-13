// src/components/Contact.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";
import {
  CONTACT_FORM_FIELDS,
  APPOINTMENT_FORM_FIELDS,
} from "../data/forms";

export default function Contact() {
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "✅ Your message has been captured on this demo site. In production you would send it to email / backend."
    );
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(to bottom, #f9fafb, #e0f2fe)",
        color: "#0f172a",
        padding: "3.4rem 1.25rem 3.6rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.9rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#020617",
            }}
          >
            Contact & appointment
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            Open daily • 09:00 – 19:00 • Near South Pattaya Road
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.95fr) minmax(0,1.05fr)",
            gap: "1.6rem",
            alignItems: "flex-start",
          }}
        >
          {/* Clinic info + map */}
          <div
            style={{
              borderRadius: 22,
              background: "#ffffff",
              border: "1px solid rgba(148,163,184,0.6)",
              padding: "1.25rem 1.25rem 1.1rem",
              boxShadow: "0 14px 34px rgba(15,23,42,0.06)",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.7rem",
                fontSize: 16,
                fontWeight: 700,
                color: "#020617",
              }}
            >
              Clinic location
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#374151",
              }}
            >
              {CLINIC_INFO.addressMain}
            </p>
            <p
              style={{
                margin: "0.45rem 0 0.85rem",
                fontSize: 12,
                color: "#6b7280",
              }}
            >
              Taxi note: {CLINIC_INFO.addressTaxi}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                fontSize: 13,
                marginBottom: "0.8rem",
              }}
            >
              <a
                href={phoneHref}
                style={{
                  color: "#0369a1",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                📞 {CLINIC_INFO.phone}
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                style={{
                  color: "#0369a1",
                  textDecoration: "none",
                }}
              >
                ✉️ {CLINIC_INFO.email}
              </a>
            </div>

            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(59,130,246,0.4)",
              }}
              id="map"
            >
              <iframe
                src={CLINIC_INFO.location.embedUrl}
                title="Dental Smile Pattaya map"
                style={{ border: 0, width: "100%", height: 260 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Appointment form */}
          <div
            style={{
              borderRadius: 22,
              background: "#ffffff",
              border: "1px solid rgba(148,163,184,0.6)",
              padding: "1.4rem 1.4rem 1.1rem",
              boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                color: "#020617",
              }}
            >
              Quick appointment request
            </h3>
            <p
              style={{
                margin: "0.4rem 0 1rem",
                fontSize: 12.5,
                color: "#6b7280",
              }}
            >
              Fill in a few details and our staff will contact you back to
              confirm.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                gap: "0.9rem 0.9rem",
                fontSize: 12,
              }}
            >
              {APPOINTMENT_FORM_FIELDS.map((field) => {
                const isFull = ["address", "services", "message"].includes(
                  field.name
                );
                const colSpanStyle = isFull
                  ? { gridColumn: "1 / -1" }
                  : undefined;

                if (field.type === "checkbox-group") {
                  return (
                    <div key={field.name} style={colSpanStyle}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: 4,
                          color: "#111827",
                          fontWeight: 500,
                        }}
                      >
                        {field.label}
                      </label>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.4rem 0.9rem",
                        }}
                      >
                        {field.options.map((opt) => (
                          <label
                            key={opt}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 4,
                              color: "#374151",
                              fontSize: 12,
                            }}
                          >
                            <input
                              type="checkbox"
                              name={field.name}
                              value={opt}
                              style={{ accentColor: "#0ea5e9" }}
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (field.name === "message") {
                  return (
                    <div key={field.name} style={colSpanStyle}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: 4,
                          color: "#111827",
                          fontWeight: 500,
                        }}
                      >
                        {field.label}
                      </label>
                      <textarea
                        id="contact-message"
                        name={field.name}
                        rows={3}
                        style={{
                          width: "100%",
                          borderRadius: 10,
                          border: "1px solid rgba(209,213,219,1)",
                          background: "#ffffff",
                          color: "#111827",
                          padding: "0.5rem 0.6rem",
                          resize: "vertical",
                          fontSize: 12,
                        }}
                      />
                    </div>
                  );
                }

                return (
                  <div key={field.name} style={colSpanStyle}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: 4,
                        color: "#111827",
                        fontWeight: 500,
                      }}
                    >
                      {field.label}
                      {field.required && (
                        <span style={{ color: "#f97316" }}> *</span>
                      )}
                    </label>
                    <input
                      type={
                        field.name === "email" ||
                        field.name === "emailConfirm"
                          ? "email"
                          : "text"
                      }
                      name={field.name}
                      required={field.required}
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        border: "1px solid rgba(209,213,219,1)",
                        background: "#ffffff",
                        color: "#111827",
                        padding: "0.45rem 0.6rem",
                        fontSize: 12,
                      }}
                    />
                  </div>
                );
              })}

              <div style={{ gridColumn: "1 / -1", marginTop: "0.4rem" }}>
                <button
                  type="submit"
                  style={{
                    borderRadius: 999,
                    padding: "0.55rem 1.5rem",
                    border: "none",
                    background:
                      "linear-gradient(135deg, #0ea5e9, #14b8a6, #22c55e)",
                    color: "#f9fafb",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 14px 34px rgba(8,47,73,0.35)",
                  }}
                >
                  Submit appointment request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
