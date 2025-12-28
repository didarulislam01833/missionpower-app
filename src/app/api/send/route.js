import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // ১. জিমেইল সার্ভারের সঠিক কনফিগারেশন (Vercel Env Variables ব্যবহার করে)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // Port 465 এর জন্য true
      auth: {
        // এই ভ্যালুগুলো আপনি অলরেডি Vercel-এ সেভ করেছেন
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ২. মেইলের কন্টেন্ট সেটআপ
    const mailOptions = {
      // 'from' এ আপনার নিজের ইমেইল থাকবে (Vercel থেকে আসবে)
      from: `"Mission Power Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // আপনার নিজের ইমেইলে মেইল যাবে
      replyTo: email, // আপনি রিপ্লাই দিলে কাস্টমারের ইমেইলে যাবে
      subject: `Mission Power Land Inquiry: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Message Received</h1>
          </div>
          <div style="padding: 30px; line-height: 1.6; color: #333;">
            <p style="margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
              <strong style="color: #2563eb;">Customer Name:</strong> ${name}
            </p>
            <p style="margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
              <strong style="color: #2563eb;">Email Address:</strong> ${email}
            </p>
            <p style="margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
              <strong style="color: #2563eb;">Phone Number:</strong> ${phone}
            </p>
            <p style="margin-bottom: 15px; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
              <strong style="color: #2563eb;">Subject:</strong> ${subject}
            </p>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <strong style="display: block; margin-bottom: 10px; color: #2563eb;">Message:</strong>
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
          <div style="background-color: #f3f4f6; color: #6b7280; padding: 15px; text-align: center; font-size: 12px;">
            This email was sent automatically from missionpowerland.com
          </div>
        </div>
      `,
    };

    // ৩. মেইল পাঠানো শেষ না হওয়া পর্যন্ত ফাংশনটি চালু থাকবে
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Nodemailer Error Log:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}