// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/hero.css";

export default function Hero() {
  const sectionRef = useRef(null);

  const name = CLINIC_INFO.name || "Dental Smile Pattaya";
  const tagline = CLINIC_INFO.tagline || "Gentle dental care in Pattaya";
  const phone = CLINIC_INFO.phone;
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const heroImage = CLINIC_INFO.images?.hero;

  // ใช้ logo จาก CLINIC_INFO ถ้ามี ไม่งั้นใช้ไฟล์โลโก้ใน public
  const logo = CLINIC_INFO.logo || "/logo.jpg";

  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.classList.add("hero-modern-visible");
    }, 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="hero-modern">
      {heroImage && (
        <img
          src={heroImage}
          alt="Dental clinic background"
          className="hero-modern-image-bg"
          aria-hidden="true"
        />
      )}

      <div className="hero-modern-bg" aria-hidden="true" />

      <div className="container position-relative hero-modern-inner">
        <div className="hero-modern-layout">

          {/* LEFT BLOCK */}
          <div className="hero-modern-left">

            {/* LOGO CENTER */}
            <div className="hero-logo-container">
              <img src={logo} alt="Dental Smile Logo" className="hero-logo" />
            </div>

            {/* TAGLINE */}
            <div className="hero-modern-topline">
              <span className="hero-modern-badge">{tagline}</span>
            </div>

            {/* TITLE */}
            <h1 className="hero-modern-title">{name}</h1>

            {/* SHORT DESCRIPTION */}
            <p className="hero-modern-subtitle">
              Gentle, English-speaking dental care for locals and visitors.
            </p>

            {/* HIGHLIGHTS */}
            <ul className="hero-modern-list">
              <li>
                <span className="hero-modern-list-dot" />
                Friendly dentists & calm clinic.
              </li>
              <li>
                <span className="hero-modern-list-dot" />
                Clear treatment plans and pricing.
              </li>
            </ul>

            {/* CTA BUTTONS */}
            <div className="hero-modern-cta">
              <a href="#contact" className="hero-modern-btn hero-modern-btn-primary">
                Book an appointment
              </a>

              <a href="#services" className="hero-modern-btn hero-modern-btn-ghost">
                View treatments
              </a>
            </div>

            {/* CONTACT LINE */}
            {phone && (
              <div className="hero-modern-contact">
                <div className="hero-modern-contact-label">Prefer to talk?</div>
                <a href={phoneHref} className="hero-modern-contact-phone">
                  {phone}
                </a>
                <span className="hero-modern-contact-note">Call or LINE welcome</span>
              </div>
            )}
          </div>

          {/* RIGHT PHOTO CARD */}
          <div className="hero-modern-right">
            <div className="hero-modern-card">
              {heroImage && (
                <div className="hero-modern-card-photo-wrap">
                  <img
                    src={heroImage}
                    alt={`${name} interior`}
                    className="hero-modern-card-photo"
                  />
                </div>
              )}

              <div className="hero-modern-card-body">
                <div className="hero-modern-card-chip-row">
                  <span className="hero-modern-card-chip hero-modern-card-chip-soft">
                    Check-ups • Whitening • Implants
                  </span>
                </div>

                {phone && (
                  <div className="hero-modern-card-row">
                    <span className="hero-modern-card-dot" />
                    <a href={phoneHref} className="hero-modern-card-phone">
                      {phone}
                    </a>
                  </div>
                )}

                <p className="hero-modern-card-note">
                  3rd Road, Central Pattaya — easy parking.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
