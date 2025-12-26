import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, phone, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: 'Mission Power Land <onboarding@resend.dev>',
            to: [process.env.CONTACT_EMAIL],
            reply_to: email,
            subject: `[${subject}] - New Inquiry from ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #2563eb;">Mission Power Land - Project Inquiry</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            ${message}
          </div>
          <p style="font-size: 11px; color: #9ca3af; margin-top: 20px;">Sent from MPL Website Contact Form</p>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        return NextResponse.json({ error: "Server connection failed" }, { status: 500 });
    }
}