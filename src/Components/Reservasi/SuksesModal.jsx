function SuksesModal({ visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 max-w-md mx-4 text-center border-2 border-blue-100 shadow-2xl">
        <div className="text-green-500 text-6xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Reservasi Berhasil!
        </h2>
        <p className="text-gray-600 mb-6">
          Kami telah mengirim konfirmasi ke email Anda. Silakan bawa KTP dan
          Kartu BPJS (jika ada) saat berkunjung.
        </p>
        <button
          onClick={onClose}
          className="bg-[#70bc70] hover:bg-[#69b069] text-white px-6 py-2 font-medium rounded-lg"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

export default SuksesModal;
