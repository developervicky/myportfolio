import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSecContextProvider from "@/context/activeSecContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";
import ThemeContextProvider from "@/context/themeContext";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}  relative bg-slate-100  text-gray-950 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90 `}
        suppressHydrationWarning={true}
      >
        <ThemeContextProvider>
          <ActiveSecContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSecContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
