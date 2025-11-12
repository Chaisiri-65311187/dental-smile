// src/hooks/useReveal.js
import { useEffect } from "react";

export function useReveal(selector = ".reveal, .reveal-stagger", rootMargin = "0px 0px -12% 0px") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (els.length === 0) return;

    // ✅ โชว์ทันที ถ้าองค์ประกอบอยู่ใน viewport ตอนโหลด
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9) el.classList.add("show");
    });

    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector, rootMargin]);
}
