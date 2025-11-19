// components/HeaderCheckout.tsx
import Image from "next/image";

export default function HeaderCheckout() {
  return (
    <header
      data-qa="header"
      className="header notPrinted u-no-margin-bottom-on-tablet u-m-margin-bottom-on-desktop"
    >
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-xs-6">
            <div data-qa="logo" className="header-logo">
              <a data-qa="link" tabIndex={-1}>
                <Image
                  alt="Ingressos"
                  src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo.svg"
                  height={50}
                  width={120}
                  data-qa="image"
                  className="main-img"
                />
              </a>
            </div>
          </div>

          {/* Pedido Seguro */}
          <div className="col-xs-6">
            <div className="header-ssl">
              <i
                data-qa="security-hint-logo"
                className="icon icon-lock header-ssl-icon theme-head-icon-color"
              />
              <span
                data-qa="security-hint"
                className="header-ssl-text theme-head-text-color"
              >
                Pedido Seguro
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
