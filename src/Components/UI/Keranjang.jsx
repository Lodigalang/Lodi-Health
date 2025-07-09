import { useAuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { useFormModal } from "../Context/FormContext";
import { useUnderDev } from "../Context/UnderDevContext";

function Keranjang({ keranjang, produkList }) {
  const { user } = useAuthContext();
  const { setFormAktif } = useFormModal();
  const { showUnderDev } = useUnderDev();

  const totalItem = Object.values(keranjang).reduce((sum, qty) => sum + qty, 0);
  const totalHarga = produkList.reduce((total, item) => {
    const qty = keranjang[item.id] || 0;
    return total + item.price * qty;
  }, 0);

  if (totalItem === 0) return null;

  const handleClick = () => {
    if (user) {
      showUnderDev();
    } else {
      toast.warning("Silakan login terlebih dahulu untuk melihat keranjang.");
      setFormAktif("masuk");
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white shadow-lg p-6 z-50 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8 ">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-md font-bold">
          Total Item: <strong className="font-semibold">{totalItem}</strong>
        </p>
        <p className="text-md font-bold">
          Total Harga:{" "}
          <strong className="font-semibold">
            Rp {totalHarga.toLocaleString("id-ID")}
          </strong>
        </p>
      </div>

      <button
        onClick={handleClick}
        className="bg-[#8cdc8c] text-white py-2 px-5 rounded-lg font-semibold hover:bg-green-600 transition whitespace-nowrap"
      >
        Cek Keranjang
      </button>
    </div>
  );
}

export default Keranjang;
