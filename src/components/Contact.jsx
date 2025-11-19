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
    // ตอนนี้ยังไม่มี backend — กันหน้า refresh ไว้เฉย ๆ
    alert("Thank you. We have received your enquiry.");
  };

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

              {/* DETAILS */}
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

              <div className="mt-4">
                <ContactGallery />
              </div>

            </div>
          </div>


          {/* RIGHT: Contact form (แบบเดียวกับเว็บเก่า) */}
          <div className="col-lg-7 contact-animate-right">
            <div className="contact-glass-card h-100">
              <div className="card-body p-4">
                <h2 className="contact-title mb-2">Contact Us</h2>
                <p className="contact-subtitle mb-4">
                  For enquiry by internet, please fill in your details and we
                  will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Title / Salutation */}
                    <div className="col-12">
                      <div className="contact-label mb-1">
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
                        Last Name <span className="text-danger">*</span>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className="contact-input"
                        placeholder="Last name"
                        required
                      />
                    </div>

                    {/* Email & Re-enter email */}
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
                      <small className="contact-hint">No spam guarantee</small>
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
                      <small className="contact-hint">
                        Must match the email above
                      </small>
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

                    {/* Services (checkboxes) */}
                    <div className="col-12 mt-2">
                      <div className="contact-label mb-2">Our Services</div>
                      <div className="row g-2 small">
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input
                              type="checkbox"
                              name="service_teeth_whitening"
                            />{" "}
                            Teeth Whitening
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_implant" />{" "}
                            Dental Implant
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_crown" /> Dental
                            Crown
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_veneer" />{" "}
                            Dental Veneer
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_bridge" />{" "}
                            Dental Bridge
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input
                              type="checkbox"
                              name="service_removable_denture"
                            />{" "}
                            Removable Denture
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_inlay" />{" "}
                            Inlay/Onlay
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input
                              type="checkbox"
                              name="service_root_canal"
                            />{" "}
                            Root Canal Treatment
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_periodontal" />{" "}
                            Periodontal
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input
                              type="checkbox"
                              name="service_orthodontic"
                            />{" "}
                            Orthodontic
                          </label>
                        </div>

                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input
                              type="checkbox"
                              name="service_cleaning"
                            />{" "}
                            Dental Cleaning
                          </label>
                        </div>
                        <div className="col-sm-6">
                          <label className="contact-checkbox">
                            <input type="checkbox" name="service_filling" />{" "}
                            Dental Filling
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Preferred appointment date & How do you know us */}
                    <div className="col-md-6 mt-3">
                      <div className="contact-label">
                        Preferred appointment date
                      </div>
                      <input
                        type="date"
                        name="preferredDate"
                        className="contact-input"
                      />
                    </div>

                    <div className="col-md-6 mt-3">
                      <div className="contact-label">How do you know us?</div>
                      <select
                        name="refSource"
                        className="contact-input contact-select"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          -----
                        </option>
                        <option value="friend">Friend / Family</option>
                        <option value="hotel">Hotel</option>
                        <option value="google">Google Search</option>
                        <option value="facebook">Facebook / Social media</option>
                        <option value="walkin">Walk-in / Passing by</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message / more requests */}
                    <div className="col-12 mt-2">
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
                    <div className="col-12 mt-3 d-flex gap-2">
                      <button
                        className="contact-submit-btn"
                        type="submit"
                      >
                        Submit
                      </button>
                      <button
                        className="contact-reset-btn"
                        type="reset"
                      >
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
