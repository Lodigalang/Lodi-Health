import { Link, useNavigate } from "react-router-dom";
import { useUnderDev } from "../Context/UnderDevContext";

function Footer(props) {
  const navigate = useNavigate();
  const { showUnderDev } = useUnderDev();

  return (
    <footer
      className={`bg-gradient-to-b from-[#569956] to-[#5c905f] text-white pt-12 pb-8 ${props.className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img className="h-15 w-15" src="/Logo.png" alt="logo" />
              <span className="ml-2 text-xl font-bold">Lodi Health's</span>
            </div>
            <p className="text-gray-200">
              Solusi layanan kesehatan digital terpercaya untuk keluarga
              Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="" className="text-gray-200 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="" className="text-gray-200 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.394 3H17.23L12.74 8.856 8.586 3H2.002l7.232 10.127L2.202 21H5.367l4.933-6.38L15.696 21h6.583l-7.68-10.746L20.394 3Zm-3.5 2.018h.886l-9.27 12.53H7.628l9.266-12.53Z" />
                </svg>
              </a>
              <a href="" className="text-gray-200 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="" className="text-gray-200 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang-kami"
                  className="text-gray-200 hover:text-white transition"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    navigate("/", { state: { scrollTo: "layanan" } })
                  }
                  className="text-gray-200 hover:text-white transition"
                >
                  Layanan Kami
                </button>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-200 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() =>
                    navigate("/", { state: { scrollTo: "kontak" } })
                  }
                  className="text-gray-200 hover:text-white transition"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={showUnderDev}
                  className="text-gray-200 hover:text-white transition"
                >
                  Homecare
                </button>
              </li>
              <li>
                <Link
                  to="/toko-kesehatan"
                  className="text-gray-200 hover:text-white transition"
                >
                  Toko Kesehatan
                </Link>
              </li>
              <li>
                <Link
                  to="/konsultasi-online"
                  className="text-gray-200 hover:text-white transition"
                >
                  Konsultasi Online
                </Link>
              </li>
              <li>
                <Link
                  to="/reservasi-klinik"
                  className="text-gray-200 hover:text-white transition"
                >
                  Reservasi Klinik
                </Link>
              </li>
              <li>
                <button
                  onClick={showUnderDev}
                  className="text-gray-200 hover:text-white transition"
                >
                  Cek Kesehatan Mandiri
                </button>
              </li>
              <li>
                <button
                  onClick={showUnderDev}
                  className="text-gray-200 hover:text-white transition"
                >
                  Perawatan Khusus
                </button>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>Jl. Sehat Sentosa No. 88</p>
              <p>Surabaya, Indonesia</p>

              <p className="mt-2">
                Email:{" "}
                <a href="" className="hover:text-white transition">
                  cs@lodihealth.id
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="" className="hover:text-white transition">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#2b2b2b] text-sm mb-4 md:mb-0">
            © 2025 Lodi Health's. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-[#2b2b2b] hover:text-[#ffffff] text-sm transition"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="text-[#2b2b2b] hover:text-[#ffffff] text-sm transition"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-[#2b2b2b] hover:text-[#ffffff] text-sm transition"
            >
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
