import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vignesh Kathiresan | Portfolio",
  description:
    "Vignesh develops applications using stacks like Next.JS, Node.JS, MongoDB and AWS ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}   relative bg-slate-100 pt-24 text-gray-950 sm:pt-36`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
