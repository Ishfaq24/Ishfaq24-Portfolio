const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_TO_EMAIL = "ib8543092@gmail.com";
const CONTACT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

type VercelRequest = {
  method?: string;
  body?: ContactPayload | string;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: VercelRequest["body"]) {
  if (typeof body === "string") {
    return JSON.parse(body) as ContactPayload;
  }

  return (body ?? {}) as ContactPayload;
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  response.setHeader("Content-Type", "application/json");

  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY");
    return response.status(500).json({ message: "Email service is not configured." });
  }

  let payload: ContactPayload;
  try {
    payload = parsePayload(request.body);
  } catch {
    return response.status(400).json({ message: "Invalid request body." });
  }

  const name = cleanText(payload.name, 100);
  const email = cleanText(payload.email, 255);
  const message = cleanText(payload.message, 2000);

  if (!name || !isValidEmail(email) || !message) {
    return response.status(400).json({ message: "Please fill out every field correctly." });
  }

  const resendResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text();
    console.error(`Resend failed with ${resendResponse.status}: ${errorBody}`);
    return response.status(502).json({ message: "Message could not be sent right now." });
  }

  return response.status(200).json({ ok: true });
}
