import React, { useEffect, useState } from "react";
import { getProducts } from "../Api/produkApi";
import CardProduk from "../Components/UI/CardProduk";
import Keranjang from "../Components/UI/Keranjang";
import { toast } from "react-toastify";

function TokoKesehatan() {
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 8;

  const [keranjang, setKeranjang] = useState(() => {
    const saved = localStorage.getItem("keranjang");
    return saved ? JSON.parse(saved) : {};
  });

  const tambahKeKeranjang = (produk) => {
    const stok = produk.stock;
    const jumlahSaatIni = keranjang[produk.id] || 0;

    if (jumlahSaatIni >= stok) {
      toast.error("Stok tidak mencukupi!");
      return;
    }

    setKeranjang((prev) => {
      const baru = { ...prev, [produk.id]: jumlahSaatIni + 1 };
      return baru;
    });
  };

  const kurangiDariKeranjang = (produk) => {
    setKeranjang((prev) => {
      const jumlah = (prev[produk.id] || 0) - 1;
      const updated = { ...prev };
      if (jumlah <= 0) {
        delete updated[produk.id];
      } else {
        updated[produk.id] = jumlah;
      }
      return updated;
    });
  };
  useEffect(() => {
    if (Object.keys(keranjang).length === 0) {
      localStorage.removeItem("keranjang");
    } else {
      localStorage.setItem("keranjang", JSON.stringify(keranjang));
    }
  }, [keranjang]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setAllProducts(res);

        const uniqueCategories = [
          "Semua",
          ...Array.from(new Set(res.map((item) => item.category))),
        ];

        setCategories(uniqueCategories);
        setFiltered(res);
      })
      .catch((err) => console.error("Gagal memuat produk:", err));
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();

    const hasil = allProducts.filter((item) => {
      const cocokNama = item.name?.toLowerCase().includes(keyword);
      const cocokKategori = category === "Semua" || item.category === category;
      return cocokNama && cocokKategori;
    });

    setFiltered(hasil);
    setCurrentPage(1);
  }, [search, category, allProducts]);

  const totalPage = Math.ceil(filtered.length / perPage);
  const dataTampil = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section className="px-4 py-8">
      <div className="mt-30">
        <h1
          className="text-5xl font-bold text-center mb-8 text-shadow-md"
          data-aos="zoom-in-down"
        >
          Daftar <span className="text-[#8cdc8c]">Produk Obat</span>
        </h1>

        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
          data-aos="zoom-in"
        >
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 p-3 border rounded-lg"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((kat, index) => (
              <button
                key={kat}
                onClick={() => setCategory(kat)}
                className={`px-3 py-1 text-sm rounded-full border transition ${
                  category === kat
                    ? "bg-[#8cdc8c] text-white border-[#8cdc8c]"
                    : "bg-white text-gray-600 border-gray-300 hover:border-[#8cdc8c]"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                {kat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kartu Produk */}
      <CardProduk
        produkList={dataTampil}
        keranjang={keranjang}
        tambah={tambahKeKeranjang}
        kurang={kurangiDariKeranjang}
      />

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {[...Array(totalPage)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-500"
            }`}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-duration="600"
          >
            {i + 1}
          </button>
        ))}
      </div>
      <Keranjang keranjang={keranjang} produkList={allProducts} />
    </section>
  );
}

export default TokoKesehatan;
