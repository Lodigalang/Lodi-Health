import Stats from "../UI/stats";
import MainDoctorImg from "../../assets/doctor-about.svg";
import SideImg1 from "../../assets/side1-doctor.svg";
import SideImg2 from "../../assets/side2-doctor.svg";
import SideImg3 from "../../assets/side3-doctor.svg";
import { Link, useLocation } from "react-router-dom";

function AboutUs(props) {
  const location = useLocation();
  return (
    <section className="bg-[#f6f6f6] py-24 w-auto h-auto" id={props.id}>
      <div className="sm:flex items-center max-w-screen-xl mx-auto">
        <div className="sm:w-1/2 p-10 flex justify-center items-center sm:block">
          <div className="relative flex justify-center items-center sm:block">
            <img
              className="hidden lg:block absolute z-20 lg:left-[2rem] -top-4 left-[1rem] 
              lg:w-[8rem] lg:h-[8rem] rounded-full object-cover"
              src={SideImg1}
              alt="Side Image"
            />
            <img
              className="hidden lg:block absolute z-20 lg:top-[12rem] sm:top-[11rem] sm:-left-[3rem] -left-[2rem] 
              lg:w-[8rem] lg:h-[8rem] rounded-full object-cover"
              src={SideImg2}
              alt="Side Image 2"
            />

            <img
              className="hidden lg:block absolute z-20 lg:top-[23rem] sm:top-[20.5rem] top-[10.5rem] left-[2rem] 
              lg:w-[8rem] lg:h-[8rem] rounded-full object-cover"
              src={SideImg3}
              alt="Side Image 3"
            />
            <img
              className="bg-[#8cdc8c]/70 rounded-full relative object-cover right-0 lg:right-10
              lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[16rem] h-[16rem] mx-auto"
              src={MainDoctorImg}
              alt="About us"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5 flex justify-center items-center">
          <div className="text w-full text-left space-y-6">
            <h2 className="my-4 font-bold text-3xl  sm:text-5xl text-[#8cdc8c] text-shadow-md">
              Kenapa Memilih Kami
            </h2>
            <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[18px]">
              Kami memahami bahwa kebutuhan akan layanan kesehatan yang cepat,
              mudah, dan terpercaya semakin penting di era digital. Itulah
              sebabnya kami hadir dengan solusi yang mengutamakan kenyamanan
              Anda cukup dari rumah, tanpa antre, kapan saja dibutuhkan.
              <br />
              <br />
              Didukung oleh tim medis profesional, teknologi yang aman, serta
              layanan yang terus aktif 24 jam, kami berkomitmen untuk memberikan
              pengalaman konsultasi yang efisien dan memuaskan. Kepercayaan
              puluhan ribu pengguna menjadi bukti bahwa kami adalah pilihan yang
              tepat untuk kebutuhan kesehatan Anda.
            </p>
            <dl className="sm:grid sm:grid-cols-4">
              <Stats label="Pasien Terdaftar" value="50000+" />
              <Stats label="Dokter Aktif" value="200+" />
              <Stats label="Jam Operasi" value="24" />
              <Stats label="Tingkat Kepuasan" value="95%" />
            </dl>
            {location.pathname === "/" && (
              <div className="text-center sm:text-left">
                <Link
                  to="/tentang-kami"
                  className="inline-block px-5 py-3 text-base font-medium text-[#434343] hover:text-white
                    bg-[#8cdc8c] rounded-sm hover:bg-[#74b174] focus:ring-4 focus:ring-gray-100 shadow-sm"
                >
                  Pelajari Selengkapnya
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
