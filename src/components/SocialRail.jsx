// src/components/SocialRail.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";

export default function SocialRail() {
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone)
    .replace(/\s|-/g, "")
    .trim()}`;

  return (
    <div
      className="ds-social-rail"
      style={{
        position: "fixed",
        right: 16,
        bottom: 80,
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {/* phone */}
      <a
        href={phoneHref}
        title="Call clinic"
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
          background:
            "radial-gradient(circle, #22c55e, #16a34a 60%, #15803d)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ecfdf5",
          textDecoration: "none",
          boxShadow: "0 12px 26px rgba(22,163,74,0.85)",
          fontSize: 22,
        }}
      >
        📞
      </a>

      {/* facebook */}
      <a
        href={CLINIC_INFO.links?.facebook}
        target="_blank"
        rel="noreferrer"
        title="Facebook"
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
          background:
            "radial-gradient(circle, #2563eb, #1d4ed8 60%, #1e3a8a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#eff6ff",
          textDecoration: "none",
          boxShadow: "0 12px 26px rgba(37,99,235,0.85)",
          fontSize: 22,
        }}
      >
        f
      </a>

      {/* scroll to contact */}
      <button
        type="button"
        title="Appointment form"
        onClick={() => {
          const el = document.getElementById("contact");
          if (!el) return;
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }}
        style={{
          width: 44,
          height: 44,
          borderRadius: 999,
          border: "none",
          background:
            "radial-gradient(circle, #38bdf8, #6366f1 60%, #1d4ed8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#eff6ff",
          boxShadow: "0 12px 26px rgba(37,99,235,0.85)",
          cursor: "pointer",
          fontSize: 22,
        }}
      >
        ✉️
      </button>
    </div>
  );
}
