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

                {/* ÁREA PIX */}
                <div
                  className="col-xs-12"
                  style={{
                    marginTop: 20,
                    display: "flex",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  {/* QR CODE */}
                  <div style={{ flex: "1 1 300px", textAlign: "center" }}>
                    <div
                      style={{
                        padding: 18,
                        borderRadius: 14,
                        background: "#fafbff",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                        display: "inline-block",
                      }}
                    >
                      {loading && (
                        <div style={{ padding: 40 }}>Gerando PIX...</div>
                      )}

                      {!loading && qrImage && (
                        <img
                          src={qrImage}
                          alt="QR Code PIX"
                          style={{
                            width: 260,
                            height: 260,
                            borderRadius: 12,
                          }}
                        />
                      )}

                      {!loading && !qrImage && (
                        <div style={{ padding: 28, color: "#888" }}>
                          QR não disponível
                        </div>
                      )}
                    </div>

                    {/* Copia e Cola */}
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
                      }}
                    />

                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() =>
                        navigator.clipboard.writeText(
                          pixData?.pix?.qrcode ?? ""
                        )
                      }
                      style={{ marginTop: 10 }}
                    >
                      Copiar código PIX
                    </button>

                    <p style={{ marginTop: 12 }}>
                      {paid
                        ? "Pagamento confirmado — redirecionando…"
                        : "Aguardando pagamento. Atualização a cada 3s."}
                    </p>
                  </div>

                  {/* RESUMO */}
                  <div style={{ width: 320 }}>
                    <div
                      style={{
                        padding: 16,
                        borderRadius: 10,
                        background: "#fff",
                        border: "1px solid #f0f0f5",
                      }}
                    >
                      <div style={{ fontWeight: 700 }}>Resumo</div>

                      <div style={{ marginTop: 8, color: "#555" }}>
                        {title} • Quantidade: 1
                      </div>

                      <div
                        style={{
                          marginTop: 14,
                          display: "flex",
                          justifyContent: "space-between",
                          fontWeight: 700,
                        }}
                      >
                        <span>Total</span>
                        <span>R$ {Number(amount).toFixed(2).replace(".", ",")}</span>
                      </div>

                      <div style={{ marginTop: 12 }}>
                        <button
                          onClick={() => router.push("/checkout")}
                          className="btn btn-default btn-lg btn-block"
                        >
                          Voltar e alterar
                        </button>
                      </div>
                    </div>

                    <p
                      style={{
                        marginTop: 12,
                        fontSize: 13,
                        color: "#555",
                      }}
                    >
                      A transmissão deste pagamento ocorre em ambiente seguro e
                      criptografado.
                    </p>
                  </div>
                </div>

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
    </>
  );
}
