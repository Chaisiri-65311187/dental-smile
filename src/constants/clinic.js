// src/constants/clinic.js

export const CLINIC_INFO = {
  name: "Dental Smile Pattaya",

  movedNotice: {
    en: "We moved to new office since April 2025.",
    since: "2025-04-01",
  },

  phone: "038-723460",
  phoneHref: "038723460",
  email: "contact@dentalsmilepattaya.com",

  addressMain:
    "313/42-43 Pattaya 3rd Road, near South Pattaya, Banglamung, Chonburi 20150, Thailand",
  addressTaxi:
    "313/5 Pattaya 3rd Road, near corner South Pattaya Road, Chonburi 20150, Thailand",

  nearbyLandmarks: [
    { name: "TukCom (IT & Mobile mall)", distance: "≈300 m" },
    { name: "Walking Street Pattaya", distance: "≈700 m" },
    { name: "Pattaya Beach", distance: "≈700 m" },
    { name: "Royal Garden Plaza", distance: "≈750 m" },
    { name: "Central Festival Pattaya Beach", distance: "≈2 km" },
    { name: "Sukhumvit Road", distance: "≈2 km" },
    { name: "Suvarnabhumi Bangkok Airport", distance: "≈120 km" },
  ],

  location: {
    lat: 12.924242,
    lng: 100.882485,
    googleMapUrl: "https://goo.gl/maps/Fgg9...", // ใส่ link เต็มเองได้
    embedUrl:
      "https://www.google.com/maps?q=12.924242,100.882485&z=16&output=embed",
  },

  intro: {
    shortTh:
      "คลินิกทำฟันในพัทยาให้บริการคนไข้ทั้งไทยและต่างชาติ เน้นคุณภาพ มาตรฐานสูง และราคาคุ้มกว่าเข้ารักษาในต่างประเทศ",
    longEn:
      "Dental Smile Pattaya is a nationally recognized dental clinic in Pattaya, offering cosmetic and specialist dentistry for over 18 years to both local and international patients.",
  },

  mainServiceAreas: [
    "General Dentistry",
    "Periodontics",
    "Dental Restoration",
    "Veneer",
    "Implant",
    "All on 4 Implants",
  ],

  navPages: [
    "Home",
    "Service",
    "Guarantee",
    "Staff",
    "Facility",
    "Appointment",
    "Testimonial",
    "Contact",
    "Map",
  ],

  images: {
    hero: "/d1.jpg", // เอารูปคลินิกไปวางใน public/d1.jpg
  },

  links: {
    facebook: "https://www.facebook.com/dentalsmilepattaya/?ref=embed_page#",
  },
};
