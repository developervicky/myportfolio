"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactEmail from "@/email/contactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";
  const name = formData.get("name");
  const senderEmail = formData.get("senderEmail");
  const msg = formData.get("msg");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender mail",
    };
  }
  if (!validateString(msg, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact form<onboarding@resend.dev>",
      to: "developer.vicky6@gmail.com",
      reply_to: senderEmail as string,
      subject: `Message from ${name}`,
      react: (
        <ContactEmail
          msg={msg as string}
          senderEmail={senderEmail as string}
          name={name as string}
        />
      ),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
