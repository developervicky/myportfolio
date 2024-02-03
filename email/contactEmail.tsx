import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactFormProps = {
  msg: string;
  senderEmail: string;
  name: string;
};

export default function ContactEmail({
  msg,
  senderEmail,
  name,
}: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="my-10 rounded-md border border-black/10 bg-white px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from {name}
              </Heading>
              <Text>{msg}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
