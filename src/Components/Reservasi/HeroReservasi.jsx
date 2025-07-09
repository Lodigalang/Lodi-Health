import { Link } from "react-router-dom";

function HeroReservasi() {
  return (
    <div className="text-white py-16 bg-gradient-to-b from-[#569956] to-[#5c905f]">
      <div className="absolute top-5 left-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-gray-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Sistem Booking Rumah Sakit
        </h1>
        <p className="text-lg md:text-xl">
          Reservasi Dokter Spesialis - Poliklinik - Rumah Sakit
        </p>
      </div>
    </div>
  );
}

export default HeroReservasi;
