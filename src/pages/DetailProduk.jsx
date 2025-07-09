import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { getProductById, getProducts } from "../Api/produkApi";
import Keranjang from "../Components/UI/Keranjang";
import { toast } from "react-toastify";

function DetailProduk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [keranjang, setKeranjang] = useState(() => {
    const simpanan = localStorage.getItem("keranjang");
    return simpanan ? JSON.parse(simpanan) : {};
  });

  const jumlahDalamKeranjang = keranjang[id] || 0;

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduk(res);

        if (!location.state?.namaProduk) {
          navigate(`/toko-kesehatan/${id}`, {
            replace: true,
            state: { namaProduk: res.name },
          });
        }
      })
      .catch((err) => console.error("Gagal mengambil produk:", err))
      .finally(() => setLoading(false));

    getProducts()
      .then(setAllProducts)
      .catch((err) => console.error("Gagal mengambil semua produk:", err));
  }, [id, navigate, location.state]);

  useEffect(() => {
    const keyword = search.toLowerCase().trim();
    if (!keyword) return setSearchResults([]);
    const hasil = allProducts.filter(
      (item) => item.name.toLowerCase().includes(keyword) && item.id !== id
    );
    setSearchResults(hasil);
  }, [search, allProducts, id]);

  const tambahKeKeranjang = (produkId) => {
    setKeranjang((prev) => {
      const jumlahSekarang = prev[produkId] || 0;
      const stokMaksimum = produk?.stock || 0;

      if (jumlahSekarang >= stokMaksimum) {
        toast.error("Stok tidak mencukupi!");
        return prev;
      }

      const baru = { ...prev, [produkId]: jumlahSekarang + 1 };
      localStorage.setItem("keranjang", JSON.stringify(baru));
      return baru;
    });
  };

  const kurangiDariKeranjang = (produkId) => {
    setKeranjang((prev) => {
      const jumlahBaru = (prev[produkId] || 0) - 1;
      const baru = { ...prev };
      if (jumlahBaru <= 0) {
        delete baru[produkId];
      } else {
        baru[produkId] = jumlahBaru;
      }
      localStorage.setItem("keranjang", JSON.stringify(baru));
      return baru;
    });
  };

  if (loading) return <div className="p-6">Memuat detail produk...</div>;
  if (!produk)
    return <div className="p-6 text-red-600">Produk tidak ditemukan.</div>;
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12 py-16">
      <div className="mb-6 relative mt-30">
        <input
          type="text"
          placeholder="Cari produk lain..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-3 border rounded-lg"
        />
        {searchResults.length > 0 && (
          <ul className="absolute z-10 bg-white border rounded mt-1 w-full sm:w-1/2 shadow-md">
            {searchResults.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearch("");
                  navigate(`/toko-kesehatan/${item.id}`, {
                    state: { namaProduk: item.name },
                  });
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Detail Produk */}
      <section className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={produk.image}
            alt={produk.name}
            className="rounded-lg w-48 object-contain"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/200x250?text=Gambar+tidak+tersedia")
            }
          />
        </div>

        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{produk.name}</h1>
          <p className="text-lg font-semibold text-green-700 mb-1">
            Rp{Number(produk.price).toLocaleString("id-ID")}
          </p>
          <p className="text-sm text-gray-500 mb-1">{produk.unit}</p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Stok:</strong> {produk.stock}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Kategori:</strong> {produk.category}
          </p>

          <div className="flex items-center gap-4 mt-4">
            {jumlahDalamKeranjang > 0 ? (
              <>
                <button
                  onClick={() => kurangiDariKeranjang(id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-xl"
                >
                  -
                </button>
                <span className="text-lg">{jumlahDalamKeranjang}</span>
                <button
                  onClick={() => tambahKeKeranjang(id)}
                  className="px-3 py-1 bg-green-500 text-white rounded text-xl"
                >
                  +
                </button>
              </>
            ) : (
              <button
                onClick={() => tambahKeKeranjang(id)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded"
              >
                Tambah ke Keranjang
              </button>
            )}
          </div>

          <div className="mt-6">
            <strong className="block mb-2 text-lg font-bold">Deskripsi</strong>
            <p className="text-gray-700">{produk.description}</p>
          </div>
        </div>
      </section>

      <Keranjang keranjang={keranjang} produkList={allProducts} />
    </main>
  );
}

export default DetailProduk;
