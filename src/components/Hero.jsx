// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/hero.css";

export default function Hero() {
  const sectionRef = useRef(null);

  // --- 1. Data Preparation ---
  const name = CLINIC_INFO.name || "Dental Smile Pattaya";
  const tagline = CLINIC_INFO.tagline || "Gentle dental care in Pattaya";
  const phone = CLINIC_INFO.phone;
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const heroImage = CLINIC_INFO.images?.hero;

  // --- 2. Simple reveal animation ---
  useEffect(() => {
    const t = setTimeout(() => {
      sectionRef.current?.classList.add("hero-modern-visible");
    }, 40);
    return () => clearTimeout(t);
  }, []);

  // --- 3. Render ---
  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-modern border-bottom"
    >
      {/* Background decorative layers */}
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
          {/* LEFT: Text / CTA */}
          <div className="hero-modern-left">
            {/* Topline badge */}
            <div className="hero-modern-topline">
              <span className="hero-modern-badge">
                {tagline}
              </span>
            </div>

            {/* Main title & subtitle */}
            <h1 className="hero-modern-title">
              {name}
            </h1>

            <p className="hero-modern-subtitle">
              Soft, gentle dentistry for locals and visitors in Pattaya —
              clear options, fair prices, and a calm clinic designed to help
              you actually relax in the dental chair.
            </p>

            {/* Highlights list */}
            <ul className="hero-modern-list">
              <li>
                <span className="hero-modern-list-dot" />
                Friendly Thai & English-speaking dentists
              </li>
              <li>
                <span className="hero-modern-list-dot" />
                Transparent treatment plans & prices
              </li>
              <li>
                <span className="hero-modern-list-dot" />
                Whitening, implants, braces, and general care
              </li>
            </ul>

            {/* CTA buttons */}
            <div className="hero-modern-cta">
              <a
                href="#contact"
                className="hero-modern-btn hero-modern-btn-primary"
              >
                Book an appointment
              </a>

              <a
                href="#services"
                className="hero-modern-btn hero-modern-btn-ghost"
              >
                View treatments &amp; prices
              </a>
            </div>

            {/* Contact row */}
            {phone && (
              <div className="hero-modern-contact">
                <div className="hero-modern-contact-label">
                  Prefer to talk first?
                </div>
                <a
                  href={phoneHref}
                  className="hero-modern-contact-phone"
                >
                  {phone}
                </a>
                <span className="hero-modern-contact-note">
                  Line &amp; call welcome
                </span>
              </div>
            )}
          </div>

          {/* RIGHT: Floating photo card */}
          <div className="hero-modern-right">
            <div className="hero-modern-card">
              {heroImage && (
                <div className="hero-modern-card-photo-wrap">
                  <img
                    src={heroImage}
                    alt={`${name} clinic interior`}
                    className="hero-modern-card-photo"
                  />
                </div>
              )}

              <div className="hero-modern-card-body">
                <div className="hero-modern-card-chip-row">
                  <span className="hero-modern-card-chip hero-modern-card-chip-soft">
                    Gentle whitening • Check-ups
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
