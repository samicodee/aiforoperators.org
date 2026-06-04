import { NextResponse } from "next/server";

function get(formData: FormData, key: string) {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

async function saveToSupabase(data: Record<string, string | null>) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;

  const res = await fetch(`${url}/rest/v1/aiforx_leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  return res.ok;
}

async function sendEmail(data: Record<string, string | null>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO;
  const from = process.env.LEAD_NOTIFICATION_FROM;
  if (!apiKey || !to || !from) return;

  const rows = Object.entries(data)
    .map(([k, v]) => `${k}: ${v ?? "-"}`)
    .join("\n");

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((e) => e.trim()),
      subject: `New aiforoperators.org lead: ${data.name}`,
      text: rows,
    }),
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const redirectUrl = new URL("/thank-you/", request.url);

  const payload = {
    name: get(formData, "name"),
    phone: get(formData, "phone"),
    email: get(formData, "email") || `${get(formData, "phone")}@aiforoperators.org`,
    program: "operators",
    source_domain: "aiforoperators.org",
    business: get(formData, "company") || get(formData, "business"),
    role: get(formData, "role") || "operator",
    business_stage: null,
    problem_statement: get(formData, "priority") || get(formData, "problem_statement"),
  };

  if (!payload.name || !payload.phone || !payload.business || !payload.problem_statement) {
    redirectUrl.searchParams.set("status", "missing");
    return NextResponse.redirect(redirectUrl, 303);
  }

  try {
    await Promise.all([saveToSupabase(payload), sendEmail(payload)]);
    redirectUrl.searchParams.set("status", "received");
  } catch {
    redirectUrl.searchParams.set("status", "received");
  }

  return NextResponse.redirect(redirectUrl, 303);
}
