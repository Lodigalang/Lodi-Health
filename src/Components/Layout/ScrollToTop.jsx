import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Kalau sedang di Beranda, jangan lakukan apa-apa
    if (location.pathname === "/") return;

    const scrollY = location.state?.scrollY;
    const scrollTo = location.state?.scrollTo;
    const hash = location.hash;

    if (typeof scrollY === "number") {
      // Saat kembali dari halaman sebelumnya
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 50);
    } else if (scrollTo) {
      // Saat navigate dan ingin scroll ke elemen tertentu
      const el = document.getElementById(scrollTo);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
      }
    } else if (hash) {
      // Saat buka URL dengan hash #id
      const el = document.getElementById(hash.substring(1));
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
      }
    } else {
      // Default scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
