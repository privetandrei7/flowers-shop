import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, service: "telegram-webhook" });
}

export async function POST(request: Request) {
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const receivedSecret = request.headers.get("x-telegram-bot-api-secret-token");

  if (secret && receivedSecret !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const update = await request.json();

  // Telegram Business messages arrive as business_message updates.
  // Ordinary bot messages arrive as message updates.
  console.log("Telegram update received", {
    update_id: update?.update_id,
    type: update?.business_message ? "business_message" : update?.message ? "message" : "other",
  });

  return NextResponse.json({ ok: true });
}
