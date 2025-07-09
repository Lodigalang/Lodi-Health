import "../main.css";
import AboutUs from "../Components/Beranda/AboutUs";
import Service from "../Components/Beranda/Service";
import OurDoctor from "../Components/Beranda/OurDoctor";
import Kontak from "../Components/Beranda/Kontak";
import Blog from "../Components/Beranda/Blog";
import Testimoni from "../Components/Beranda/Testimoni";
import Produk from "../Components/Beranda/Produk";
import HeroBeranda from "../Components/Beranda/Hero/HeroBeranda";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Beranda() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <main>
        <HeroBeranda id="beranda" />
        <AboutUs id="tentang-Kami" />
        <Service id="layanan" />
        <OurDoctor id="dokter-kami" />
        <Testimoni />
        <Produk />
        <Blog id="blog" />
        <Kontak id="kontak" />
      </main>
    </>
  );
}

export default Beranda;
