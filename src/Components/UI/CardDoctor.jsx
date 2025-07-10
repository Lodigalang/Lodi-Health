import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormModal } from "../Context/FormContext";
import { useUnderDev } from "../Context/UnderDevContext";
import { useAuthContext } from "../Context/AuthContext";

function CardDoctor(props) {
  const location = useLocation();
  const isKonsultasiPage = location.pathname === "/konsultasi-online";
  const { showUnderDev } = useUnderDev();
  const { user } = useAuthContext();
  const { setFormAktif } = useFormModal();

  const handleClick = () => {
    if (user) {
      showUnderDev();
    } else {
      toast.warning("Silakan login terlebih dahulu untuk chat dokter.");
      setFormAktif("masuk");
    }
  };

  return (
    <div
      className=" w-full  lg:max-w-full lg:flex mx-auto my-5 justify-center hover:-translate-y-1 group transition-all duration-300 shadow-md hover:shadow-2xl"
      data-aos="zoom-in"
      data-aos-delay={props.delay || 0}
      data-aos-duration="1000"
    >
      <div
        className={`${
          isKonsultasiPage
            ? "h-60 lg:h-auto lg:w-50 mr-5"
            : "h-60 lg:h-auto lg:w-48"
        } flex-none bg-cover lg:bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`}
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
      <div className="border-r border-b border-l border-white lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
        <div className="card-doctor-title">
          <h2 className="text-gray-900 font-bold text-xl mb-2 group-hover:text-[#8cdc8c] ease-in-out">
            {props.nama}
          </h2>
          <p className="text-sm text-gray-600">{props.posisi}</p>
          {!isKonsultasiPage && (
            <p className="text-gray-500 text-base mt-4">{props.deskripsi}</p>
          )}

          {isKonsultasiPage && (
            <p className="text-[#8cdc8c] font-semibold mt-3">
              Biaya Konsultasi: Rpxxxxx
            </p>
          )}
        </div>

        <div className="my-4 flex">
          <a href="#" aria-label="Facebook">
            <svg
              className="mr-3 text-gray-600 hover:text-[#1877F2]"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8v-2.89h2.44V9.8c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.18 2.15.18v2.37h-1.21c-1.2 0-1.57.75-1.57 1.52v1.83h2.67l-.43 2.89h-2.24v6.99C18.34 21.13 22 17 22 12Z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg
              className="mr-3 text-gray-600 hover:text-black"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.5 2H17.4L12 8.8L6.6 2H2L10 12L2 22H6.6L12 15.2L17.4 22H21.5L13.5 12L21.5 2Z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg
              className="mr-3 text-gray-600 hover:text-[#E1306C] transition duration-200"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z" />
            </svg>
          </a>
        </div>
        {isKonsultasiPage && (
          <div className="mt-4">
            <button
              className="w-full bg-[#8cdc8c] hover:bg-[#6faf6f] text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              onClick={handleClick}
            >
              Chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardDoctor;
