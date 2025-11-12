import React from "react";
import { CLINIC } from "../constants/clinic";

const Icon = {
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.11 5.18 2 2 0 0 1 5.09 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.88 6.88l1.27-1.27a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.83 3.73-3.83 1.08 0 2.22.19 2.22.19v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.98A10 10 0 0 0 22 12z"/>
    </svg>
  ),
};

export default function SocialRail() {
  const telHref = `tel:${(CLINIC.phoneHref || CLINIC.phone || "").replace(/\s|-/g, "")}`;

  // ✅ รองรับหลายคีย์ที่อาจใช้อยู่ใน CLINIC
  const fbHref =
    CLINIC?.links?.facebook ||
    CLINIC?.social?.facebook ||
    CLINIC?.facebook ||
    null;

  const items = [
    { href: telHref, label: "โทร", icon: Icon.phone, color: "#0ea5a4" },
    fbHref ? { href: fbHref, label: "Facebook", icon: Icon.facebook, color: "#1877f2" } : null,
  ].filter(Boolean);

  return (
    <nav className="social-rail-bottom" aria-label="Quick contact">
      {items.map((it, i) => (
        <a
          key={i}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="social-btn-pair"
          style={{ background: it.color }}
          aria-label={it.label}
        >
          {it.icon}
          <span className="social-label">{it.label}</span>
        </a>
      ))}
    </nav>
  );
}
