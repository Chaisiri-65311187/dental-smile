// src/constants/clinic.js
export const CLINIC = {
  name: "Dental Smile Pattaya",

  phone: "038-723460",
  phoneHref: "038723460", // สำหรับ href=tel:

  email: "contact@dentalsmilepattaya.com",

  address: "313/42–43 Pattaya 3rd Road, Near South Pattaya, Banglamung, Chonburi 20150",
  address_alt: "313/5 Pattaya 3rd Road, Near South Pattaya, Banglamung, Chonburi 20150",

  lat: 12.924242,
  lng: 100.882485,

  map: {
    embed: "https://www.google.com/maps?q=12.924242,100.882485&z=16&output=embed",
  },

  // ✅ รวมลิงก์ไว้ที่เดียว (อย่าซ้ำคีย์)
  links: {
    facebook: "https://www.facebook.com/dentalsmilepattaya/?ref=embed_page#",
    appointment: "#appointment",
    contact: "#contact",
    map: "#map",
  },

  // ✅ รูปใช้คีย์เดียว
  images: {
    hero: "/d1.jpg",          // หรือ "/clinic-front.jpg" ถ้ามีไฟล์ใน public/
  },

  services: [
    { key: "general",       title: "General Dentistry",     href: "#general" },
    { key: "periodontics",  title: "Periodontics",          href: "#periodontics" },
    { key: "restoration",   title: "Dental Restoration",    href: "#restoration" },
    { key: "veneer",        title: "Veneer",                href: "#veneer" },
    { key: "implant",       title: "Implant",               href: "#implant" },
    { key: "allon4",        title: "All-on-4 Implants",     href: "#all-on-4" },
  ],
};
