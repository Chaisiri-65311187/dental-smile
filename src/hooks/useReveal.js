import { useEffect } from "react";

export function useReveal(selector = ".reveal, .reveal-stagger", rootMargin = "0px 0px -12% 0px") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add("show"); io.unobserve(e.target); }
      });
    }, {threshold:.15, rootMargin});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, [selector, rootMargin]);
}