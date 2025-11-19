interface Props {
  title: string;
  type: "category" | "city";
}

export default function NavDropdown({ title, type }: Props) {
  return (
    <section className="header-menu animate-navigation">
      <div className="menu-arrow"></div>

      <div className="searchheader">
        <div className="container menu-head u-flex-row-reverse">
          <div className="menu-head-close u-flex u-flex-v-center">
            <i className="icon icon-cross"></i>
          </div>
          <div className="menu-head-content">
            <h3 className="theme-text-color">{title}</h3>
          </div>
        </div>
      </div>

      {/* AQUI você coloca as categorias reais */}
      <div className="js-tab-wrapper">
        <div className="menu-wrapper">
          <p className="theme-text-color">
            Conteúdo de {type === "category" ? "categorias" : "cidades"} aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
