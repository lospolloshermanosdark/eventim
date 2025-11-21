import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const PUBLIC_KEY = process.env.PAYLOOP_PUBLIC_KEY!;
    const SECRET_KEY = process.env.PAYLOOP_SECRET_KEY!;

    const credentials = Buffer.from(`${PUBLIC_KEY}:${SECRET_KEY}`).toString("base64");

    const res = await fetch("https://api.pagloop.com/v1/transactions", {
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
