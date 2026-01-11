import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../public/css/fonts.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toji Communication Consultancy",
  description:
    "There's little that communication cannot solve. If you have a problem, we have a solution. Try us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
