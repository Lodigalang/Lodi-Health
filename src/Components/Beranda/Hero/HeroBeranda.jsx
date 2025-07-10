import doctorImg from "../../../assets/doctor.png";
import { useFormModal } from "../../Context/FormContext";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./HeroBeranda.css";

function HeroBeranda(props) {
  const { setFormAktif } = useFormModal();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/");
    } else {
      setFormAktif("daftar");
    }
  };
  return (
    <section className="hero-background" id={props.id}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="title-hero" data-aos="fade-right">
            Akses Kesehatan Lebih Cepat & Mudah dari Rumah Anda
          </h1>
          <p className="content-hero" data-aos="fade-right">
            Konsultasi dengan dokter terpercaya, tanpa antre dan tanpa repot.
            Nikmati layanan 24/7 hanya dengan beberapa klik.
          </p>
          <button
            onClick={handleClick}
            className="start-now"
            data-aos="zoom-in"
          >
            Mulai Sekarang
          </button>
        </div>
        <div className="card-hero">
          <img
            src={doctorImg}
            alt="Doctor-img"
            className="card-img"
            data-aos="fade-left"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBeranda;
