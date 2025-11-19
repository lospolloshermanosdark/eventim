"use client";

import { useState } from "react";

interface PaymentStepProps {
  onBack: () => void;
  onContinue: () => void; // vai para "validacao"
  cart: any;
}

export default function PaymentStep({ onBack, onContinue, cart }: PaymentStepProps) {
  const [method, setMethod] = useState<"pix" | "card" | null>(null);
  const [loading, setLoading] = useState(false);
  const [pix, setPix] = useState<any>(null);

  const createPix = async () => {
    setLoading(true);

    const body = {
      paymentMethod: "PIX",
      amount: cart.total,
      customer: {
        name: "Cliente",
        email: "cliente@email.com",
      },
      items: [
        {
          title: cart.setor,
          unitPrice: cart.preco,
          quantity: 1,
        },
      ],
    };

    const res = await fetch("/api/pix/create", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const data = await res.json();

    setPix({
      id: data.id,
      qr: data.pix.qrCode,
      copia: data.pix.copyPaste,
    });

    startPolling(data.id);

    setLoading(false);
  };

  const startPolling = (id: string) => {
    const interval = setInterval(async () => {
      const res = await fetch(`/api/pix/check?id=${id}`);
      const check = await res.json();

      if (check.paid) {
        clearInterval(interval);
        onContinue();
      }
    }, 5000);
  };

  return (
    <div className="col-xs-12 col-md-8">
      <div className="row card standard-gray-shadow theme-content-bg theme-text-color checkout-card-container">
        <div className="card-content">

          {/* TÍTULO */}
          <div className="col-xs-12 card-section">
            <h2 className="selection-list-headline theme-headline-color u-font-weight-bold">
              Escolha sua Forma de Pagamento
            </h2>

            {/* LISTA */}
            <ul data-qa="list" className="selection-list">

              {/* PIX */}
              <li
                role="radio"
                className={
                  "selection-list-item no-margin selection-list-border ng-star-inserted " +
                  (method === "pix" ? "selected" : "")
                }
                tabIndex={0}
                aria-checked={method === "pix"}
                onClick={() => {
                  setMethod("pix");
                  createPix();
                }}
              >
                <div className="sl-radiobutton ng-star-inserted">
                  <div className="styled-checkbox theme-switch-bg theme-switch-border no-padding-right">
                    <input
                      type="radio"
                      className="radio-input"
                      checked={method === "pix"}
                      readOnly
                    />
                    <label className="label"></label>
                  </div>
                </div>

                <div className="sl-description ng-star-inserted">
                  <span className="sl-title theme-text-color" title="PIX">
                    PIX
                  </span>
                </div>

                <div className="sl-icon ng-star-inserted">
                  <i className="icon icon-card theme-text-variant-color"></i>
                </div>
              </li>

              {/* CARTÃO */}
              <li
                role="radio"
                className={
                  "selection-list-item no-margin selection-list-border ng-star-inserted " +
                  (method === "card" ? "selected" : "")
                }
                tabIndex={0}
                aria-checked={method === "card"}
                onClick={() => {
                  setMethod("card");
                  setPix(null);
                }}
              >
                <div className="sl-radiobutton ng-star-inserted">
                  <div className="styled-checkbox theme-switch-bg theme-switch-border no-padding-right">
                    <input
                      type="radio"
                      className="radio-input"
                      checked={method === "card"}
                      readOnly
                    />
                    <label className="label"></label>
                  </div>
                </div>

                <div className="sl-description ng-star-inserted">
                  <span className="sl-title theme-text-color">
                    Pagamento com Cartão de Crédito
                  </span>
                  <span className="sl-info ng-star-inserted">
                    Visa, MasterCard, ELO, American Express…
                  </span>
                </div>

                <div className="sl-icon ng-star-inserted">
                  <i className="icon icon-card theme-text-variant-color"></i>
                </div>
              </li>

            </ul>
          </div>

          {/* PIX GERADO */}
          {method === "pix" && pix && (
            <div className="col-xs-12" style={{ marginTop: 20 }}>
              <h3>Pague com PIX</h3>

              <img
                src={`data:image/png;base64,${pix.qr}`}
                style={{ width: 200, height: 200 }}
              />

              <textarea
                readOnly
                value={pix.copia}
                style={{ width: "100%", height: 80, marginTop: 10 }}
              />

              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={() => navigator.clipboard.writeText(pix.copia)}
              >
                Copiar código PIX
              </button>

              <p style={{ marginTop: 10 }}>Aguardando pagamento...</p>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}
