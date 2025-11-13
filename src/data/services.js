// src/data/services.js

export const SERVICES = [
  {
    slug: "cleaning-scaling",
    category: "General Dentistry",
    name: "Dental Cleaning & Scaling",
    description:
      "ขูดหินปูนและขัดทำความสะอาด เพื่อป้องกันฟันผุ เหงือกอักเสบ และโรคปริทันต์ ควรตรวจและขูดหินปูนปีละประมาณ 1 ครั้ง",
    items: [
      { item: "Cleaning & Scaling", priceMin: 900, priceMax: 1500, unit: "person" },
      {
        item: "Cleaning & Scaling with Airflow",
        priceMin: 1700,
        priceMax: 2200,
        unit: "person",
      },
    ],
  },
  {
    slug: "dental-filling",
    category: "General Dentistry",
    name: "Dental Filling",
    description:
      "อุดฟันด้วยอมัลกัมหรือคอมโพสิต เพื่อปิดโพรงฟันผุหรือซ่อมแซมฟันที่บิ่น/แตก ใช้เวลารักษา 1–2 ครั้ง",
    items: [
      { item: "Amalgam", priceMin: 800, priceMax: 1700, unit: "tooth" },
      { item: "White Composite", priceMin: 900, priceMax: 1800, unit: "tooth" },
    ],
  },
  {
    slug: "tooth-extraction",
    category: "General Dentistry",
    name: "Tooth Extraction",
    description: "ถอนฟันทั่วไป และผ่าฟันคุดที่ฝังลึกหรือขึ้นผิดตำแหน่ง",
    items: [
      { item: "Tooth Extraction", priceMin: 900, priceMax: 1700, unit: "tooth" },
      {
        item: "Impacted Wisdom Extraction",
        priceMin: 2000,
        priceMax: 5000,
        unit: "tooth",
      },
    ],
  },

];

