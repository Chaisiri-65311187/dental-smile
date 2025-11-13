// src/components/Team.jsx
import React from "react";
import { STAFF } from "../data/staff";

function getDoctorImage(doc) {
  if (doc.img) return doc.img;
  const nickSlug =
    doc.nickname
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "doctor";
  return `/staff/${nickSlug}.jpg`;
}

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop";

export default function Team() {
  // ✅ เรียงตาม order ก่อน (ถ้าไม่มี order จะไปอยู่ท้ายๆ)
  const orderedStaff = [...STAFF].sort((a, b) => {
    const ao = a.order ?? 999;
    const bo = b.order ?? 999;
    return ao - bo;
  });

  return (
    <section
      id="team"
      style={{
        background: "#f9fafb",
        color: "#0f172a",
        padding: "3.5rem 1.25rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <div style={{ fontSize: 32, marginBottom: 8 }}>👩‍⚕️🧑‍⚕️</div>
          <h2
            style={{
              margin: 0,
              fontSize: "1.9rem",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#020617",
            }}
          >
            Meet our doctors
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: 14,
              color: "#6b7280",
            }}
          >
            Board-certified specialists with international training and gentle
            bedside manners.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
            gap: "1.4rem",
          }}
        >
          {orderedStaff.map((doc) => {
            const imgSrc = getDoctorImage(doc);
            return (
              <article
                key={doc.name}
                className="doctor-card hover-lift"
                style={{
                  borderRadius: 24,
                  background: "#ffffff",
                  border: "1px solid rgba(148,163,184,0.35)",
                  boxShadow: "0 16px 36px rgba(15,23,42,0.06)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* รูปหมอ */}
                <div
                  className="doctor-card-img"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "70%", // อัตราส่วนรูป
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={doc.name}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    className="doctor-card-img-inner"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      insetInline: 0,
                      bottom: 0,
                      height: "40%",
                      background:
                        "linear-gradient(to top, rgba(15,23,42,0.7), transparent)",
                    }}
                  />
                  {doc.nickname && (
                    <div
                      style={{
                        position: "absolute",
                        left: 12,
                        bottom: 10,
                        padding: "0.15rem 0.6rem",
                        borderRadius: 999,
                        fontSize: 11,
                        background:
                          "linear-gradient(135deg,#3b82f6,#6366f1,#a855f7)",
                        color: "#f9fafb",
                        boxShadow: "0 10px 24px rgba(37,99,235,0.7)",
                      }}
                    >
                      {doc.nickname}
                    </div>
                  )}
                </div>

                {/* ข้อมูลหมอ */}
                <div
                  style={{
                    padding: "0.9rem 1.05rem 0.85rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#020617",
                      }}
                    >
                      {doc.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#1d4ed8",
                        marginTop: 2,
                      }}
                    >
                      {doc.specialty}
                    </div>
                  </div>

                  <ul
                    style={{
                      margin: 0,
                      padding: "0 0 0 1.1rem",
                      fontSize: 12,
                      color: "#6b7280",
                    }}
                  >
                    {(doc.education || []).slice(0, 3).map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
