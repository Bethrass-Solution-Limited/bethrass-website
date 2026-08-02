import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  email?: unknown;
  name?: unknown;
};

function validatePayload(payload: Payload) {
  const errors: Record<string, string> = {};

  const email =
    typeof payload.email === "string"
      ? payload.email.trim().toLowerCase()
      : "";

  const name =
    typeof payload.name === "string"
      ? payload.name.trim()
      : "";

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Please use a valid email address.";
  }

  return { errors, email, name };
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid request payload.",
      },
      {
        status: 400,
      }
    );
  }

  const { errors, email, name } = validatePayload(body as Payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        success: false,
        errors,
      },
      {
        status: 400,
      }
    );
  }

  // Save subscriber to Supabase

  const { error: dbError } = await supabase
    .from("newsletter_subscribers")
    .insert([
      {
        email,
        name: name || null,
        source: "website",
      },
    ]);

  if (dbError) {
    // Duplicate email

    if (dbError.code === "23505") {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already subscribed.",
        },
        {
          status: 409,
        }
      );
    }

    console.error(dbError);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save subscriber.",
      },
      {
        status: 500,
      }
    );
  }

  // Send notification email

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        success: false,
        error: "RESEND_API_KEY is missing.",
      },
      {
        status: 500,
      }
    );
  }

  const timestamp = new Date().toISOString();

  const payload = {
    from: "Bethrass <contact@bethrass.com>",
    to: ["contact@bethrass.com"],
    subject: "New Bethrass Newsletter Subscription",

    text: [
      `Name: ${name || "Not provided"}`,
      `Email: ${email}`,
      `Subscribed at: ${timestamp}`,
    ].join("\n"),

    html: `
      <h2>New Newsletter Subscription</h2>

      <p><strong>Name:</strong> ${name || "Not provided"}</p>

      <p><strong>Email:</strong> ${email}</p>

      <p><strong>Subscribed at:</strong> ${timestamp}</p>
    `,
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
    console.error(await response.text());

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send notification email.",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Subscribed successfully",
  });
}