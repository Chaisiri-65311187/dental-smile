// src/constants/clinic.js

export const CLINIC_INFO = {
  name: "Dental Smile Pattaya",

  tagline: "Honest dentist in Pattaya with over 18 years",

  movedNotice: {
    text: "We moved to new office since April 2025.",
    since: "2025-04-01",
  },

  // Contact
  phone: "038-723460",
  phoneHref: "038723460",
  email: "contact@dentalsmilepattaya.com",

  // Address ตาม footer ของเว็บ
  addressMain:
    "313/42-43 Pattaya 3rd. Road near South Pattaya, Banglamung, Chonburi 20150, Thailand",

  addressTaxi:
    "313/5 Pattaya 3rd. Road near South Pattaya corner, Banglamung, Chonburi 20150, Thailand",

  // เนื้อหา hero + เหตุผลจากหน้า Home
  hero: {
    welcomeHeadline: "Welcome to Dental Smile Pattaya!",
    intro: [
      "We offer affordable dental treatment in Pattaya, Thailand, while you enjoy your holiday in a beach city close to Bangkok.",
      "Dental Smile Pattaya is nationally recognized with over 18 years’ experience. We provide cosmetic and specialist dentistry with warm, gentle care so you can feel confident to smile again.",
    ],
  },

  whyChoose: [
    "Huge savings on your dental bill up to 50–70% compared with local prices.",
    "Over 5,000 satisfied patients annually.",
    "World class cosmetic dentist with quality dental treatments.",
    "Unforgettable holiday in colorful Pattaya city.",
    "Fluent English-speaking staff and experienced dentists.",
    "Full dental services and one-stop for dental treatments.",
    "Warranty on your dental treatments.",
    "Up-to-date professional knowledge and state-of-the-art technology.",
    "Focus on patients – we value satisfaction and want everyone to walk away with a smile.",
  ],

  navMain: [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#guarantee", label: "Guarantee" },
    { href: "#team", label: "Staff" },
    { href: "#facility", label: "Facility" },
    { href: "#contact", label: "Contact" },
    { href: "#map", label: "Map" },
  ],

  images: {
    hero: "/d1.jpg", // วางรูปคลินิกใน public/d1.jpg
  },

  links: {
    facebook: "https://www.facebook.com/dentalsmilepattaya/?ref=embed_page#",
    map: "https://www.dentalsmilepattaya.com/map.html",
  },
};
