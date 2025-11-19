export function Accessibility() {
  return (
    <div id="a11yBar" className="c-full no-theme notPrinted">
      <div className="container u-text-color">
        <div className="u-flex u-flex-justify-between margin-bottom-m">

          {/* ----- BOTÕES DE ACESSIBILIDADE ----- */}
          <div>
            {/* Diminuir fonte */}
            <button
              className="btn-disguise margin-left-xl js-zooming-minus no-padding-bottom js-tracking"
              type="button"
              title="Diminuir"
              aria-label="Diminuir"
              data-tracking-category="accessibility"
              data-tracking-action="font_size"
              data-tracking-label="minus"
              disabled
            >
              A-
            </button>

            {/* Aumentar fonte */}
            <button
              className="btn-disguise margin-left-xl no-padding-bottom js-zooming-plus js-tracking"
              type="button"
              title="Aumentar"
              aria-label="Aumentar"
              data-tracking-category="accessibility"
              data-tracking-action="font_size"
              data-tracking-label="plus"
            >
              A+
            </button>

            {/* Contraste ON */}
            <button
              className="btn-disguise margin-left-xl no-padding-bottom js-tracking js-contrast js-contrast-on"
              type="button"
              data-tracking-category="accessibility"
              data-tracking-action="contrast"
              data-tracking-label="on"
            >
              Contraste
            </button>

            {/* Contraste OFF (inicialmente oculto) */}
            <button
              className="btn-disguise margin-left-xl no-padding-bottom js-tracking js-contrast js-contrast-off hidden"
              type="button"
              data-tracking-category="accessibility"
              data-tracking-action="contrast"
              data-tracking-label="off"
            >
              Contraste
            </button>
          </div>

          {/* ----- LINKS DE ATALHO ----- */}
          <div>
            <a
              className="btn-disguise u-no-link-style no-padding-bottom margin-right-xl hidden-xs hidden-sm"
              href="#searchterm"
              accessKey="1"
            >
              Busca [1]
            </a>

            <a
              className="btn-disguise u-no-link-style margin-right-xl no-padding-bottom hidden-xs hidden-sm"
              href="#main"
              accessKey="2"
            >
              Conteúdo [2]
            </a>

            <a
              className="btn-disguise u-no-link-style margin-right-xl no-padding-bottom hidden-xs hidden-sm"
              href="#footer"
              accessKey="3"
            >
              Rodapé [3]
            </a>

            <a
              className="btn-disguise u-no-link-style margin-right-xl no-padding-bottom"
              href="/help/accessibility/"
            >
              Acessibilidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
