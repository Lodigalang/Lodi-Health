import { useEffect, useRef, useState } from "react";

function CardStats(props) {
  const { label, value = 0, delay = 0, duration = 3000 } = props;

  // State untuk angka yang sedang ditampilkan selama animasi
  const [displayed, setDisplayed] = useState(0);

  // Flag agar animasi hanya dijalankan sekali saat elemen terlihat pertama kali
  const [hasAnimated, setHasAnimated] = useState(false);

  // Referensi DOM elemen utama komponen
  const elementRef = useRef(null);

  // Referensi ke frame animasi (untuk membatalkan jika perlu)
  const animationRef = useRef(null);

  // Saat komponen mount, atur IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen terlihat di viewport & belum pernah dianimasikan
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // tandai sebagai sudah dianimasikan
          setTimeout(() => startCountUp(), delay); // mulai animasi setelah delay
          observer.unobserve(entry.target); // hentikan observer (sekali animasi saja)
        }
      },
      { threshold: 0.5 } // elemen dianggap terlihat jika 50% terlihat di layar
    );

    const current = elementRef.current;
    if (current) observer.observe(current); // mulai observe elemen

    // Cleanup saat komponen unmount
    return () => {
      if (current) observer.unobserve(current); // stop observe
      cancelAnimationFrame(animationRef.current); // hentikan animasi jika masih berjalan
    };
  }, []);

  // Fungsi untuk animasi angka naik (count up)
  const startCountUp = () => {
    // Ambil nilai angka murni (misal dari "50K+" jadi 50000)
    const target =
      typeof value === "string"
        ? parseFloat(value.replace(/[^\d]/g, "")) // hilangkan karakter non-digit
        : value;

    // Ambil suffix seperti "+" atau "%" dari string (misal "98%" → "%")
    const suffix =
      (typeof value === "string" && /[^\d]+$/.exec(value)?.[0]) || "";

    const startTime = performance.now(); // waktu awal animasi

    // Fungsi update per frame animasi
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // progres antara 0 - 1

      const currentValue = Math.floor(progress * target); // nilai saat ini berdasarkan progres
      setDisplayed(currentValue); // tampilkan di UI

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(update); // lanjut frame berikutnya
      } else {
        setDisplayed(target); // pastikan nilai akhir pas
      }
    };

    // Mulai animasi pertama
    animationRef.current = requestAnimationFrame(update);
  };

  return (
    <div ref={elementRef} className="flex flex-col text-center">
      <dt className="order-2 mt-2 text-xs lg:text-sm leading-6 font-medium text-gray-500">
        {label}
      </dt>
      <dd className="order-1 text-lg lg:text-3xl font-extrabold text-gray-700">
        {displayed.toLocaleString()}
        {typeof value === "string" && /[^\d]+$/.exec(value)?.[0]}
      </dd>
    </div>
  );
}

export default CardStats;
