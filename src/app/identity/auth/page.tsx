"use client";

import ReservationTimer from "@/app/checkout/components/ReservationTimer";

// você já tem esse timer — ele encaixa perfeito aqui

export default function AuthPage() {
  return (
    <>
      {/* CSS padrão local */}
      <link
        id="ev-style-sheet"
        rel="stylesheet"
        href="/eventim/css/patterns.css"
      />

      {/* CSS contraste local */}
      <link
        id="contrast-style"
        rel="stylesheet"
        href="/eventim/css/patterns-contrast.css"
        // @ts-ignore
        disabled
      />

      <link rel="stylesheet" href="/eventim/css/eventim-theme.css" />

      {/* WRAPPER PRINCIPAL */}
      <div className="wrapper wrapper-container theme-page-bg fit-content-height">

        {/* SVGs invisíveis */}
        <svg style={{ display: "none" }}>
          <symbol id="esf-icon-show-16" viewBox="0 0 32 32">
            <path fill="currentColor" d="M12,16c0-2.207..." />
          </symbol>

          <symbol id="esf-icon-hide-16" viewBox="0 0 32 32">
            <path fill="currentColor" d="M6.846,23.033..." />
          </symbol>

          <symbol id="error" width="16" height="16" viewBox="0 0 512 512">
            <path d="M443.87..." />
          </symbol>
        </svg>

        {/* HEADER */}
        <header className="searchheader theme-head-bg">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <div className="logo">
                  <img
                    id="main-logo"
                    src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo.svg"
                    className="searchheader-logo-image"
                    alt="Ingressos para shows e eventos"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* TIMER (usa o componente React igual ao checkout) */}
        <div className="reservation-timer-wrapper">
          <div className="horizontal-centered-content no-padding-right responsive-unit-separator eventim-modal-wrapper">
            <div className="eventim-modal no-background"></div>

            <div className="reservation-timer-box eventim-card-wrapper no-padding">
                            <ReservationTimer />

            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="c container flex-1" id="mainContainer">
          <div className="card theme-content-bg theme-text-color theme-element-radius standard-gray-shadow horizontal-centered-content min-height-500 eventim-modal-wrapper">

            <div className="eventim-modal">
              <h1 id="login-title" className="eventim-modal-label">
                Entre ou crie uma conta
              </h1>
            </div>

            <div className="eventim-card-wrapper">
              <form id="kc-form-login" className="card-content">

                <h2 className="responsive-unit-separator eventim-card-headline">
                  Por favor, insira seu endereço de e-mail
                </h2>

                <div className="unit-separator no-padding-top">
                  <p className="paragraph">
                    <label
                      htmlFor="email"
                      className="label theme-text-variant-color"
                    >
                      Endereço de Email
                    </label>
                  </p>

                  <div className="form-group">
                    <input
                      tabIndex={0}
                      id="email"
                      className="form-control standard-gray-border theme-text-color theme-content-bg theme-element-radius"
                      name="email"
                      type="email"
                      autoFocus
                      autoComplete="email"
                    />
                  </div>
                </div>

                <button
                  tabIndex={0}
                  className="btn btn-primary btn-lg btn-block theme-interaction-btn-bg theme-btn-font-color theme-button-radius"
                  id="kc-login"
                  type="submit"
                >
                  Continuar
                </button>
              </form>
            </div>

          </div>
        </main>

        {/* FOOTER */}
        <footer className="footer-copyright-newline notPrinted">
          <div className="footer-legal-and-contact theme-page-bg theme-element-border">
            <div className="container">
              <div className="row">

                <div className="col-xs-12 col-md-6 footer-imprint">
                  <ul>
                    <li><a href="#">STB</a></li>
                    <li><a href="#">Proteção de dados</a></li>
                    <li><a href="#">Imprimir</a></li>
                    <li><a href="#">Cancelamento</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className="footer-logo-newline theme-head-bg">
            <div className="container">
              <img
                id="footer-logo"
                src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo_01_new.svg"
                className="eventim-footer-logo footer-logo-image"
                alt=""
              />
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
