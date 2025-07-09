import CardDoctor from "../UI/CardDoctor";
import { Link, useLocation } from "react-router-dom";

function OurDoctor() {
  const location = useLocation();
  return (
    <section className="bg-[white] py-12 px-5 max-w-screen-xl mx-auto">
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-600 text-shadow-md">
          Tim <span className="text-[#8cdc8c]">Medis Kami</span>
        </h2>
        <p className="text-[grey] text-base sm:text-lg max-w-2xl mx-auto">
          Percayakan kesehatan Anda kepada tenaga medis berpengalaman kami.
          Konsultasi online tersedia kapan saja, di mana saja
        </p>
      </div>
      <div className="sm:grid grid-cols-2 gap-6 my-5">
        <CardDoctor
          nama="dr. Budi Prasetyo"
          posisi="Dokter Umum"
          deskripsi="Berpengalaman dalam menangani pasien dengan keluhan umum dan memberikan edukasi kesehatan preventif."
          image="./dokter1.webp"
        />
        <CardDoctor
          nama="dr. Ayu Kartika, Sp.KJ"
          posisi="Psikiater"
          deskripsi="Membantu pasien dengan masalah kesehatan mental dan emosional secara profesional dan empatik."
          image="./dokter2.webp"
        />
        <CardDoctor
          nama="dr. Riko Hartanto, Sp.P"
          posisi="Spesialis Paru"
          deskripsi="Ahli dalam penanganan gangguan pernapasan seperti asma, TBC, dan infeksi saluran pernapasan."
          image="./dokter3.webp"
        />
        <CardDoctor
          nama="dr. Sinta Wijaya, Sp.KFR"
          posisi="Spesialis Rehabilitasi Medis"
          deskripsi="Menangani terapi pemulihan fisik pasca operasi atau cedera dengan pendekatan komprehensif."
          image="./dokter4.webp"
        />
      </div>
      {location.pathname === "/" && (
        <div className="flex justify-center">
          <Link
            to="/konsultasi-online"
            className="inline-flex items-center justify-center 
    px-5 py-3 sm:text-lg text-base font-medium text-center text-[#74b174] hover:text-[white]
   border border-[#74b174] rounded-sm hover:bg-[#74b174]  shadow-sm
    focus:ring-4 focus:ring-gray-100"
          >
            Konsultasi Sekarang
          </Link>
        </div>
      )}
    </section>
  );
}

export default OurDoctor;
