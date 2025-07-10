import { useState, useEffect } from "react";
import CardProduk from "../UI/CardProduk";
import { getProducts } from "../../Api/produkApi";
import { Link } from "react-router-dom";

function Produk(props) {
  const [produkList, setProdukList] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      // Acak urutan produk
      const acak = data.sort(() => Math.random() - 0.5);
      // Ambil 4 produk pertama dari hasil acakan
      setProdukList(acak.slice(0, 4));
    });
  }, []);
  return (
    <section className="py-20 my-16 bg-white" id={props.id}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 w-full">
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            data-aos="fade-right"
          >
            Beli <span className="text-[#4CAF50]">Obat </span> &{" "}
            <span className="text-[#4CAF50]">Suplemen </span> Kesehatan
          </h2>
        </div>

        <div className="lg:w-3/4 w-full flex flex-col gap-4">
          <CardProduk produkList={produkList} />

          <div className="mt-4 text-left" data-aos="zoom-in">
            <Link
              to="/toko-kesehatan"
              className="text-[#8cdc8c] font-bold text-lg hover:underline inline-flex items-center"
            >
              Lihat Semua Obat Vitamin & Suplemen
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produk;
