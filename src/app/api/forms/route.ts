import { NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

import { verifyRecaptcha } from "@/shared/lib/recaptcha";

const ENABLE_RECAPTCHA = true;

type RequestPayload = {
  name: string;
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  message: string;
};

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = (await request.json()) as {
      formType: "request";
      data: RequestPayload & { recaptcha?: string };
    };

    const { formType } = body;
    const rawData = body.data as RequestPayload & { recaptcha?: string };

    const recaptcha = rawData.recaptcha;

    if (ENABLE_RECAPTCHA) {
      if (!recaptcha || recaptcha === "disabled") {
        return NextResponse.json(
          { message: "reCAPTCHA verification is required." },
          { status: 400 },
        );
      }
      const isValid = await verifyRecaptcha(recaptcha);
      if (!isValid) {
        return NextResponse.json(
          { message: "reCAPTCHA verification failed. Please try again." },
          { status: 400 },
        );
      }
    }

    const { recaptcha: _recaptcha, ...data } = rawData as Record<
      string,
      unknown
    > & { recaptcha?: string };
    void _recaptcha;

    const apiKey = process.env.SENDGRID_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !adminEmail || !fromEmail) {
      console.error("SENDGRID_API_KEY, ADMIN_EMAIL or FROM_EMAIL is not set");
      return NextResponse.json(
        { message: "Email configuration is missing." },
        { status: 500 },
      );
    }

    sgMail.setApiKey(apiKey);

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    let subject: string;
    let html: string;
    let userEmail: string | undefined;

    if (formType === "request") {
      const d = data as RequestPayload;
      userEmail = d.email;
      subject = "Request";
      html = `
        <h2>Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(d.name)}</p>
        <p><strong>Company name:</strong> ${escapeHtml(d.companyName)}</p>
        <p><strong>Website:</strong> ${escapeHtml(d.website)}</p>
        <p><strong>Message:</strong> ${escapeHtml(d.message)}</p>
        <p><strong>Full name:</strong> ${escapeHtml(d.fullName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(d.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(d.email)}</p>
      `;

      const msg = {
        to: adminEmail,
        from: fromEmail,
        subject,
        html,
      };

      await sgMail.send(msg);

      console.log(`Request confirmation email sent to ${userEmail}`);
    }
  } catch (error) {
    console.error("Error submitting request:", error);
    return NextResponse.json(
      { message: "Failed to submit request" },
      { status: 500 },
    );
  }
  return NextResponse.json(
    { message: "Request submitted successfully" },
    { status: 200 },
  );
}
