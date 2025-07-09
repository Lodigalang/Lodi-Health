import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../../Button";
import { useFormModal } from "../../Context/FormContext";
import Breadcrumb from "../Breadcrumb";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import { useAuthContext } from "../../Context/AuthContext";

function Navbar(props) {
  const { setFormAktif } = useFormModal();
  const [showNavbar, setShowNavbar] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuthContext();
  const avatarOptions = [
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${Math.floor(
      Math.random() * 1000
    )}`,
  ];
  function getRandomAvatar() {
    const stored = localStorage.getItem("avatarHealth");
    if (stored) return stored;

    const random =
      avatarOptions[Math.floor(Math.random() * avatarOptions.length)];
    localStorage.setItem("avatarHealth", random);
    return random;
  }
  const avatarSrc = getRandomAvatar();

  const menuBar = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setShowNavbar(true);
      } else {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      }

      setLastScrollY(currentScrollY);

      const scrollPosition = window.scrollY + 200;
      props.links.forEach((link, index) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, props.links, menuOpen]);
  return (
    <>
      <nav
        className={`navbar transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="navbar-container">
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="navbar-brand-container flex items-center space-x-2"
            >
              <img
                src="/Logo.png"
                className="xl:h-[70px] h-[60px]"
                alt="Logo"
              />
              <span className="navbar-brand text-xl font-bold">
                {props.brand}
              </span>
            </Link>
          </div>

          <div className="navbar-button">
            {user ? (
              <div className="relative pr-1.5">
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className=" relative w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={avatarSrc}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-sm shadow-md rounded-lg z-50 overflow-hidden">
                    <Link
                      to="/setting"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button
                  type="button"
                  className="login"
                  teks="Masuk"
                  onClick={() => setFormAktif("masuk")}
                />
                <Button
                  type="button"
                  className="daftar"
                  teks="Daftar"
                  onClick={() => setFormAktif("daftar")}
                />{" "}
              </>
            )}
            {location.pathname === "/" && (
              <Button
                type="button"
                className={`menu-bar ${menuOpen ? "show" : ""}`}
                onClick={menuBar}
                teks={
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                }
              />
            )}
          </div>

          <div className={`navbar-link-container ${menuOpen ? "show" : ""}`}>
            {location.pathname === "/" && (
              <ul className="navbar-link">
                {props.links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("#") ? (
                      <ScrollLink
                        to={link.href.substring(1)} // hapus tanda #
                        smooth={true} // animasi smooth scroll
                        duration={500} // durasi animasi scroll dalam ms
                        offset={-70} // offset jika navbar fixed (contoh 70px tinggi navbar)
                        onClick={() => {
                          setActiveIndex(index);
                          setMenuOpen(false); // misal mau close menu setelah klik
                        }}
                        className={`cursor-pointer transition-opacity duration-200 ${
                          index === activeIndex
                            ? "text-white font-semibold opacity-100"
                            : "text-white opacity-60 hover:opacity-80"
                        }`}
                      >
                        {link.label}
                      </ScrollLink>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setActiveIndex(index)}
                        className={`transition-opacity duration-200 ${
                          index === activeIndex
                            ? "text-white font-semibold opacity-100"
                            : "text-white opacity-60 hover:opacity-80"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {location.pathname !== "/" && (
          <nav
            className={`bg-[#4a834a]/80 border-t border-gray-100 text-white text-lg py-3 px-12 
      backdrop-blur-md transition-all duration-300 ${
        showNavbar ? "" : "top-0"
      }`}
          >
            <Breadcrumb />
          </nav>
        )}
      </nav>
    </>
  );
}

export default Navbar;
