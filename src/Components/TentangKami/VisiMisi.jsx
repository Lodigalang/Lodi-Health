import CardVisiMisi from "../UI/CardVisiMisi";

function VisiMisi() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#82c182] to-[#7fb883]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-shadow-md">
            Misi & Visi Kami
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Fondasi yang menjadi pedoman kami dalam memberikan layanan terbaik
          </p>
        </div>
        <CardVisiMisi />
      </div>
    </section>
  );
}

export default VisiMisi;
