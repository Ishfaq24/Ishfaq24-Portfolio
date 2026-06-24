import { createFileRoute } from "@tanstack/react-router";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_TO_EMAIL = "ib8543092@gmail.com";
const CONTACT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
          console.error("Missing RESEND_API_KEY");
          return Response.json(
            { message: "Email service is not configured." },
            { status: 500 },
          );
        }

        let payload: ContactPayload;
        try {
          payload = (await request.json()) as ContactPayload;
        } catch {
          return Response.json(
            { message: "Invalid request body." },
            { status: 400 },
          );
        }

        const name = cleanText(payload.name, 100);
        const email = cleanText(payload.email, 255);
        const message = cleanText(payload.message, 2000);

        if (!name || !isValidEmail(email) || !message) {
          return Response.json(
            { message: "Please fill out every field correctly." },
            { status: 400 },
          );
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
            text: [
              `Name: ${name}`,
              `Email: ${email}`,
              "",
              "Message:",
              message,
            ].join("\n"),
          }),
        });

        if (!resendResponse.ok) {
          const errorBody = await resendResponse.text();
          console.error(
            `Resend failed with ${resendResponse.status}: ${errorBody}`,
          );
          return Response.json(
            { message: "Message could not be sent right now." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
