"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PaymentStepProps {
  onBack: () => void;
  onContinue: () => void;
  cart: any;
}

export default function PaymentStep({ onBack, onContinue, cart }: PaymentStepProps) {
  const router = useRouter();
  const [method, setMethod] = useState<"pix" | "card" | null>(null);
  const [cardWarning, setCardWarning] = useState(false);

  const handleProceed = () => {
    if (method === "pix") {
      // monta dados na URL e vai para /checkout/pix
      const params = new URLSearchParams({
        amount: String(cart.total),
        title: cart.setor,
        unitPrice: String(cart.preco),
        quantity: "1",
        name: cart.nome ?? "Cliente",
        email: cart.email ?? "cliente@email.com",
        phone: cart.phone ?? "00000000000",
        cpf: cart.cpf ?? "00000000000",
      });

      router.push(`/checkout/pix?${params.toString()}`);
    } else {
      setCardWarning(true);
    }
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
                  setCardWarning(false);
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

              {/* CARTÃO – indisponível */}
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
                  setCardWarning(true);
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
                  <span className="sl-info ng-star-inserted" style={{ color: "#d9534f" }}>
                    Indisponível no momento — recomendamos PIX
                  </span>
                </div>

                <div className="sl-icon ng-star-inserted">
                  <i className="icon icon-card theme-text-variant-color"></i>
                </div>
              </li>

            </ul>

            {/* MENSAGEM DE CARTÃO INDISPONÍVEL */}
            {cardWarning && (
              <div
                style={{
                  background: "#fff2f2",
                  border: "1px solid #ffcccc",
                  padding: 12,
                  borderRadius: 8,
                  marginTop: 10,
                }}
              >
                <strong style={{ color: "#c30000" }}>Pagamento com cartão indisponível.</strong>
                <p style={{ margin: "6px 0 0 0", color: "#7a0000" }}>
                  Estamos com instabilidade nas operadoras. Utilize PIX para concluir seu pedido.
                </p>
              </div>
            )}

            {/* BOTÕES */}
            <div style={{ marginTop: 20 }}>
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={handleProceed}
              >
                Prosseguir
              </button>

              <button
                className="btn btn-default btn-lg btn-block"
                onClick={onBack}
                style={{ marginTop: 10 }}
              >
                Voltar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
