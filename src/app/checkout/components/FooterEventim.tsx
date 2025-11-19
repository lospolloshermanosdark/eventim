export default function FooterEventim() {
  return (
    <div data-qa="footer" className="footerContainer notPrinted">

      {/* Voltar para o topo */}
      <div className="back-to-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="back-to-top checkout-card-container">
                <div className="container back-to-top-content margin-top-xxl">
                  <span
                    tabIndex={0}
                    role="button"
                    data-qa="to-top-link"
                    className="link"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <i className="icon icon-arrow-up before-text" />
                    <span>Voltar para o topo</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Legal */}
      <footer className="footer-copyright-newline margin-top-xxl">
        <div className="footer-legal-and-contact theme-page-bg theme-element-border">
          <div className="container">
            <div data-qa="copyright" className="footer-copyright theme-text-marginal-color">
              © EVENTIM
            </div>

            <div className="row">
              {/* espaço vazio para hotline */}
              <div className="col-xs-12 col-md-6 col-md-push-6 footer-hotline hidden-xs hidden-sm"></div>

              {/* Links */}
              <div className="col-xs-12 col-md-6 col-md-pull-6 footer-imprint">
                <nav>
                  <ul>
                    <li>
                      <a
                        tabIndex={0}
                        data-qa="footer-link"
                        className="theme-link-color theme-link-color-hover"
                      >
                        Termos e Condições
                      </a>
                    </li>

                    <li>
                      <a
                        tabIndex={0}
                        data-qa="footer-link"
                        className="theme-link-color theme-link-color-hover"
                      >
                        Proteção de dados
                      </a>
                    </li>

                    <li>
                      <a
                        tabIndex={0}
                        data-qa="footer-link"
                        className="theme-link-color theme-link-color-hover"
                      >
                        Informações Legais
                      </a>
                    </li>

                    <li>
                      <a
                        tabIndex={0}
                        data-qa="footer-link"
                        className="theme-link-color theme-link-color-hover"
                      >
                        Cancelamento
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>

        {/* Logo do rodapé */}
        <div className="footer-logo-newline">
          <div className="container">
            <img
              alt=""
              className="footer-logo-image"
              src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo_01_new.svg"
            />
          </div>
        </div>
      </footer>

    </div>
  );
}
