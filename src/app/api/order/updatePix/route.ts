import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabaseAdmin
    .from("orders")
    .update({
      pix_id: body.pix_id,
      pix_qrcode: body.qrcode,
      pix_expiration: body.expiration
    })
    .eq("external_ref", body.external_ref);

  if (error) return NextResponse.json({ error }, { status: 500 });

  return NextResponse.json({ ok: true });
}
