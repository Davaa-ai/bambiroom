// deno-lint-ignore-file
/* eslint-disable no-var */
declare const Deno: { serve: (handler: (req: Request) => Promise<Response> | Response) => void; env: { get: (key: string) => string | undefined } };
// supabase/functions/telegram-order/index.ts
// Forwards order data to a Telegram bot

const ALLOWED_ORIGINS = [
  'https://spinphysics.store',
  'https://bambiroom.mn',
  'http://localhost:5173',
  'http://localhost:3000',
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: getCorsHeaders(req) });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
      status: 405,
      headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, phone, addr, tier, paymentMethod } = await req.json();

    if (!phone || !addr) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), {
        status: 400,
        headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
      });
    }

    const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars');
      return new Response(JSON.stringify({ ok: false, error: 'Server config error' }), {
        status: 500,
        headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
      });
    }

    // Use plain text to avoid Markdown/HTML parsing issues with special characters
    const message = [
      '🛒 Шинэ захиалга!',
      '',
      '👤 Нэр: ' + (name || 'Тодорхойгүй'),
      '📱 Утас: ' + phone,
      '📍 Хаяг: ' + addr,
      '📦 Захиалга: ' + tier,
      '💳 Төлбөр: ' + (paymentMethod || 'Тодорхойгүй'),
      '🕐 Огноо: ' + new Date().toLocaleString('mn-MN', { timeZone: 'Asia/Ulaanbaatar' }),
    ].join('\n');

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const tgData = await tgRes.json();

    if (tgData.ok) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Telegram API error:', JSON.stringify(tgData));
      return new Response(JSON.stringify({ ok: false, error: 'Telegram: ' + (tgData.description || 'Unknown error') }), {
        status: 500,
        headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
      });
    }
  } catch (err) {
    console.error('Error:', err);
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
      headers: { ...getCorsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
});
