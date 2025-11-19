// src/components/Services.jsx
import React from "react";
import "../styles/services.css";

const TREATMENT_GROUPS = [
  {
    name: "General Dentistry & Cleaning",
    description:
      "Routine cleaning, fillings, and extractions to maintain good oral health.",
    items: [
      {
        name: "Dental Cleaning & Scaling",
        price: "900–1,500 THB",
        note: "Cleaning & Scaling / person",
      },
      {
        name: "Cleaning & Scaling with Airflow",
        price: "1,700–2,200 THB",
        note: "With Airflow / person",
      },
      {
        name: "Dental Filling – Amalgam",
        price: "800–1,700 THB",
        note: "/ tooth",
      },
      {
        name: "Dental Filling – White Composite",
        price: "900–1,800 THB",
        note: "/ tooth",
      },
      {
        name: "Tooth Extraction",
        price: "900–1,700 THB",
        note: "/ tooth",
      },
      {
        name: "Impacted Wisdom Tooth Extraction",
        price: "2,000–5,000 THB",
        note: "/ tooth",
      },
    ],
  },
  {
    name: "Teeth Whitening",
    description:
      "In-clinic and at-home whitening options for brighter smiles.",
    items: [
      { name: "LED Cool Light", price: "3,900 THB", note: "/ person" },
      { name: "Laser + Cleaning", price: "5,500 THB", note: "/ person" },
      { name: "Zoom 2 + Cleaning", price: "9,500 THB", note: "/ person" },
      { name: "At-Home Whitening", price: "4,500 THB", note: "/ person" },
    ],
  },
  {
    name: "Crown, Bridge & Veneer",
    description:
      "Cosmetic and restorative treatments to rebuild and improve your smile.",
    items: [
      {
        name: "Crown – Porcelain fused to standard metal",
        price: "9,000 THB",
        note: "/ tooth",
      },
      {
        name: "Crown – All Ceramic (Empress Emax)",
        price: "12,500 THB",
        note: "/ tooth",
      },
      {
        name: "Crown – Zirconia",
        price: "15,000 THB",
        note: "/ tooth",
      },
      {
        name: "Bridge – Porcelain fused to standard metal",
        price: "27,000 THB",
        note: "/ 3 teeth",
      },
      {
        name: "Bridge – All Ceramic (Empress Emax)",
        price: "37,500 THB",
        note: "/ 3 teeth",
      },
      {
        name: "Porcelain Veneer (Empress Emax)",
        price: "12,500 THB",
        note: "/ tooth",
      },
    ],
  },
  {
    name: "Inlay / Onlay & Denture",
    description:
      "Tooth-colored inlays/onlays and removable dentures for missing teeth.",
    items: [
      {
        name: "Composite Inlay / Onlay",
        price: "3,000–4,000 THB",
        note: "/ tooth",
      },
      {
        name: "Removable Denture – Full",
        price: "18,000–20,000 THB",
        note: "/ jaw",
      },
      {
        name: "Removable Denture – Partial",
        price: "10,000–18,000 THB",
        note: "/ jaw",
      },
    ],
  },
  {
    name: "Implant & Advanced Treatment",
    description:
      "Dental implants and root canal therapy for long-term solutions.",
    items: [
      {
        name: "Single Implant with zirconia crown",
        price: "45,000 THB",
        note: "/ tooth",
      },
      {
        name: "All-on-4 one-trip implant",
        price: "By report",
        note: "/ jaw",
      },
      {
        name: "Root Canal – Incisor, Canine",
        price: "6,000–7,000 THB",
        note: "/ tooth",
      },
      {
        name: "Root Canal – Premolar",
        price: "7,000–9,000 THB",
        note: "/ tooth",
      },
      {
        name: "Root Canal – Molar",
        price: "9,000–12,000 THB",
        note: "/ tooth",
      },
    ],
  },
  {
    name: "Gum & Orthodontics",
    description:
      "Deep cleaning and braces to treat gum disease and misaligned teeth.",
    items: [
      {
        name: "Root Planing & Deep Cleaning",
        price: "By report",
        note: "/ quadrant",
      },
      {
        name: "Metal braces",
        price: "35,000–40,000 THB",
        note: "/ person",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-5 section-fade">
      <div className="container">
        {/* Title */}
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <h2 className="h2 fw-bold text-ink mb-1">Treatments &amp; pricing</h2>
            <p className="small text-ink-3 mb-0">
              Transparent prices for international patients with gentle, modern
              care.
            </p>
          </div>
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white border small text-ink-2 glass">
            <span>💡</span>
            <span>Prices in Thai Baht (THB)</span>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {TREATMENT_GROUPS.map((group) => (
            <div className="col-md-6 col-lg-4" key={group.name}>
              <article className="service-card h-100 rounded-4 border bg-light-subtle p-3 p-md-4 d-flex flex-column">
                <h3 className="h5 fw-semibold text-ink mb-1">{group.name}</h3>
                <p className="small text-ink-3 mb-3">{group.description}</p>

                <ul className="list-unstyled small text-ink-3 flex-grow-1 mb-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="mb-2">
                      <div className="d-flex justify-content-between gap-2">
                        <span>{item.name}</span>
                        <span className="fw-semibold text-ink">
                          {item.price}
                        </span>
                      </div>
                      {item.note && (
                        <div className="tiny text-ink-3">{item.note}</div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="tiny text-ink-3">
                  * Final treatment plan and fees depend on your individual
                  condition after examination.
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}