"use server";

import { Resend } from 'resend';
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const result = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!result.success) {
    return {
      success: false,
      message: "Invalid form data",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = result.data;

  const emailTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #03343b; color: white; padding: 20px; text-align: center; border-radius: 10px; }
        .content { background-color: #f9f9f9; border: 1px solid #ddd; padding: 20px; margin-top: 20px; border-radius: 10px; }
        .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #888; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>New Contact Form Submission</h1>
      </div>
      <div class="content">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Message:</h2>
        <p>${message}</p>
      </div>
      <div class="footer">
        <p>Sent from your portfolio contact form</p>
      </div>
    </body>
    </html>
  `;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'hanaddaahir124l@gmail.com',
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      html: emailTemplate,
    });

    console.log('Email sent successfully:', data);

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
