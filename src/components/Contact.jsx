// src/components/Contact.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/contact.css";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=12.924242,100.882485&hl=en&z=16&output=embed";

export default function Contact() {
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const mailHref = `mailto:${CLINIC_INFO.email || ""}`;

  return (
    <section id="contact" className="section-pad contact-section fade-in-soft">
      <div className="container">
        <div className="row g-4 align-items-stretch contact-fade-wrap">

          {/* LEFT: Map & Details */}
          <div className="col-lg-5 contact-animate-left">
            <div className="contact-glass-card h-100 p-4">
              <h2 className="contact-title mb-3">Find us</h2>

              <div className="contact-map-container mb-4">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dental Smile Pattaya Location"
                ></iframe>
              </div>

              <div className="mt-2">
                <div className="contact-label">Address</div>
                <p className="contact-info">{CLINIC_INFO.addressMain}</p>

                <div className="contact-label">Telephone</div>
                <p className="contact-info">
                  <a href={phoneHref} className="contact-link">
                    {CLINIC_INFO.phone}
                  </a>
                </p>

                <div className="contact-label">Email</div>
                <p className="contact-info">
                  <a href={mailHref} className="contact-link">
                    {CLINIC_INFO.email}
                  </a>
                </p>

                <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
                  <a href={phoneHref} className="contact-btn-primary">
                    📞 Call clinic
                  </a>
                  <a
                    href={CLINIC_INFO.links.map}
                    className="contact-btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📍 Open full map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="col-lg-7 contact-animate-right">
            <div className="contact-glass-card h-100">
              <div className="card-body p-4">

                <h2 className="contact-title mb-3">Send us an enquiry</h2>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="contact-input"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        placeholder="Email"
                        className="contact-input"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        rows="5"
                        placeholder="Your message"
                        className="contact-input"
                      ></textarea>
                    </div>

                    <div className="col-12 mt-2">
                      <button className="contact-submit-btn" type="submit">
                        Send message →
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
