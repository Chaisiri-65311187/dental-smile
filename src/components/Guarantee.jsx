// src/components/Guarantee.jsx
import React from "react";
import "../styles/guarantee.css";

const WARRANTY_TEXT = [
  "We provide warranties on many treatments as a sign of confidence in our work.",
  "Good brushing, flossing and regular check-ups are still essential.",
];

const WARRANTY_ITEMS = [
  {
    treatment: "Dental crown and bridge",
    warranty: "Repair / replace same type for 3 years.",
  },
  {
    treatment: "Dental veneer",
    warranty: "Repair / replace same type for 3 years.",
  },
  {
    treatment: "Dental fillings",
    warranty: "Composite fillings covered for 2 years.",
  },
  {
    treatment: "Dentures",
    warranty: "Repairs for 3 years if teeth or base chip / break.",
  },
  {
    treatment: "Implant screw",
    warranty: "Titanium fixture repair / replace for 5 years.",
  },
  {
    treatment: "Crown on implant",
    warranty: "Crown on implant repair / replace for 3 years.",
  },
];

const WARRANTY_EXCLUSIONS = [
  "Missed check-ups or poor oral hygiene.",
  "Not following the dentist’s instructions.",
  "Accidents, sports injuries or trauma.",
  "Smoking or heavy clenching / grinding.",
  "Medical conditions such as diabetes or chemotherapy.",
  "Gum disease or untreated periodontal problems.",
  "Work performed or changed by another dentist.",
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="guarantee-section section-pad">
      <div className="container">
        <div className="text-center mb-4">
          <span className="warranty-pill">Treatment warranty</span>
          <h2 className="guarantee-title">Clear warranty policy</h2>
          <p className="guarantee-sub">
            Simple conditions so you know exactly what is covered.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-7">
            <div className="guarantee-card">
              <div className="guarantee-card-body">
                <h3 className="guarantee-card-title">Warranty periods</h3>
                <div className="table-responsive">
                  <table className="table table-sm align-middle mb-0 guarantee-table">
                    <thead>
                      <tr>
                        <th>Treatment</th>
                        <th>Our warranty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {WARRANTY_ITEMS.map((item) => (
                        <tr key={item.treatment}>
                          <td>{item.treatment}</td>
                          <td>{item.warranty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="guarantee-card guarantee-card-soft">
              <div className="guarantee-card-body">
                <h3 className="guarantee-card-title">When it doesn’t apply</h3>
                <ul className="guarantee-list">
                  {WARRANTY_EXCLUSIONS.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="guarantee-side">
              <h3 className="guarantee-side-title">Good to know</h3>
              {WARRANTY_TEXT.map((p) => (
                <p key={p} className="guarantee-side-text">
                  {p}
                </p>
              ))}
              <p className="guarantee-side-text">
                Refunds are not part of the warranty. Please contact us first
                before having work done elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
