import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const SECRET_KEY = process.env.NEXT_PUBLIC_PAYFORT_SECRET!;
    const COMPANY_ID = process.env.NEXT_PUBLIC_PAYFORT_COMPANY_ID!;

    const credentials = Buffer.from(`${SECRET_KEY}:${COMPANY_ID}`).toString("base64");

    const res = await fetch("https://api.payfortbr.club/functions/v1/transactions", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ error: true, data }, { status: res.status });
    }

    return NextResponse.json(data);

  } catch (e) {
    return NextResponse.json({ error: true }, { status: 500 });
  }
}
