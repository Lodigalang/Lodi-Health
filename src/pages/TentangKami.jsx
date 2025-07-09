import AboutUs from "../Components/Beranda/AboutUs";
import VisiMisi from "../Components/TentangKami/VisiMisi";
import HeroTentangKami from "../Components/TentangKami/HeroTentangKami";
import OurDoctor from "../Components/Beranda/OurDoctor";

function TentangKami() {
  return (
    <>
      <main>
        <HeroTentangKami />
        <AboutUs />
        <VisiMisi />
        <OurDoctor />
      </main>
    </>
  );
}

export default TentangKami;
