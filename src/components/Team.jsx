// src/components/Team.jsx
import React from "react";
import "../styles/team.css";

const DOCTORS = [
  {
    name: "Dr. Patcharin Nanthaekaphong",
    nickname: "Dr. Cherry",
    role: "Prosthodontist & Implant Dentist",
    education: [
      "DDS (Honours), Mahidol University",
      "Master in Prosthodontics, Mahidol University",
      "Implant training (Bern, AIC and others)",
    ],
  },
  {
    name: "Dr. Pabhinvitch Vipatbovonwong",
    nickname: "Dr. Tob",
    role: "Orthodontist",
    education: [
      "DDS, Khon Kaen University",
      "MSc (Orthodontics), Khon Kaen University",
    ],
  },
  {
    name: "Dr. Assawinee Thimsang",
    nickname: "Dr. Ae",
    role: "Periodontist",
    education: [
      "DDS (Honours), Mahidol University",
      "MSc (Periodontics), Mahidol University",
      "Diplomate, Thai Board of Periodontics",
    ],
  },
  {
    name: "Dr. Surpun Srikume",
    nickname: "Dr. Nung",
    role: "Endodontist",
    education: [
      "DDS (Honours), Srinakharinvirot University",
      "MSc (Endodontics), Srinakharinvirot University",
    ],
  },
  {
    name: "Dr. Woradet Phichaiutkrit",
    nickname: "Dr. Boy",
    role: "Advanced General Dentistry",
    education: [
      "DDS, Mahidol University",
      "MSc in General Dentistry, Khon Kaen University",
    ],
  },
  {
    name: "Dr. Chaichan Sangsirinakakul",
    nickname: "Dr. Gui",
    role: "Advanced General Dentistry",
    education: [
      "DDS, Khon Kaen University",
      "MSc in General Dentistry, Khon Kaen University",
    ],
  },
  {
    name: "Dr. Jureeporn Piladist",
    nickname: "Dr. Numaoi",
    role: "General Dentistry",
    education: ["DDS, Chulalongkorn University"],
  },
  {
    name: "Dr. Lalita Rutchakitprakarn",
    nickname: "Dr. Ann",
    role: "General Dentistry",
    education: ["DDS, Thammasat University"],
  },
  {
    name: "Dr. Chatchai Tharanont",
    nickname: "Dr. Chai",
    role: "General Dentistry",
    education: ["DDS, Mahidol University"],
  },
];

function getDoctorImage(doc) {
  const nickSlug =
    doc.nickname
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "doctor";
  return `/staff/${nickSlug}.jpg`;
}

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop";

export default function Team() {
  return (
    <section id="team" className="section-pad team-section">
      <div className="container">
        <div className="text-center mb-4">
          <span className="team-badge">Dentist team</span>
          <h2 className="team-title">Specialist & general dentists</h2>
          <p className="team-sub">
            A friendly team of specialists and general dentists working
            together for your smile.
          </p>
        </div>

        <div className="row g-4">
          {DOCTORS.map((doc) => (
            <div className="col-md-6 col-lg-4" key={doc.name}>
              <article className="team-card">
                <div className="team-img-wrapper">
                  <img
                    src={getDoctorImage(doc)}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMG;
                    }}
                    alt={doc.name}
                    className="team-img"
                  />
                </div>

                <div className="team-body">
                  <h3 className="team-name">{doc.name}</h3>
                  <div className="team-role">{doc.role}</div>
                  <ul className="team-edu">
                    {doc.education.map((ed) => (
                      <li key={ed}>{ed}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
