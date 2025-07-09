import { useEffect, useState } from "react";
import axios from "axios";
import CardDoctor from "../Components/UI/CardDoctor";

function Konsultasi() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [categories, setCategories] = useState(["Semua"]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Lodigalang/web-health/main/dokter/doctors.json"
      )
      .then((res) => {
        setDoctors(res.data);

        // Ambil kategori unik dari specialization
        const specializations = Array.from(
          new Set(res.data.map((d) => d.specialization.trim()))
        );
        setCategories(["Semua", ...specializations]);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dokter:", err);
      });
  }, []);

  // Reset halaman saat filter berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const filteredDoctors = doctors.filter((dokter) => {
    const matchesCategory =
      activeCategory === "Semua" ||
      dokter.specialization.trim() === activeCategory;
    const matchesSearch =
      dokter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dokter.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  return (
    <div className="container mx-auto px-4 py-8 mt-35">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-shadow-md">
          Konsultasi <span className="text-[#8cdc8c]">Dokter Online</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chat langsung dengan dokter spesialis pilihan Anda kapan saja dan di
          mana saja
        </p>
      </header>

      {/* Search Input */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
        <input
          type="text"
          placeholder="Cari nama dokter atau spesialisasi..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8cdc8c]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Kategori Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition specialist-filter-btn ${
              activeCategory === cat
                ? "bg-[#8cdc8c] text-white border-[#8cdc8c]"
                : "border-gray-300 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Daftar Dokter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDoctors.length > 0 ? (
          currentDoctors.map((dokter) => (
            <CardDoctor
              key={dokter.id}
              nama={dokter.name}
              posisi={dokter.specialization}
              deskripsi={dokter.hospital}
              image={
                dokter.image.startsWith("http")
                  ? dokter.image
                  : `https://raw.githubusercontent.com/Lodigalang/web-health/main/dokter${dokter.image}`
              }
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            Tidak ada dokter ditemukan.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-1 px-4 py-2 rounded border text-sm ${
                currentPage === i + 1
                  ? "bg-[#8cdc8c] text-white border-[#8cdc8c]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Konsultasi;
