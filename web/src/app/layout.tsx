import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const poppinsMono = Poppins({
  weight: "400",
  variable: "--font-poppins-mono",
  subsets: ["latin"],
  preload: true
});

export const metadata: Metadata = {
  title: "EcoPeso",
  description: "Tree Donation Platform",
  icons: '/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        </body>
    </html>
  );
}
