// ข้อมูลจริงจากเว็บไซต์ Dental Smile Pattaya (ปรับใช้เป็น mock data)
export const CLINIC = {
  name: "Dental Smile Pattaya",
  phone: "038-723460",
  phoneHref: "038723460", // สำหรับ href=tel:
  email: "contact@dentalsmilepattaya.com",
   images: {
    hero: "/d1.jpg", // ✅ จะถูกโหลดจาก public/d1.jpg
  },

  // ที่อยู่: หน้า Contact/Service ใช้ 313/42-43 (หน้า Home/Map มี 313/5)
  // ถ้าต้องการให้ใช้เลขเดียวทั้งเว็บ เปลี่ยนได้ตรงนี้จุดเดียว
  address: "313/42–43 Pattaya 3rd Road, Near South Pattaya, Banglamung, Chonburi 20150",
  address_alt: "313/5 Pattaya 3rd Road, Near South Pattaya, Banglamung, Chonburi 20150",

  // พิกัดจากหน้า Map
  lat: 12.924242,
  lng: 100.882485,

  map: {
    // ฝัง Google Map ด้วย lat,lng (คุณจะใช้ <iframe> เดิมของคุณก็ได้)
    embed: "https://www.google.com/maps?q=12.924242,100.882485&z=16&output=embed",
  },

  // เมนู/บริการหลักที่ระบุบนเว็บ
  services: [
    { key: "general",       title: "General Dentistry",     href: "#general" },
    { key: "periodontics",  title: "Periodontics",          href: "#periodontics" },
    { key: "restoration",   title: "Dental Restoration",    href: "#restoration" },
    { key: "veneer",        title: "Veneer",                href: "#veneer" },
    { key: "implant",       title: "Implant",               href: "#implant" },
    { key: "allon4",        title: "All-on-4 Implants",     href: "#all-on-4" },
  ],

  links: {
    appointment: "#appointment",
    contact: "#contact",
    map: "#map",
  },

  // รูปภาพ: ตั้งชื่อไฟล์ภาพหน้าคลินิกใน public/ แล้วอ้างตรงนี้
  images: {
    hero: "/clinic-front.jpg", // ใส่รูปหน้าตึกไว้ที่ public/clinic-front.jpg
  },
};
