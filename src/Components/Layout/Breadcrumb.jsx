import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const lastState = location.state;

  if (location.pathname === "/") return null;

  return (
    <ol className="flex items-center space-x-2">
      <li>
        <Link to="/" className="hover:underline text-white/90">
          Beranda
        </Link>
      </li>

      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = "/" + pathnames.slice(0, index + 1).join("/");

        const label =
          isLast && lastState?.namaProduk
            ? lastState.namaProduk
            : value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <li key={to} className="flex items-center">
            <span className="mx-2">›</span>
            {isLast ? (
              <span className="text-white">{label}</span>
            ) : (
              <Link to={to} className="hover:underline text-white">
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export default Breadcrumb;
