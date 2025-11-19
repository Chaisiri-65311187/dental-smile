// src/components/Team.jsx
import React from "react";
import "../styles/team.css";

const DOCTORS = [
  // ... (ข้อมูลแพทย์ยังคงเดิม)
  {
    name: "Dr. Patcharin Nanthaekaphong",
    nickname: "Dr. Cherry",
    role: "Prosthodontist & Implant Dentist",
    education: [
      "Doctor of Dental Surgery (Honours), Mahidol University",
      "Master in Prosthodontics Dentistry, Mahidol University",
      "Certificates in Surgical & Prosthetic Implant Dentistry (Bern University Swiss, AIC and others)",
    ],
  },
  {
    name: "Dr. Pabhinvitch Vipatbovonwong",
    nickname: "Dr. Tob",
    role: "Orthodontist",
    education: [
      "Doctor of Dental Surgery, Khon Kaen University",
      "Master of Science in Dentistry (Orthodontics), Khon Kaen University",
    ],
  },
  {
    name: "Dr. Assawinee Thimsang",
    nickname: "Dr. Ae",
    role: "Periodontist",
    education: [
      "Doctor of Dental Surgery (Honours), Mahidol University",
      "Master of Science in Dentistry (Periodontics), Mahidol University",
      "Diplomate, Thai Board of Periodontics",
    ],
  },
  {
    name: "Dr. Surpun Srikume",
    nickname: "Dr. Nung",
    role: "Endodontist",
    education: [
      "Doctor of Dental Surgery (Honours), Srinakharinvirot University",
      "Master of Science in Dentistry (Endodontics), Srinakharinvirot University",
    ],
  },
  {
    name: "Dr. Woradet Phichaiutkrit",
    nickname: "Dr. Boy",
    role: "Advanced General Dentistry",
    education: [
      "Doctor of Dental Surgery, Mahidol University",
      "Master of Science in General Dentistry, Khon Kaen University",
    ],
  },
  {
    name: "Dr. Chaichan Sangsirinakagul",
    nickname: "Dr. Gui",
    role: "Advanced General Dentistry",
    education: [
      "Doctor of Dental Surgery, Khon Kaen University",
      "Master of Science in General Dentistry, Khon Kaen University",
    ],
  },
  {
    name: "Dr. Jureeporn Piladist",
    nickname: "Dr. Numaoi",
    role: "General Dentistry",
    education: [
      "Doctor of Dental Surgery, Chulalongkorn University",
    ],
  },
  {
    name: "Dr. Lalita Rutchakitprakarn",
    nickname: "Dr. Ann",
    role: "General Dentistry",
    education: [
      "Doctor of Dental Surgery, Thammasat University",
    ],
  },
  {
    name: "Dr. Chatchai Tharanont",
    nickname: "Dr. Chai",
    role: "General Dentistry",
    education: [
      "Doctor of Dental Surgery, Mahidol University",
    ],
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
    <section id="team" className="section-pad section-fade">
      <div className="container">
        {/* ลบ class "reveal" ออก */}
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold text-ink mb-2">Our dentist team</h2>
          <p className="small text-ink-3 mb-0">
            Experienced prosthodontists, implant dentists, orthodontists and
            general dentists providing comprehensive care.
          </p>
        </div>

        {/* ลบ class "reveal-stagger" ออก */}
        <div className="row g-4">
          {DOCTORS.map((doc) => (
            <div className="col-md-6 col-lg-4" key={doc.name}>
              <article className="team-card h-100 p-4 d-flex flex-column align-items-center text-center">
                
                {/* Image Wrapper */}
                <div className="team-img-wrapper mb-3">
                    <img
                      src={getDoctorImage(doc)}
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMG;
                      }}
                      alt={doc.name}
                      className="team-img"
                    />
                </div>
                
                {/* Name and Role */}
                <h3 className="h6 fw-bold text-ink mb-0 team-name">
                  {doc.name}
                </h3>
                {/* Role/Specialty */}
                <div className="tiny text-ink-3 team-specialty mb-2">
                    {doc.role}
                </div>
                
                {/* Education List */}
                <ul className="list-unstyled text-ink-3 mb-0 team-edu">
                  {doc.education.map((ed) => (
                    <li key={ed}>{ed}</li>
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