import NavDropdown from "./NavDropdown";

interface Props {
  menuOpen: "events" | "cities" | null;
  setMenuOpen: (v: "events" | "cities" | null) => void;
}

export default function NavDesktop({ menuOpen, setMenuOpen }: Props) {
  return (
    <nav className="searchheader-nav">
      <ul className="u-flex">
        {/* TODOS OS EVENTOS */}
        <li>
          <button
            className="searchheader-nav-item u-no-btn-style link-transparent hidden-xs hidden-sm"
            onClick={() =>
              setMenuOpen(menuOpen === "events" ? null : "events")
            }
          >
            <span className="searchheader-nav-text">Todos os eventos</span>
            <span className="icon icon-expand-more" aria-hidden="true"></span>
          </button>

          {menuOpen === "events" && (
            <NavDropdown title="Categorias" type="category" />
          )}
        </li>

        {/* TODAS AS CIDADES */}
        <li>
          <button
            className="searchheader-nav-item u-no-btn-style link-transparent hidden-xs hidden-sm"
            onClick={() =>
              setMenuOpen(menuOpen === "cities" ? null : "cities")
            }
          >
            <span className="searchheader-nav-text">Todas as cidades</span>
            <span className="icon icon-expand-more" aria-hidden="true"></span>
          </button>

          {menuOpen === "cities" && (
            <NavDropdown title="Cidades" type="city" />
          )}
        </li>
      </ul>
    </nav>
  );
}
