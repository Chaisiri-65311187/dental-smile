// src/components/Team.jsx
import React from "react";
import { STAFF } from "../data/staff";
import { useReveal } from "../hooks/useReveal";

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
  // ใช้ hook สำหรับ reveal animation (ใช้ร่วมกับ .reveal / .reveal-stagger ใน CSS)
  useReveal();

  const orderedStaff = [...STAFF].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  return (
    <section
      id="team"
      className="section-pad section-fade"
      style={{
        background: "#f9fafb",
        color: "#0f172a",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", paddingInline: "1.25rem" }}>
        {/* Heading */}
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1.7rem",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#020617",
            }}
          >
            Meet our doctors
          </h2>
          <p
            style={{
              marginTop: "0.35rem",
              fontSize: 13.5,
              color: "#6b7280",
            }}
          >
            Experienced, gentle and internationally trained.
          </p>
        </div>

        {/* Grid */}
        <div
          className="reveal-stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: "1.5rem",
          }}
        >
          {orderedStaff.map((doc) => {
            const imgSrc = getDoctorImage(doc);

            return (
              <article
                key={doc.name}
                className="team-card"
                style={{
                  background: "#ffffff",
                  borderRadius: 20,
                  padding: "1.4rem 0.9rem 1.2rem",
                  border: "1px solid rgba(148,163,184,0.25)",
                  textAlign: "center",
                }}
              >
                {/* รูปหมอวงกลม – ใช้ .team-img-wrapper / .team-img จาก CSS */}
                <div
                  className="team-img-wrapper"
                  style={{
                    margin: "0 auto 0.85rem",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={doc.name}
                    onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                    className="team-img"
                  />
                </div>

                {/* ชื่อหมอ */}
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#020617",
                  }}
                >
                  {doc.name}
                </div>

                {/* ตำแหน่ง */}
                <div
                  style={{
                    fontSize: 12.5,
                    marginTop: 2,
                    color: "#0d9488",
                    fontWeight: 500,
                  }}
                >
                  {doc.specialty}
                </div>

                {/* การศึกษา */}
                <ul
                  style={{
                    marginTop: "0.6rem",
                    marginBottom: 0,
                    padding: 0,
                    listStyle: "none",
                    fontSize: 11.5,
                    color: "#6b7280",
                    lineHeight: 1.45,
                  }}
                >
                  {(doc.education || []).slice(0, 2).map((edu, idx) => (
                    <li key={idx}>{edu}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
