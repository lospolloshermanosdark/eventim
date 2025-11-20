import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend } from "@/lib/email";
import templateHTMLPedido from "@/app/templates/pedido";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      externalRef,
      amount,
      title,
      customer_name,
      customer_email,
      customer_phone,
      customer_cpf,
      pix_qrcode
    } = body;

    // 1 — Criar pedido no banco
    const { data, error } = await supabaseAdmin
      .from("orders")
      .insert({
        external_ref: externalRef,
        amount,
        title,
        customer_name,
        customer_email,
        customer_phone,
        customer_cpf,
        payment_status: "pending",
        pix_qrcode
      })
      .select()
      .single();

    if (error) {
      console.error("Erro ao criar pedido:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // 2 — Enviar email "Pedido criado - Pague seu PIX"
    if (customer_email) {
     await resend.emails.send({
  from: "Eventim <contato@eventim-ingressos.site>",
  to: customer_email,
  subject: "Seu Código de Verificação",
  html: templateHTMLPedido
    .replace("{{CODIGO}}", data.external_ref)
    .replace("{{NOME}}", customer_name || "Cliente"),
});

    }

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: true }, { status: 500 });
  }
}


