// src/components/Guarantee.jsx
import React from "react";
import "../styles/guarantee.css";

const WARRANTY_TEXT = [
  "Due to the professional care provided, Dental Smile Pattaya can offer warranties on dental treatments.",
  "Long-term success also depends on good home care and regular check-ups; the final responsibility for oral health rests with the patient.",
  "The guarantee covers the clinic’s time and material costs, but does not cover travel, accommodation or other consequential expenses.",
];

const WARRANTY_ITEMS = [
  {
    treatment: "Dental crown and bridge",
    warranty:
      "Replace or repair the same type at no extra charge during 3 years.",
  },
  {
    treatment: "Dental veneer",
    warranty:
      "Replace or repair the same type at no extra charge during 3 years.",
  },
  {
    treatment: "Dental fillings",
    warranty:
      "Composite restorations will be replaced or repaired for 2 years from placement date if they fail.",
  },
  {
    treatment: "Dentures",
    warranty:
      "Repairs for 3 years from placement date if a tooth or flange chips or breaks.",
  },
  {
    treatment: "Implant screw",
    warranty:
      "Replace or repair the same type of titanium implant fixtures during 5 years.",
  },
  {
    treatment: "Crown on implant",
    warranty:
      "Replace or repair the same type of crown on implant during 3 years.",
  },
];

const WARRANTY_EXCLUSIONS = [
  "If patient fails to attend regular professional exams or oral hygiene is neglected.",
  "If dentist’s instructions are not followed properly.",
  "Accidents, sports injuries or facial trauma.",
  "Smoker patients.",
  "Illness affecting the mouth (e.g. diabetes, epilepsy, osteoporosis, chemotherapy).",
  "Existing gum disease, periodontal problems or unforeseen root canal treatment.",
  "If continuing dental work is performed by other dentists.",
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="section-pad guarantee-section">
      <div className="container">
        <div className="text-center mb-5">
            <span className="warranty-pill d-inline-flex align-items-center gap-2 glass mb-3">
                <span style={{color: '#3b82f6'}}>🛡️</span>
                Clear warranty and transparent conditions
            </span>
            <h2 className="h2 fw-bold text-ink mb-2">Treatment warranty</h2>
            <p className="small text-ink-3 mb-0">
              Dental Smile Pattaya provides warranty on many dental treatments,
              reflecting confidence in the quality of care.
            </p>
        </div>

        <div className="row g-4 justify-content-center">
            {/* Card 1: Warranty Items */}
          <div className="col-lg-7">
            {/* ใช้ class guarantee-card และ card-soft */}
            <div className="card card-soft guarantee-card mb-3">
              <div className="card-body p-3 p-md-4">
                <h3 className="h6 fw-bold text-ink mb-3">
                  Warranty periods
                </h3>
                <div className="table-responsive">
                  <table className="table tiny align-middle mb-0">
                    <thead>
                      <tr>
                        <th className="text-ink-3">Treatment</th>
                        <th className="text-ink-3">Our warranty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {WARRANTY_ITEMS.map((item) => (
                        <tr key={item.treatment}>
                          <td className="text-ink tiny fw-semibold">
                            {item.treatment}
                          </td>
                          <td className="text-ink-3 tiny">{item.warranty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Card 2: Exclusions */}
            {/* ใช้ class guarantee-card และ card-soft */}
            <div className="card card-soft guarantee-card bg-light-subtle">
              <div className="card-body p-3 p-md-4">
                <h3 className="h6 fw-bold text-ink mb-2">
                  Warranty conditions & exclusions
                </h3>
                <ul className="tiny text-ink-3 mb-0 guarantee-list">
                  {WARRANTY_EXCLUSIONS.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Side Text (ย้ายไปอยู่ด้านล่างตารางในคอลัมน์ใหม่) */}
          <div className="col-lg-5">
            <div className="p-3 p-md-4 bg-soft-ink rounded-4 h-100 d-flex flex-column justify-content-center">
              <h3 className="h6 fw-bold text-ink mb-3">Important information</h3>
              {WARRANTY_TEXT.map((p) => (
                <p key={p} className="small text-ink-3 mb-2">
                  {p}
                </p>
              ))}
              <p className="small text-ink-3 mb-0 mt-2 fw-semibold">
                Refunds are not included in the warranty. To invoke the warranty
                you must contact the clinic first, before taking any other action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}