// src/components/Services.jsx
import React from "react";
import "../styles/services.css";

const TREATMENT_GROUPS = [
  {
    name: "General Dentistry & Cleaning",
    description: "Routine care to keep your teeth healthy.",
    items: [
      { name: "Dental Cleaning & Scaling", price: "900–1,500 THB", note: "/ person" },
      { name: "Cleaning & Scaling with Airflow", price: "1,700–2,200 THB", note: "/ person" },
      { name: "Dental Filling – Amalgam", price: "800–1,700 THB", note: "/ tooth" },
      { name: "Dental Filling – White Composite", price: "900–1,800 THB", note: "/ tooth" },
      { name: "Tooth Extraction", price: "900–1,700 THB", note: "/ tooth" },
      { name: "Impacted Wisdom Tooth Extraction", price: "2,000–5,000 THB", note: "/ tooth" },
    ],
  },
  {
    name: "Teeth Whitening",
    description: "Safe whitening options for a brighter smile.",
    items: [
      { name: "LED Cool Light", price: "3,900 THB", note: "/ person" },
      { name: "Laser + Cleaning", price: "5,500 THB", note: "/ person" },
      { name: "Zoom 2 + Cleaning", price: "9,500 THB", note: "/ person" },
      { name: "At-Home Whitening", price: "4,500 THB", note: "/ person" },
    ],
  },
  {
    name: "Crown, Bridge & Veneer",
    description: "Cosmetic and restorative smile solutions.",
    items: [
      { name: "Crown – Porcelain fused to standard metal", price: "9,000 THB", note: "/ tooth" },
      { name: "Crown – All Ceramic (Empress Emax)", price: "12,500 THB", note: "/ tooth" },
      { name: "Crown – Zirconia", price: "15,000 THB", note: "/ tooth" },
      { name: "Bridge – Porcelain fused to standard metal", price: "27,000 THB", note: "/ 3 teeth" },
      { name: "Bridge – All Ceramic (Empress Emax)", price: "37,500 THB", note: "/ 3 teeth" },
      { name: "Porcelain Veneer (Empress Emax)", price: "12,500 THB", note: "/ tooth" },
    ],
  },
  {
    name: "Inlay / Onlay & Denture",
    description: "Replace missing tooth structure or teeth.",
    items: [
      { name: "Composite Inlay / Onlay", price: "3,000–4,000 THB", note: "/ tooth" },
      { name: "Removable Denture – Full", price: "18,000–20,000 THB", note: "/ jaw" },
      { name: "Removable Denture – Partial", price: "10,000–18,000 THB", note: "/ jaw" },
    ],
  },
  {
    name: "Implant & Advanced Treatment",
    description: "Long-term solutions like implants and root canal.",
    items: [
      { name: "Single Implant with zirconia crown", price: "45,000 THB", note: "/ tooth" },
      { name: "All-on-4 one-trip implant", price: "By report", note: "/ jaw" },
      { name: "Root Canal – Incisor, Canine", price: "6,000–7,000 THB", note: "/ tooth" },
      { name: "Root Canal – Premolar", price: "7,000–9,000 THB", note: "/ tooth" },
      { name: "Root Canal – Molar", price: "9,000–12,000 THB", note: "/ tooth" },
    ],
  },
  {
    name: "Gum & Orthodontics",
    description: "Treat gum disease and straighten teeth.",
    items: [
      { name: "Root Planing & Deep Cleaning", price: "By report", note: "/ quadrant" },
      { name: "Metal braces", price: "35,000–40,000 THB", note: "/ person" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section section-pad">
      <div className="container">
        <div className="services-header">
          <div>
            <h2 className="services-title">Treatments &amp; pricing</h2>
            <p className="services-sub">
              Clear prices in Thai Baht for international and local patients.
            </p>
          </div>
          <div className="services-pill">
            <span>💡</span>
            <span>Prices in THB</span>
          </div>
        </div>

        <div className="row g-4">
          {TREATMENT_GROUPS.map((group) => (
            <div className="col-md-6 col-lg-4" key={group.name}>
              <article className="service-card">
                <div className="service-card-head">
                  <h3>{group.name}</h3>
                  <p>{group.description}</p>
                </div>

                <ul className="service-list">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="service-row">
                        <span className="service-name">{item.name}</span>
                        <span className="service-price">{item.price}</span>
                      </div>
                      {item.note && (
                        <div className="service-note">{item.note}</div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="service-foot">
                  * Final fees depend on your case after examination.
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
