// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/header.css";

const NAV_ITEMS = CLINIC_INFO.navMain;
// กำหนดระยะห่างจากด้านบน (offset) สำหรับการเลื่อนไปยังส่วนต่างๆ (Fixed Header Height)
const ANCHOR_OFFSET = 80;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // --- 1. Data Preparation ---
  const phone = CLINIC_INFO.phone;
  // ทำความสะอาดเบอร์โทรศัพท์สำหรับลิงก์ tel:
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const movedNotice = CLINIC_INFO.movedNotice?.en;

  // --- 2. Scroll Detection Logic ---
  useEffect(() => {
    const onScroll = () => {
      // ตั้งค่า scrolled state หาก scroll เกิน 10px
      setIsScrolled(window.scrollY > 10);
    };
    onScroll(); // รันครั้งแรก
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- 3. Smooth Scroll Handler ---
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        // คำนวณตำแหน่ง scroll โดยหักด้วย Anchor Offset
        const y = el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      // ปิดเมนูมือถือหลังจากคลิก
      setIsOpen(false);
    }
  };

  // --- 4. Component Render ---
  return (
    <header
      className={`site-header header-root fixed-top ${
        isScrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between header-inner">
          {/* Brand */}
          <a href="#hero" className="d-flex align-items-center header-brand">
            <div className="d-flex align-items-center justify-content-center flex-shrink-0 brand-mark me-2">
              <span className="brand-mark-text">DS</span>
            </div>
            <div className="d-flex flex-column">
              <div className="header-brand-name">Dental Smile</div>
              <div className="d-flex flex-wrap align-items-center gap-1">
                <span className="header-subtitle">Pattaya</span>
                {/* แสดง badge ย้ายคลินิกเฉพาะบน Desktop */}
                {movedNotice && (
                  <span className="header-notice d-none d-lg-inline-flex align-items-center gap-1 ms-1">
                    <span className="notice-dot" />
                    <span>{movedNotice}</span>
                  </span>
                )}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="d-none d-lg-block">
            <ul className="nav align-items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link header-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {phone && (
                <li className="nav-item ps-2">
                  <a href={phoneHref} className="btn header-call-btn d-inline-flex align-items-center gap-2">
                    <span className="call-dot" />
                    <span className="call-text">{phone}</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile elements */}
          <div className="d-flex d-lg-none align-items-center gap-3">
            {phone && (
              <a href={phoneHref} className="header-call-btn btn d-flex align-items-center justify-content-center">
                {/* ปุ่มโทรศัพท์มือถือ แสดงเฉพาะจุดสีเขียว */}
                <span className="call-dot" />
              </a>
            )}

            <button
              className="btn header-toggle"
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`burger ${isOpen ? "burger-open" : ""}`}>
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (Hidden on lg+) */}
      <div
        className={`mobile-nav d-lg-none ${isOpen ? "mobile-nav-open" : ""}`}
      >
        <div className="container py-3">
          {movedNotice && (
            <div className="mb-3">
              <span className="header-notice w-100 justify-content-center d-inline-flex align-items-center gap-1">
                <span className="notice-dot" />
                <span>{movedNotice}</span>
              </span>
            </div>
          )}

          <ul className="nav flex-column gap-1 mb-3">
            {NAV_ITEMS.map((item) => (
              <li className="nav-item" key={item.href}>
                <a
                  href={item.href}
                  className="nav-link header-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {phone && (
            <a
              href={phoneHref}
              className="btn header-call-btn w-100 d-flex align-items-center justify-content-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span className="call-dot" />
              <span className="call-text">{phone}</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
