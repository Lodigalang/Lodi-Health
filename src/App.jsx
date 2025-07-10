import { Routes, Route, useLocation } from "react-router-dom";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer";
import ScrollToTop from "./Components/Layout/ScrollToTop";
import Artikel from "./pages/Artikel";
import TokoKesehatan from "./pages/TokoKesehatan";
import DetailProduk from "./pages/DetailProduk";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Setting from "./pages/setting";
import Reservasi from "./pages/Reservasi";
import Konsultasi from "./pages/Konsultasi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const hideLayoutPaths = ["/setting", "/reservasi-klinik"];
  const hideLayout = hideLayoutPaths.includes(location.pathname);

  const navLinks = [
    { label: "Beranda", href: "#beranda", isInternal: true },
    { label: "Tentang Kami", href: "#tentang-Kami", isInternal: true },
    { label: "Layanan Kami", href: "#layanan", isInternal: true },
    { label: "Blog", href: "#blog", isInternal: true },
    { label: "Kontak", href: "#kontak", isInternal: true },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  return (
    <>
      <header>
        {!hideLayout && <Navbar brand="Lodi Health's" links={navLinks} />}
      </header>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/blog" element={<Artikel />} />
        <Route path="/toko-kesehatan" element={<TokoKesehatan />} />
        <Route path="/toko-kesehatan/:id" element={<DetailProduk />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/reservasi-klinik" element={<Reservasi />} />
        <Route path="/konsultasi-online" element={<Konsultasi />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
      />
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
