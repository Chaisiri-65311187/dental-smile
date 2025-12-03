// src/components/Facility.jsx
import React from "react";
import "../styles/facility.css";

export const FACILITY_GROUPS = [
  {
    group: "Reception and Waiting Area",
    items: [
      { title: "Waiting Area", src: "/dental_waiting2.jpg" },
      { title: "Reception", src: "/dental_reception.jpg" },
      { title: "Front Area", src: "/dental_front.jpg" },
      { title: "Office / Side Reception", src: "/dental_office.jpg" },
    ],
  },

  {
    group: "Dental Equipment Sterilization Room",
    items: [
      { title: "Sterilization Room", src: "/dental_sterile.jpg" },
      { title: "Sterilization Equipment", src: "/autoclave.jpg" },
    ],
  },

  {
    group: "Dental Treatment Room",
    items: [
      { title: "Dental Chair Unit 1", src: "/dental_unit1.jpg" },
      { title: "Dental Chair Unit 2", src: "/dental_unit2.jpg" },
    ],
  },
];


export default function Facility() {
  return (
    <section id="facility" className="facility-section section-pad">
      <div className="container">

        <div className="text-center mb-5 facility-header-wrap fade-up-soft">
          <div className="facility-badge">Facilities</div>
          <h2 className="facility-title">Modern & Clean Clinic</h2>
          <p className="facility-sub">
            Designed for comfort, safety, and high-quality dental care.
          </p>
        </div>

        {FACILITY_GROUPS.map((group, i) => (
          <div key={i} className="facility-group-section">

            <div className="facility-group-header">
              <h3 className="facility-group-title">{group.group}</h3>
              <div className="facility-group-line"></div>
            </div>

            <div className="row g-4 mt-2">
              {group.items.map((item, idx) => (
                <div key={idx} className={`col-12 col-sm-6 col-lg-3 fade-up-soft`}>
                  <article className="facility-card-img">

                    <div className="facility-img-wrap">
                      <img src={item.src} alt={item.title} className="facility-img" />
                      <div className="facility-overlay"></div>
                    </div>

                    <p className="facility-label">{item.title}</p>
                  </article>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}