import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'missionpowerland@gmail.com', // আপনার জিমেইল
        pass: 'habb cknl vsra mcer',          // আপনার ১৬ অক্ষরের অ্যাপ পাসওয়ার্ড
      },
    });

    const mailOptions = {
      from: email,
      to: 'missionpowerland@gmail.com',
      subject: `Mission Power Inquiry: ${subject}`,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 25px;">
                    <h2 style="color: #2563eb; margin-top: 0;">New Project Inquiry</h2>
                    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                    <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-weight: bold; color: #475569;">Message Details:</p>
                    <p style="background: #f8fafc; padding: 15px; border-radius: 8px; color: #334155;">${message}</p>
                    <footer style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
                        This message was sent from missionpowerland.com contact hub.
                    </footer>
                </div>
            `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}