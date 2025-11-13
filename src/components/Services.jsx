// src/components/Services.jsx
import React from "react";
import { SERVICES } from "../data/services";

function formatPrice(item) {
  if (item.priceMin == null && item.priceMax == null) {
    return item.note || "By report";
  }
  if (item.priceMin === item.priceMax) {
    return `${item.priceMin.toLocaleString()} THB`;
  }
  return `${item.priceMin.toLocaleString()}–${item.priceMax.toLocaleString()} THB`;
}

// icon per category
const SERVICE_ICON_BY_CATEGORY = {
  "General Dentistry": "🦷",
  Cosmetic: "✨",
  Restoration: "🛠️",
  "Dental Restoration": "🛠️",
  Veneer: "😁",
  Implant: "📌",
  "All-on-4 Implants": "🧩",
  Prosthodontics: "🧬",
  Endodontics: "🧪",
  Periodontics: "🌿",
  Orthodontics: "📏",
};

function getServiceIcon(svc) {
  return (
    SERVICE_ICON_BY_CATEGORY[svc.category] ||
    SERVICE_ICON_BY_CATEGORY[svc.name] ||
    "🦷"
  );
}

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#f3f4f6",
        padding: "3.5rem 1.25rem",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* หัวข้อ Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "flex-end",
            marginBottom: "1.8rem",
          }}
          className="ds-section-header"
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "1.9rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#020617",
              }}
            >
              Treatments & pricing
            </h2>
            <p
              style={{
                marginTop: "0.4rem",
                fontSize: 14,
                color: "#6b7280",
              }}
            >
              Transparent prices for international patients, with gentle and
              modern care.
            </p>
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#4b5563",
              background: "#e5e7eb",
              borderRadius: 999,
              padding: "0.25rem 0.85rem",
              border: "1px solid rgba(148,163,184,0.6)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            className="ds-chip"
          >
            <span>💡</span>
            <span>Prices in Thai Baht (THB)</span>
          </div>
        </div>

        {/* การ์ดบริการ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.4rem",
          }}
        >
          {SERVICES.map((svc) => {
            const icon = getServiceIcon(svc);
            return (
              <article
                key={svc.slug}
                className="service-card hover-lift"
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "1.4rem 1.35rem 1.2rem",
                  border: "1px solid rgba(148,163,184,0.35)",
                  boxShadow: "0 18px 40px rgba(15,23,42,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.8rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* ไอคอน + หมวด */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.8rem",
                  }}
                >
                  <div
                    className="service-icon"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "999px",
                      background:
                        "radial-gradient(circle at 30% 0%, #e0f2fe, #bfdbfe)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                    }}
                  >
                    <span aria-hidden>{icon}</span>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "#6b7280",
                      background: "#e5e7eb",
                      padding: "0.1rem 0.6rem",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {svc.category}
                  </span>
                </div>

                {/* ชื่อ + คำอธิบาย */}
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.25rem",
                      fontSize: 16,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {svc.name}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#6b7280",
                    }}
                  >
                    {svc.description}
                  </p>
                </div>

                {/* รายการย่อย + ราคา */}
                <div
                  style={{
                    marginTop: "0.5rem",
                    borderRadius: 14,
                    background: "#f9fafb",
                    border: "1px solid rgba(209,213,219,0.9)",
                    padding: "0.65rem 0.75rem",
                  }}
                >
                  {svc.items.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "0.75rem",
                        fontSize: 12,
                        padding: "0.22rem 0",
                      }}
                    >
                      <div style={{ color: "#111827" }}>{item.item}</div>
                      <div
                        style={{
                          fontWeight: 600,
                          color:
                            item.priceMin != null ? "#1d4ed8" : "#ea580c",
                        }}
                      >
                        {formatPrice(item)}
                      </div>
                    </div>
                  ))}

                  {svc.items.length > 3 && (
                    <div
                      style={{
                        marginTop: 4,
                        fontSize: 11,
                        color: "#9ca3af",
                      }}
                    >
                      + {svc.items.length - 3} more options
                    </div>
                  )}
                </div>

                {/* ปุ่มไปฟอร์ม */}
                <button
                  type="button"
                  style={{
                    marginTop: "0.75rem",
                    alignSelf: "flex-start",
                    borderRadius: 999,
                    padding: "0.4rem 0.9rem",
                    border: "none",
                    background:
                      "linear-gradient(135deg,#3b82f6,#6366f1,#8b5cf6)",
                    color: "#f9fafb",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 12px 34px rgba(59,130,246,0.35)",
                  }}
                  onClick={() => {
                    const msg = `I would like to ask about: ${svc.name}`;
                    const el = document.getElementById("contact-message");
                    if (el) el.value = msg;
                    const contactEl = document.getElementById("contact");
                    if (contactEl) {
                      const y =
                        contactEl.getBoundingClientRect().top +
                        window.scrollY -
                        80;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }
                  }}
                >
                  Ask about this treatment →
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
