// src/components/Facility.jsx
import React from "react";
import "../styles/facility.css";

const SECTIONS = [
  {
    title: "Reception & waiting area",
    icon: "💺",
    items: [
      "Welcoming reception space with friendly staff",
      "Comfortable waiting zone with natural light",
      "Easy access on Pattaya 3rd Road",
    ],
  },
  {
    title: "Dental equipment sterilization room",
    icon: "🧼",
    items: [
      "Dedicated sterilization room",
      "Modern sterilization technology",
      "Strict infection-control workflow",
    ],
  },
  {
    title: "Dental treatment rooms",
    icon: "🦷",
    items: [
      "Fully equipped dental chair units",
      "General, cosmetic & implant procedures",
      "Clean, bright and safe environment",
    ],
  },
];

export default function Facility() {
  return (
    <section id="facility" className="facility-section section-pad">
      <div className="container">

        <div className="text-center mb-4 mb-md-5 facility-header-wrap fade-up-soft">
          <h2 className="facility-title">Clinic facilities</h2>
          <p className="facility-sub">
            Modern, clean and welcoming rooms designed for safe and gentle dental care.
          </p>
        </div>

        <div className="row g-4">
          {SECTIONS.map((sec) => (
            <div className="col-md-4 fade-up-soft delay-1" key={sec.title}>
              <article className="facility-card">
                
                <div className="facility-icon">{sec.icon}</div>

                <h3 className="facility-card-title">{sec.title}</h3>

                <ul className="facility-card-list">
                  {sec.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>

              </article>
            </div>
          ))}
        </div>
          
      </div>
    </section>
  );
}
