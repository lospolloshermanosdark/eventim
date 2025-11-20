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
  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    if (method !== "pix") return;

    setLoading(true); // 🔥 ativa spinner

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

    // delay para o spinner aparecer
    setTimeout(() => {
      router.push(`/checkout/pix?${params.toString()}`);
    }, 300);
  };

  return (
    <div className="col-xs-12 col-md-8">
      <div className="row card standard-gray-shadow theme-content-bg theme-text-color checkout-card-container">
        <div className="card-content">

          <div className="col-xs-12 card-section">
            <h2 className="selection-list-headline theme-headline-color u-font-weight-bold">
              Escolha sua Forma de Pagamento
            </h2>

            <ul data-qa="list" className="selection-list">

              {/* PIX */}
              <li
                role="radio"
                className={
                  "selection-list-item no-margin selection-list-border " +
                  (method === "pix" ? "selected" : "")
                }
                tabIndex={0}
                aria-checked={method === "pix"}
                onClick={() => setMethod("pix")}
                style={{
                  border: method === "pix" ? "2px solid #0B74FF" : "1px solid #ddd",
                  borderRadius: 10,
                  padding: 12,
                  cursor: "pointer",
                }}
              >
                <div className="sl-radiobutton">
                  <div className="styled-checkbox theme-switch-bg theme-switch-border no-padding-right">
                    <input type="checkbox" checked={method === "pix"} readOnly />
                    <label className="label"></label>
                  </div>
                </div>

                <div className="sl-description">
                  <span className="sl-title theme-text-color">PIX</span>
                  <span className="sl-info">Pagamento instantâneo</span>
                </div>

                <div className="sl-icon">
                  <i className="icon icon-card theme-text-variant-color"></i>
                </div>
              </li>

              {/* CARTÃO */}
              <li
                role="radio"
                className={
                  "selection-list-item no-margin selection-list-border " +
                  (method === "card" ? "selected" : "")
                }
                tabIndex={0}
                aria-checked={method === "card"}
                onClick={() => setMethod("card")}
                style={{
                  border: method === "card" ? "2px solid #FF6B6B" : "1px solid #ddd",
                  borderRadius: 10,
                  padding: 12,
                  cursor: "pointer",
                  opacity: 0.8,
                }}
              >
                <div className="sl-radiobutton">
                  <div className="styled-checkbox theme-switch-bg theme-switch-border no-padding-right">
                    <input type="checkbox" checked={method === "card"} readOnly />
                    <label className="label"></label>
                  </div>
                </div>

                <div className="sl-description">
                  <span className="sl-title theme-text-color">Cartão de Crédito</span>
                  <span className="sl-info" style={{ color: "#d9534f", fontWeight: 600 }}>
                    Indisponível no momento
                  </span>
                </div>

                <div className="sl-icon">
                  <i className="icon icon-card theme-text-variant-color"></i>
                </div>
              </li>
            </ul>

            {method === "card" && (
              <div
                style={{
                  background: "#FFF1F1",
                  border: "1px solid #FFB5B5",
                  padding: 12,
                  borderRadius: 8,
                  marginTop: 12,
                }}
              >
                <strong style={{ color: "#C30000" }}>
                  Pagamento com cartão indisponível.
                </strong>
                <p style={{ marginTop: 6, color: "#7a0000" }}>
                  Utilize PIX para concluir seu pedido rapidamente.
                </p>
              </div>
            )}

            {/* BOTÕES */}
            <div style={{ marginTop: 25 }}>
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={handleProceed}
                disabled={method !== "pix" || loading}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}
              >
                {loading ? (
                  <>
                    <div
                      className="spinner"
                      style={{
                        width: 20,
                        height: 20,
                        border: "3px solid #fff",
                        borderTop: "3px solid transparent",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    ></div>
                    Processando…
                  </>
                ) : (
                  "Prosseguir com PIX"
                )}
              </button>

              <button
                className="btn btn-default btn-block"
                onClick={onBack}
                style={{
                  marginTop: 10,
                  padding: "10px 12px",
                  borderRadius: 8,
                  fontSize: 14,
                }}
              >
                Voltar
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* CSS spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
