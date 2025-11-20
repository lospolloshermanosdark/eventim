import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend } from "@/lib/email"; // Resend client

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[WEBHOOK PIX RECEBIDO]", body);

    const { externalRef, status } = body;

    if (!externalRef) {
      console.error("Webhook sem externalRef:", body);
      return NextResponse.json({ error: "Missing externalRef" }, { status: 400 });
    }

    // ===================================================
    // 1. Buscar pedido existente
    // ===================================================
    const { data: order, error: findError } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("external_ref", externalRef)
      .single();

    if (findError || !order) {
      console.error("[WEBHOOK] Pedido não encontrado:", externalRef);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // ===================================================
    // 2. Evitar processar pagamento 2x
    // ===================================================
    if (order.payment_status === "paid") {
      console.log("Pagamento já processado, ignorando webhook duplicado");
      return NextResponse.json({ ok: true, duplicated: true });
    }

    // ===================================================
    // 3. Atualizar status do pedido
    // ===================================================
    if (status === "paid") {
      const { error: updateError } = await supabaseAdmin
        .from("orders")
        .update({ payment_status: "paid" })
        .eq("external_ref", externalRef);

      if (updateError) {
        console.error("[WEBHOOK] Erro ao atualizar pedido:", updateError);
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }

      console.log("[WEBHOOK] Pedido atualizado para PAGO:", externalRef);

      // ===================================================
      // 4. Enviar e-mail de confirmação
      // ===================================================
      if (order.customer_email) {
        try {
          await resend.emails.send({
            from: "Agressivo <noreply@seusite.com>",
            to: order.customer_email,
            subject: `Pagamento confirmado — Pedido ${externalRef}`,
            html: `
              <h2>Pagamento confirmado! 🎉</h2>
              <p>Olá ${order.customer_name},</p>
              <p>Seu pagamento referente ao pedido <b>${externalRef}</b> foi confirmado com sucesso.</p>
              <p>Obrigado por comprar conosco!</p>
              <br/>
              <p>Agressivo®</p>
            `,
          });

          console.log("[WEBHOOK] Email enviado com sucesso");
        } catch (e) {
          console.error("[WEBHOOK] Erro ao enviar email:", e);
        }
      }
    }

    // ===================================================
    // 5. Retorno ao provedor
    // ===================================================
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[WEBHOOK] Erro fatal:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
