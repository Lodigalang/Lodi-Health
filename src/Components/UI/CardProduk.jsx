import { Link, useLocation } from "react-router-dom";

function CardProduk(props) {
  const location = useLocation();

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 sm:grid sm:grid-cols-2 xl:grid-cols-4 sm:gap-8 min-w-[600px] sm:min-w-0">
        {props.produkList.map((produk, index) => {
          const jumlah = props.keranjang?.[produk.id] || 0;
          return (
            <div
              key={produk.id}
              className="min-w-[250px] max-w-[250px] sm:min-w-0 sm:max-w-full bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex-shrink-0 sm:flex-shrink"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <Link to={`/toko-kesehatan/${produk.id}`}>
                <img
                  src={produk.image}
                  alt={produk.name}
                  className="h-64 w-full object-contain p-5"
                />
              </Link>
              <div className="px-5 pb-5">
                <p className="text-base font-semibold text-gray-800 leading-snug mb-1">
                  {produk.name}
                </p>
                <p className="text-sm text-gray-500 mb-1">{produk.unit}</p>
                <p className="text-base text-gray-800 font-semibold mb-4">
                  Rp
                  {typeof produk.price === "number"
                    ? produk.price.toLocaleString("id-ID")
                    : "N/A"}
                </p>

                {location.pathname === "/toko-kesehatan" ? (
                  jumlah === 0 ? (
                    <button
                      onClick={() => props.tambah(produk)}
                      className="w-full text-[#8cdc8c] border border-[#8cdc8c] rounded-md py-2 hover:bg-gray-100 text-lg font-semibold"
                    >
                      Tambah
                    </button>
                  ) : (
                    <div className="flex justify-between items-center border border-[#8cdc8c] rounded-md py-1 px-2">
                      <button
                        onClick={() => props.kurang(produk)}
                        className="text-[#8cdc8c] font-bold text-lg px-2 hover:text-pink-600"
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg">{jumlah}</span>
                      <button
                        onClick={() => props.tambah(produk)}
                        className="text-[#8cdc8c] font-bold text-lg px-2 hover:text-green-600"
                      >
                        +
                      </button>
                    </div>
                  )
                ) : (
                  <Link to={`/toko-kesehatan/${produk.id}`}>
                    <button className="w-full text-[#8cdc8c] border border-[#8cdc8c] rounded-md py-2 hover:bg-gray-200 text-lg font-semibold">
                      Cek Sekarang
                    </button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardProduk;
