import FormKontak from "../Form/FormKontak";

function Kontak(props) {
  return (
    <section
      className="bg-white min-h-screen py-16 h-full flex items-center text-black px-4 md:px-10 lg:px-20"
      id={props.id}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="zoom-in-right">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-shadow-md">
            Hubungi <span className="text-[#57bc57]">Kami</span>
          </h2>
          <p className="mt-4 text-gray-700">
            Punya Pertanyaan seputar layanan kami? <br />
            Tim kami siap membantu Anda dengan cepat dan ramah.{" "}
            <br className="hidden sm:block" />
            Silakan isi formulir disamping atau hubungi kami langsung melalui
            whatsApp atau email
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#4a834a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12,2 C16.9705627,2 21,5.98572446 21,10.9023647 C21,14.1558559 18.2776716,17.5957933 12.9482526,21.3431516 L12,22 L11.4277959,21.6050955 C5.85042064,17.7558913 3,14.2315185 3,10.9023647 C3,5.98572446 7.02943725,2 12,2 Z M12,3.97830328 C8.13400675,3.97830328 5,7.07831119 5,10.9023647 C5,13.3048538 7.29671943,16.236445 12,19.5818284 C16.7032806,16.236445 19,13.3048538 19,10.9023647 C19,7.07831119 15.8659932,3.97830328 12,3.97830328 Z M12,6 C14.209139,6 16,7.790861 16,10 C16,12.209139 14.209139,14 12,14 C9.790861,14 8,12.209139 8,10 C8,7.790861 9.790861,6 12,6 Z M12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 Z"
                />
              </svg>
              <div>
                <p className="font-semibold">Alamat :</p>
                <p className="text-gray-700">
                  Jl. Sehat Sentosa No. 88 <br />
                  Surabya, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#4a834a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19.44,13c-.22,0-.45-.07-.67-.12a9.44,9.44,0,0,1-1.31-.39,2,2,0,0,0-2.48,1l-.22.45a12.18,12.18,0,0,1-2.66-2,12.18,12.18,0,0,1-2-2.66L10.52,9a2,2,0,0,0,1-2.48,10.33,10.33,0,0,1-.39-1.31c-.05-.22-.09-.45-.12-.68a3,3,0,0,0-3-2.49h-3a3,3,0,0,0-3,3.41A19,19,0,0,0,18.53,21.91l.38,0a3,3,0,0,0,2-.76,3,3,0,0,0,1-2.25v-3A3,3,0,0,0,19.44,13Zm.5,6a1,1,0,0,1-.34.75,1.05,1.05,0,0,1-.82.25A17,17,0,0,1,4.07,5.22a1.09,1.09,0,0,1,.25-.82,1,1,0,0,1,.75-.34h3a1,1,0,0,1,1,.79q.06.41.15.81a11.12,11.12,0,0,0,.46,1.55l-1.4.65a1,1,0,0,0-.49,1.33,14.49,14.49,0,0,0,7,7,1,1,0,0,0,.76,0,1,1,0,0,0,.57-.52l.62-1.4a13.69,13.69,0,0,0,1.58.46q.4.09.81.15a1,1,0,0,1,.79,1Z"
                />
              </svg>
              <div>
                <p className="font-semibold">Nomer Telepon :</p>
                <p className="text-gray-700">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#4a834a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21,7.38246601 L21,5 L3,5 L3,7.38199365 L12.0000224,11.8824548 L21,7.38246601 Z M21,9.61853399 L11.9999776,14.1185452 L3,9.61810635 L3,19 L21,19 L21,9.61853399 Z M3,3 L21,3 C22.1045695,3 23,3.8954305 23,5 L23,19 C23,20.1045695 22.1045695,21 21,21 L3,21 C1.8954305,21 1,20.1045695 1,19 L1,5 C1,3.8954305 1.8954305,3 3,3 Z"
                />
              </svg>
              <div>
                <p className="font-semibold">Email:</p>
                <p className="text-gray-700">cs@lodihealth.id</p>
              </div>
            </div>
          </div>
        </div>

        <FormKontak />
      </div>
    </section>
  );
}

export default Kontak;
