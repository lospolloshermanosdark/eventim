export default function Actions() {
  return (
    <ul className="u-flex u-flex-justify-end u-flex-v-center">
      {/* Idioma */}
      <li>
        <button className="searchheader-action-link u-no-btn-style">
          <i className="icon icon-header-world"></i>
        </button>
      </li>

      {/* Favoritos */}
      <li>
        <a href="/myfavorites/artists/" className="u-no-link-style">
          <i className="icon icon-follow-outline"></i>
        </a>
      </li>

      {/* Conta */}
      <li>
        <a href="/dashboard/" className="u-no-link-style">
          <i className="icon icon-header-account"></i>
        </a>
      </li>
    </ul>
  );
}
