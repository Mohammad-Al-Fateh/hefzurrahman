import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_defult/NavBar";
import Footer from "./_defult/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "হেফজুর রহমান - স্কলার", // Example: "Hefzur Rahman - Scholar"
  description:
    "তামিরুল মিল্লাত কামিল মাদরাসার প্রিন্সিপাল হেফজুর রহমানের অফিসিয়াল ওয়েবসাইট।", // Example: "Official website of Hefzur Rahman, Principal of Tamirul Millat Kamil Madrasah."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
