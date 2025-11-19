"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import QRCode from "qrcode";
import FooterEventim from "../components/FooterEventim";
import HeaderCheckout from "../components/HeaderCheckout";

type PixResponse = {
  id: string;
  pix?: {
    qrcode?: string;
    receiptUrl?: string | null;
    expirationDate?: string | null;
  };
  status?: string;
};

export default function PixPage() {
  const params = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  // ====== PARAMETROS DO PEDIDO ======
  const amount = params.get("amount") ?? "0";
  const externalRef = params.get("externalRef") ?? `pedido_${Date.now()}`;
  const title = params.get("title") ?? "Pedido";
  const unitPrice = params.get("unitPrice") ?? amount;
  const name = params.get("name") ?? "Cliente";
  const email = params.get("email") ?? "cliente@email.com";
  const phone = params.get("phone") ?? "00000000000";
  const cpf = params.get("cpf") ?? "00000000000";

  // ====== ESTADOS ======
  const [loading, setLoading] = useState(true);
  const [pixData, setPixData] = useState<PixResponse | null>(null);
  const [qrImage, setQrImage] = useState<string | null>(null);
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasCreatedPix, setHasCreatedPix] = useState(false);

  // ====== BODY PARA API ======
  const body = useMemo(
    () => ({
      amount: Number(amount) * 100,
      paymentMethod: "pix",
      customer: {
        name,
        email,
        phone,
        document: { type: "cpf", number: cpf },
      },
      items: [
        {
          title,
          unitPrice: Number(unitPrice) * 100,
          quantity: 1,
          tangible: true,
          externalRef,
        },
      ],
      metadata: "Pagamento via website",
      externalRef,
      postbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/postback`,
      ip: "187.0.0.1",
      pix: { expiresInDays: 1 },
    }),
    [amount, cpf, email, externalRef, name, phone, title, unitPrice]
  );

  // =======================================================
  // 🔥 CRIA O PIX APENAS UMA VEZ
  // =======================================================
  useEffect(() => {
    if (hasCreatedPix) return;
    setHasCreatedPix(true);

    let mounted = true;

    async function create() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/pix/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!res.ok) throw new Error(`Erro: ${res.status}`);
        const data: PixResponse = await res.json();

        if (!mounted) return;

        setPixData(data);

        // gera QR Code visual
        if (data.pix?.qrcode) {
          const img = await QRCode.toDataURL(data.pix?.qrcode, { width: 1024 });
          if (mounted) setQrImage(img);
        }

        // inicia polling
        const interval = setInterval(async () => {
          try {
            const chk = await fetch(`/api/pix/check?id=${data.id}`);
            const json = await chk.json();

            if (json.status === "paid" || json.paid) {
              clearInterval(interval);
              setPaid(true);
              setTimeout(() => router.push("/checkout/success"), 1200);
            }
          } catch {}
        }, 3000);
      } catch (err: any) {
        setError(err.message ?? "Erro ao criar pagamento PIX");
      } finally {
        setLoading(false);
      }
    }

    create();

    return () => {
      mounted = false;
    };
  }, []); // Só cria uma vez

  // =======================================================

  return (
    <>
      {/* CSS padrão local */}
      <link
        id="ev-style-sheet"
        rel="stylesheet"
        href="/eventim/css/patterns.css"
      />

      {/* CSS contraste */}
      <link
        id="contrast-style"
        rel="stylesheet"
        href="/eventim/css/patterns-contrast.css"
        // @ts-ignore
        disabled
      />

      {/* CSS checkout */}
      <link rel="stylesheet" href="/eventim/css/checkout.css" />

      <div
        className="checkout-wrapper-container"
        style={{ background: "#e5e5e5" }}
      >
        <div className="wrapper wrapper-container">
          <div className="wrapper max-container-width">
            <HeaderCheckout />
            {/* ========================= */}
            {/*          MAIN             */}
            {/* ========================= */}

            <div
              className="row card standard-gray-shadow theme-content-bg theme-text-color"
              style={{ marginTop: 40, padding: 20 }}
            >
              <div className="card-content">
                {/* TÍTULO */}
                <h2 className="selection-list-headline theme-headline-color u-font-weight-bold">
                  Pague com PIX
                </h2>
                <p className="theme-text-color" style={{ marginTop: -10 }}>
                  {title} — R$ {Number(amount).toFixed(2).replace(".", ",")}
                </p>

                {/* GRID RESPONSIVO */}
                {/* GRID AJUSTADO */}
                <div
                  className="pix-container"
                  style={{
                    marginTop: 20,
                    display: "grid",
                    gap: 32,
                    justifyContent: "center",
                  }}
                >
                  {/* ESQUERDA - QR CODE */}
                  <div
                    style={{
                      background: "linear-gradient(180deg,#fff,#f5f7fb)",
                      borderRadius: 16,
                      padding: 20,
                      boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                      width: "100%",
                      maxWidth: 420, // 🔥 tamanho perfeito
                      margin: "0 auto",
                    }}
                  >
                    {loading ? (
                      <div style={{ padding: 40, fontSize: 16 }}>
                        Gerando PIX…
                      </div>
                    ) : (
                      <>
                        {/* QR */}
                        <img
                          src={qrImage ?? ""}
                          alt="QR Code"
                          style={{
                            width: "100%",
                            maxWidth: 300,
                            display: "block",
                            margin: "0 auto",
                          }}
                        />

                        {/* COPIA E COLA */}
                        <textarea
                          readOnly
                          value={pixData?.pix?.qrcode ?? ""}
                          style={{
                            width: "100%",
                            height: 90,
                            marginTop: 15,
                            borderRadius: 8,
                            padding: 10,
                            fontSize: 14,
                            border: "1px solid #d4d8e1",
                          }}
                        />

                        <button
                          className="btn btn-primary btn-lg btn-block"
                          style={{ marginTop: 10 }}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              pixData?.pix?.qrcode ?? ""
                            );
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2500);
                          }}
                        >
                          Copiar código PIX
                        </button>

                        <p
                          style={{
                            marginTop: 12,
                            textAlign: "center",
                            color: "#555",
                          }}
                        >
                          {paid
                            ? "Pagamento confirmado — redirecionando…"
                            : "Aguardando pagamento. Atualização a cada 3s."}
                        </p>
                      </>
                    )}
                  </div>

                  {/* DIREITA - RESUMO */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: 360,
                      margin: "0 auto",
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: 12,
                        padding: 18,
                        border: "1px solid #e6e8ee",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: 18 }}>
                        Resumo do Pedido
                      </div>

                      <div
                        style={{
                          marginTop: 14,
                          color: "#555",
                          fontSize: 15,
                          borderBottom: "1px solid #eee",
                          paddingBottom: 12,
                        }}
                      >
                        {title} • 1 unidade
                      </div>

                      <div
                        style={{
                          marginTop: 14,
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: 700,
                          fontSize: 17,
                        }}
                      >
                        <span>Total</span>
                        <span>
                          R$ {Number(amount).toFixed(2).replace(".", ",")}
                        </span>
                      </div>

                      <button
                        onClick={() => router.push("/checkout")}
                        className="btn btn-default btn-lg btn-block"
                        style={{ marginTop: 16 }}
                      >
                        Voltar e alterar
                      </button>
                    </div>

                    <p
                      style={{
                        marginTop: 12,
                        fontSize: 13,
                        color: "#555",
                        lineHeight: "18px",
                        textAlign: "center",
                      }}
                    >
                      Pagamento protegido com criptografia avançada. Suas
                      informações permanecem seguras durante todo o processo.
                    </p>
                  </div>
                </div>

                <style>
                  {`
/* DESKTOP */
@media (min-width: 992px) {
  .pix-container {
    grid-template-columns: 420px 360px; /* 🔥 Layout perfeito */
  }
}

/* MOBILE */
@media (max-width: 991px) {
  .pix-container {
    grid-template-columns: 1fr;
  }
}
`}
                </style>

                {/* ERRO */}
                {error && (
                  <div style={{ marginTop: 12, color: "#c0392b" }}>{error}</div>
                )}
              </div>
            </div>

            {/* FOOTER */}
            <FooterEventim />
          </div>
        </div>
      </div>
      {/* TOAST de Copiado */}
      {copied && (
        <div className="pix-toast">Código PIX copiado com sucesso!</div>
      )}

      <style>
        {`
.pix-toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #198754; /* verde elegante */
  color: #fff;
  padding: 12px 22px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
  z-index: 9999;

  animation: fadeInOut 2.5s ease forwards;
}

@keyframes fadeInOut {
  0%   { opacity: 0; transform: translateX(-50%) translateY(10px); }
  10%  { opacity: 1; transform: translateX(-50%) translateY(0); }
  90%  { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
}
`}
      </style>
    </>
  );
}
