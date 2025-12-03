// src/components/SocialRail.jsx
import React, { useEffect, useState } from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/socialrail.css";

export default function SocialRail() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // เปิด/ปิดกล่อง

  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`social-rail-root d-none d-md-flex ${
        isMounted ? "social-rail-root-visible" : ""
      }`}
    >
      {/* รูปหมอ — โชว์ตลอด */}
      <div className="social-dentist-wrap">
        <img
          src="/dentist-female.png"
          alt="Dentist"
          className="social-dentist-img"
        />
      </div>

      {/* กล่อง Need help? — โผล่เฉพาะตอน isOpen */}
      {isOpen && (
        <div className="social-rail-panel">
          <div className="social-rail-card">
            <div className="social-rail-header">
              <span className="wave-hand">👋</span>
              <div>
                <p className="social-rail-title">Need help?</p>
                <p className="social-rail-sub">Contact Dental Smile</p>
              </div>
            </div>

            <div className="social-rail-actions">
              {CLINIC_INFO.phone && (
                <a href={phoneHref} className="social-btn social-call">
                  <span className="social-btn-icon">📞</span>
                  <span className="social-btn-text">Call us</span>
                </a>
              )}

              <a href="#contact" className="social-btn social-appt">
                <span className="social-btn-icon">📝</span>
                <span className="social-btn-text">Send enquiry</span>
              </a>

              {CLINIC_INFO.links.facebook && (
                <a
                  href={CLINIC_INFO.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn social-fb"
                >
                  <span className="social-btn-icon">f</span>
                  <span className="social-btn-text">Facebook</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ปุ่มลอย */}
      <button
        className={`social-toggle-btn ${isOpen ? "social-toggle-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="social-toggle-icon">💬</span>
      </button>
    </div>
  );
}
