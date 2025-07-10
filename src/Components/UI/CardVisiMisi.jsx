function CardVisiMisi() {
  const data = [
    {
      title: "Misi Kami",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "Menyediakan akses kesehatan digital yang terjangkau, mudah digunakan, dan dapat diandalkan oleh seluruh masyarakat Indonesia tanpa terkecuali, dengan mengutamakan kepuasan dan keamanan pasien.",
    },
    {
      title: "Visi Kami",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
      description:
        "Menjadi platform kesehatan digital terdepan di Asia Tenggara pada tahun 2030 dengan menghubungkan 10 juta pasien dengan ribuan tenaga kesehatan profesional melalui teknologi inovatif dan pelayanan terbaik.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-xl shadow-lg flex-1 transition hover:shadow-xl"
          data-aos="zoom-in"
        >
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardVisiMisi;
