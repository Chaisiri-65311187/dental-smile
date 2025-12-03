// src/components/Contact.jsx
import React from "react";
import { CLINIC_INFO } from "../constants/clinic";
import "../styles/contact.css";
import ContactGallery from "./ContactGallery";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=12.924242,100.882485&hl=en&z=16&output=embed";

export default function Contact() {
  const phoneHref = `tel:${(CLINIC_INFO.phoneHref || CLINIC_INFO.phone || "")
    .replace(/\s|-/g, "")
    .trim()}`;
  const mailHref = `mailto:${CLINIC_INFO.email || ""}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. We have received your enquiry.");
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* LEFT: Map & Details */}
          <div className="col-lg-5">
            <div className="contact-card h-100">
              <h2 className="contact-title">Find us</h2>

              <div className="contact-map-container">
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

              <div className="contact-details">
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

                <div className="contact-btn-row">
                  <a href={phoneHref} className="contact-btn-primary">
                    📞 Call clinic
                  </a>
                  <a
                    href={CLINIC_INFO.links.map}
                    className="contact-btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📍 Open in Maps
                  </a>
                </div>
              </div>

              <ContactGallery />
            </div>
          </div>

          {/* RIGHT: Contact form */}
          <div className="col-lg-7">
            <div className="contact-card h-100">
              <div className="p-3 p-md-4">
                <h2 className="contact-title">Contact us</h2>
                <p className="contact-subtitle">
                  Send us your details and we’ll reply as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Title */}
                    <div className="col-12">
                      <div className="contact-label">
                        Title <span className="text-danger">*</span>
                      </div>
                      <div className="d-flex flex-wrap gap-3">
                        <label className="contact-radio-label">
                          <input
                            type="radio"
                            name="title"
                            value="Mr"
                            defaultChecked
                          />{" "}
                          Mr.
                        </label>
                        <label className="contact-radio-label">
                          <input type="radio" name="title" value="Ms" /> Ms.
                        </label>
                        <label className="contact-radio-label">
                          <input type="radio" name="title" value="Mrs" /> Mrs.
                        </label>
                      </div>
                    </div>

                    {/* Name */}
                    <div className="col-md-6">
                      <div className="contact-label">
                        Name <span className="text-danger">*</span>
                      </div>
                      <input
                        type="text"
                        name="firstName"
                        className="contact-input"
                        placeholder="First name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contact-label">
                        Last name <span className="text-danger">*</span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className="contact-input"
                        placeholder="Last name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <div className="contact-label">
                        E-mail <span className="text-danger">*</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="contact-input"
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="contact-label">
                        Re-enter E-mail <span className="text-danger">*</span>
                      </div>
                      <input
                        type="email"
                        name="emailConfirm"
                        className="contact-input"
                        placeholder="Same as above"
                        required
                      />
                    </div>

                    {/* Age & Phone */}
                    <div className="col-md-4">
                      <div className="contact-label">Age</div>
                      <input
                        type="number"
                        name="age"
                        min="0"
                        className="contact-input"
                        placeholder="e.g. 35"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="contact-label">
                        Phone / WhatsApp / LINE
                      </div>
                      <input
                        type="text"
                        name="phone"
                        className="contact-input"
                        placeholder="+66 ..."
                      />
                    </div>

                    {/* Address */}
                    <div className="col-12">
                      <div className="contact-label">Address</div>
                      <textarea
                        name="address"
                        rows={3}
                        className="contact-input"
                        placeholder="House number, street, city, country"
                      ></textarea>
                    </div>

                    {/* Services (checkboxes) – เดิมเหมือนเดิม แค่ใช้ UI ใหม่จาก CSS */}
                    {/* ... คุณสามารถคง block checkbox เดิมได้เลย ... */}

                    {/* Message */}
                    <div className="col-12">
                      <div className="contact-label">
                        Additional information / requests
                      </div>
                      <textarea
                        name="message"
                        rows={4}
                        className="contact-input"
                        placeholder="Please type any additional information, symptoms, or requests here."
                      ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="col-12 d-flex gap-2 mt-1">
                      <button className="contact-submit-btn" type="submit">
                        Submit
                      </button>
                      <button className="contact-reset-btn" type="reset">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}
