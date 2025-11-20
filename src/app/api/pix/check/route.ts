import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const txId = url.searchParams.get("id");

    if (!txId) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const SECRET_KEY = process.env.NEXT_PUBLIC_PAYFORT_SECRET!;
    const COMPANY_ID = process.env.NEXT_PUBLIC_PAYFORT_COMPANY_ID!;

    const credentials = Buffer.from(`${SECRET_KEY}:${COMPANY_ID}`).toString("base64");

    const res = await fetch(`https://api.pagloop.com/v1/transactions/${txId}`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    return NextResponse.json({
      paid: data.status === "paid",
      status: data.status
    });

  } catch (e) {
    return NextResponse.json({ error: true }, { status: 500 });
  }
}
