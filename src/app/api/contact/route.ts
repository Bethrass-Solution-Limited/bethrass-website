import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validatePayload(payload: Record<string, unknown>) {
  const errors: Record<string, string> = {};

  const fullName = typeof payload.fullName === "string" ? payload.fullName.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";

  if (fullName.length < 2) {
    errors.fullName = "Full name must contain at least 2 characters.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (subject.length < 5) {
    errors.subject = "Subject must contain at least 5 characters.";
  }

  if (message.length < 20) {
    errors.message = "Message must contain at least 20 characters.";
  }

  return { errors, fullName, email, subject, message };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { success: false, error: "Invalid request payload." }, 
      { status: 400 }
    );
  }

  const gotcha = typeof body._gotcha === "string" ? body._gotcha.trim() : "";
  if (gotcha.length > 0) {
    return NextResponse.json({ success: false, error: "Spam detected." }, { status: 400 });
  }

  const { errors, fullName, email, subject, message } = validatePayload(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { success: false, error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const organization = typeof body.organization === "string" ? body.organization.trim() : "";
  const timestamp = new Date().toISOString();
  const textBody = [
    `Sender name: ${fullName}`,
    `Sender email: ${email}`,
    `Organization: ${organization || "(not provided)"}`,
    `Subject: ${subject}`,
    `Message:`,
    message,
    "",
    `Submitted at: ${timestamp}`,
  ].join("\n");

  const payload = {
    from: "contact@bethrass.com",
    to: ["contact@bethrass.com"],
    subject: `[Bethrass Website] ${subject}`,
    text: textBody,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const errorMessage =
      typeof errorBody.error === "string"
        ? errorBody.error
        : "Unable to send email. Please try again later.";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: response.status >= 400 ? response.status : 500 }
    );
  }

  return NextResponse.json({ success: true });
}
