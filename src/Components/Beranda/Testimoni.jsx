function Testimoni() {
  return (
    <section className="bg-gradient-to-b from-[#82c182] to-[#7fb883]">
      <div
        className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold text-white text-shadow-md mb-8">
          Apa Kata Pengguna Kami
        </h2>

        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-200"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            ></path>
          </svg>

          <blockquote>
            <p className="text-xl font-medium text-white md:text-2xl">
              "Layanan dari Lodi Health’s sangat membantu saya saat butuh
              konsultasi cepat dan efisien tanpa keluar rumah."
            </p>
          </blockquote>

          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="/testimonial-user-1.webp"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium text-gray-900">Rina Oktavia</div>
              <div className="pl-3 text-sm font-light text-gray-600">
                Pengguna Lodi Health’s
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimoni;
