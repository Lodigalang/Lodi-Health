import CardService from "../UI/CardService";
import Homecare from "../../assets/homecare.svg";
import Toko from "../../assets/toko.svg";
import Chat from "../../assets/chat.svg";
import Reservasi from "../../assets/reservasi.svg";
import Self from "../../assets/cek-sendiri.svg";
import Khusus from "../../assets/khusus.svg";
import { Link } from "react-router-dom";
import { useUnderDev } from "../Context/UnderDevContext";

function Features(props) {
  const { showUnderDev } = useUnderDev();
  return (
    <section
      id={props.id}
      className="bg-gradient-to-b from-[#82c182] to-[#7fb883]
 min-h-screen w-full flex justify-center px-4 py-16"
    >
      <div className="flex flex-col text-center space-y-8 max-w-screen-lg w-full">
        <div className="space-y-5 px-4 pb-5">
          <h2
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-white text-shadow-md"
            data-aos="zoom-in-down"
          >
            Layanan Kami
          </h2>
          <p
            className="text-white text-base sm:text-lg max-w-2xl mx-auto"
            data-aos="zoom-in"
          >
            Kami menyediakan layanan kesehatan terbaik yang dapat disesuaikan
            dengan kebutuhan Anda. Mudah, aman, dan terpercaya langsung dari
            rumah.
          </p>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full px-4"
          data-aos-duration="3000"
        >
          <button onClick={showUnderDev}>
            <CardService
              src={Homecare}
              alt="homecare"
              title="Homecare"
              description="Jalani perawatan medis langsung dari rumah Anda tanpa harus ke klinik"
              animasi="zoom-in"
            />
          </button>
          <Link to="/toko-kesehatan">
            <CardService
              src={Toko}
              alt="toko kesehatan"
              title="Toko Kesehatan"
              description="Belanja obat dan alat kesehatan terpercaya dalam satu tempat"
              animasi="zoom-in"
              delay="300"
            />
          </Link>
          <Link to="/konsultasi-online">
            <CardService
              src={Chat}
              alt="konsultasi online"
              title="Konsultasi Online"
              description="Konsultasi dengan dokter umum & spesialis melalui video call"
              animasi="zoom-in"
              delay="600"
            />
          </Link>
          <Link to="/reservasi-klinik">
            <CardService
              src={Reservasi}
              alt="reservasi klinik"
              title="Reservasi Klinik"
              description="Booking jadwal konsultasi dokter secara online dengan mudah"
              animasi="zoom-in"
              delay="600"
            />
          </Link>
          <button onClick={showUnderDev}>
            <CardService
              src={Self}
              alt="cek kesehatan mandiri"
              title="Cek Kesehatan Mandiri"
              description="Periksa kesehatan fisik dan mental anda kapan saja secara mandiri"
              animasi="zoom-in"
              delay="300"
            />
          </button>
          <button onClick={showUnderDev}>
            <CardService
              src={Khusus}
              alt="perawatan"
              title="Perawatan Khusus"
              description="Layanan untuk lansia, pasca operasi, dan kebutuhan khusus."
              animasi="zoom-in"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
