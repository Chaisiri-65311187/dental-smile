// src/components/SocialRail.jsx
import React, { useEffect, useRef, useState } from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/socialrail.css";

export default function SocialRail() {
  const [isVisible, setIsVisible] = useState(false);
  const railRef = useRef(null);
  
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const mailHref = `mailto:${CLINIC_INFO.email || ""}`;

  // Hook for simple reveal animation (triggered after mount)
  useEffect(() => {
    const t = setTimeout(() => {
      setIsVisible(true);
    }, 500); // 0.5 second delay to ensure the rail slides in after the page loads
    return () => clearTimeout(t);
  }, []);

  return (
    // ใช้ social-rail-bottom และเพิ่ม class สำหรับ animation
    <div
      ref={railRef}
      className={`social-rail-bottom d-none d-md-flex ${isVisible ? 'social-rail-visible' : ''}`}
    >
      {/* Call Button (Teal/Cyan Gradient) */}
      {CLINIC_INFO.phone && (
        <a
          href={phoneHref}
          className="social-btn-pair social-call"
          aria-label="Call Dental Smile Pattaya"
        >
          <span className="icon-ring">📞</span>
          <span className="social-label d-none d-lg-inline">Call us now</span>
        </a>
      )}
      
      {/* Appointment/Form Button (Cyan/Teal Gradient) */}
      <a
        href="#contact"
        className="social-btn-pair social-appt"
        aria-label="Book appointment"
      >
        <span className="icon-ring">📝</span>
        <span className="social-label d-none d-lg-inline">Appointment</span>
      </a>

      {/* Facebook Button (Blue/Indigo Gradient) */}
      {CLINIC_INFO.links.facebook && (
        <a
          href={CLINIC_INFO.links.facebook}
          target="_blank"
          rel="noreferrer"
          className="social-btn-pair social-fb"
          aria-label="Facebook Dental Smile Pattaya"
        >
          <span className="icon-ring">f</span>
          <span className="social-label d-none d-lg-inline">Facebook</span>
        </a>
      )}
    </div>
  );
}