import React, { createContext, useContext, useState, useEffect } from "react";

const UnderDevContext = createContext();

export function UnderDevProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const showUnderDev = () => setIsOpen(true);
  const closeUnderDev = () => setIsOpen(false);

  // 🔒 Kunci scroll saat modal aktif
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-lock");
    } else {
      document.body.classList.remove("body-lock");
    }

    // Cleanup saat unmount
    return () => document.body.classList.remove("body-lock");
  }, [isOpen]);

  return (
    <UnderDevContext.Provider value={{ showUnderDev }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="400"
        >
          <div className="bg-white rounded-xl p-6 shadow-xl text-center w-[90%] max-w-md animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Mohon Maaf 🙏
            </h2>
            <p className="text-gray-600 mb-4">
              Fitur ini saat ini sedang dalam proses pengembangan. Mohon
              kesabarannya, silakan coba kembali nanti.
            </p>
            <button
              onClick={closeUnderDev}
              className="px-4 py-2 bg-[#82c182] text-white rounded-lg hover:bg-[#75ad75]"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </UnderDevContext.Provider>
  );
}

export function useUnderDev() {
  const context = useContext(UnderDevContext);
  if (!context) {
    throw new Error("useUnderDev harus dipakai di dalam <UnderDevProvider>");
  }
  return context;
}
