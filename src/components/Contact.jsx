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
        background: "#020617",
        color: "#e5e7eb",
        padding: "3.5rem 1.25rem 4rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
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
              color: "#f9fafb",
            }}
          >
            Contact & appointment
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#9ca3af",
            }}
          >
            Open daily • 09:00 – 19:00 • Near South Pattaya Road
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.1fr)",
            gap: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Clinic info + map */}
          <div
            style={{
              borderRadius: 24,
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(51,65,85,0.9)",
              padding: "1.3rem 1.3rem 1.1rem",
              boxShadow: "0 18px 40px rgba(15,23,42,0.85)",
            }}
          >
            <h3
              style={{
                margin: "0 0 0.7rem",
                fontSize: 16,
                fontWeight: 700,
                color: "#f9fafb",
              }}
            >
              Clinic location
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: 13,
                color: "#cbd5f5",
              }}
            >
              {CLINIC_INFO.addressMain}
            </p>
            <p
              style={{
                margin: "0.4rem 0 0.8rem",
                fontSize: 12,
                color: "#9ca3af",
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
                marginBottom: "0.75rem",
              }}
            >
              <a
                href={phoneHref}
                style={{ color: "#a5b4fc", textDecoration: "none" }}
              >
                📞 {CLINIC_INFO.phone}
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                style={{ color: "#a5b4fc", textDecoration: "none" }}
              >
                ✉️ {CLINIC_INFO.email}
              </a>
            </div>

            <div
              style={{
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(30,64,175,0.7)",
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

          {/* Form */}
          <div
            style={{
              borderRadius: 24,
              background: "radial-gradient(circle at top, #111827, #020617)",
              border: "1px solid rgba(55,65,81,0.95)",
              padding: "1.4rem 1.4rem 1.1rem",
              boxShadow: "0 20px 46px rgba(15,23,42,0.9)",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 16,
                fontWeight: 700,
                color: "#f9fafb",
              }}
            >
              Quick appointment request
            </h3>
            <p
              style={{
                margin: "0.4rem 0 1.1rem",
                fontSize: 12,
                color: "#9ca3af",
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
                          color: "#e5e7eb",
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
                              color: "#cbd5f5",
                            }}
                          >
                            <input
                              type="checkbox"
                              name={field.name}
                              value={opt}
                              style={{ accentColor: "#6366f1" }}
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
                          color: "#e5e7eb",
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
                          border: "1px solid rgba(75,85,99,0.9)",
                          background: "rgba(15,23,42,0.95)",
                          color: "#e5e7eb",
                          padding: "0.5rem 0.6rem",
                          resize: "vertical",
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
                        color: "#e5e7eb",
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
                        border: "1px solid rgba(75,85,99,0.9)",
                        background: "rgba(15,23,42,0.95)",
                        color: "#e5e7eb",
                        padding: "0.45rem 0.6rem",
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
                    padding: "0.55rem 1.4rem",
                    border: "none",
                    background:
                      "linear-gradient(135deg, #38bdf8, #6366f1, #a855f7)",
                    color: "#f9fafb",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 14px 34px rgba(37,99,235,0.8)",
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
