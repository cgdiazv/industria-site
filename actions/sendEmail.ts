"use server";

import * as React from 'react';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';

// The API key should be in your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const { data, error } = await resend.emails.send({
      // Use your verified domain here
      from: 'Industria Alimenticia <info@indevasa.com>', 
      to: ['laexperta.ventas2@yahoo.com'],
      subject: `Nueva consulta de ${name}`,
      // This allows you to reply directly to the customer's email
      replyTo: email, 
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false };
    }

    return { success: true };
  } catch (err) {
    console.error("System Error:", err);
    return { success: false };
  }
}