// src/data/warranty.js

export const WARRANTY_POLICY = {
  introEn:
    "Clinic offers warranties for many treatments based on high professional care. Patients are expected to maintain home care and regular check-ups.",

  refundPolicyEn:
    "Refund is not included in the guarantee. Patients must contact the clinic before any action. Overseas dental costs with other clinics, travel and accommodation costs will not be reimbursed.",

  treatments: [
    {
      treatment: "Dental Crown and Bridge",
      durationYears: 3,
      description:
        "Replace or repair the same type of crown/bridge at no extra charge within 3 years.",
    },
    {
      treatment: "Dental Veneer",
      durationYears: 3,
      description: "Replace or repair the same type of veneer within 3 years.",
    },
    {
      treatment: "Dental Fillings",
      durationYears: 2,
      description:
        "Composite fillings will be repaired or replaced for 2 years from placement date.",
    },
    {
      treatment: "Dentures",
      durationYears: 3,
      description:
        "Repair for chipped/broken teeth or flange fracture on dentures/partials within 3 years.",
    },
    {
      treatment: "Implant Screw / Fixture",
      durationYears: 5,
      description:
        "Replace or repair the same type of titanium implant fixtures within 5 years.",
    },
    {
      treatment: "Crown on Implant",
      durationYears: 3,
      description:
        "Replace or repair the same type of crown on implant within 3 years.",
    },
  ],

  conditionsEn: [
    "Patient must keep regular recall appointments (at least every 6 months) with professional exam, X-rays and cleaning.",
    "Good oral hygiene and home care must be maintained.",
  ],

  exclusionsEn: [
    "Missed recall or neglected oral hygiene",
    "Not following dentist’s instructions",
    "Accidents, sports injuries or facial trauma",
    "Smoking",
    "Systemic illnesses affecting oral health (e.g., diabetes, chemotherapy, osteoporosis)",
    "Existing gum or periodontal disease or unforeseen root canal indications",
    "Further dental work on the same teeth by other dentists",
  ],
};
