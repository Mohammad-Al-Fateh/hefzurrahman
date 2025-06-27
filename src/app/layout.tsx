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
  title: "হেফজুর রহমান - ইসলামিক স্কলার ও প্রিন্সিপাল",
  description:
    "ড. মো: হেফজুর রহমান তামিরুল মিল্লাত কামিল মাদরাসার প্রিন্সিপাল ও একজন ইসলামি চিন্তাবিদ। হাদিস, গবেষণা, বই ও ইসলামী কার্যক্রম সম্পর্কে জানুন।",
  keywords: [
    "হেফজুর রহমান",
    "হিফজুর রহমান",
    "Hefzur Rahman",
    "Hifzur Rahman",
    "ড. মো: হেফজুর রহমান",
    "ড. হেফজুর রহমান",
    "Dr. Hefzur Rahman",
    "তামিরুল মিল্লাত কামিল মাদরাসা",
    "ইসলামিক স্কলার বাংলাদেশ",
    "Principal Tamirul Millat Kamil Madrasah",
    "Islamic Scholar Bangladesh",
    "Bangla Islamic Scholar",
    "হাদিস গবেষক",
    "Bangla Madrasah Scholar",
    "Scholar, Teacher, Principal",
    "Bangla Islamic Teacher",
    "Bangla Researcher Islamic",
  ],
  authors: [{ name: "Dr. Hefzur Rahman" }],
  metadataBase: new URL("https://hefzurrahman.vercel.app/"),
  openGraph: {
    title: "হেফজুর রহমান - ইসলামিক স্কলার ও প্রিন্সিপাল",
    description:
      "Official Website of Dr. Hefzur Rahman, Principal of Tamirul Millat Kamil Madrasah — Discover his biography, lectures, books & Islamic research.",
    url: "https://hefzurrahman.vercel.app/",
    siteName: "হেফজুর রহমান",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "হেফজুর রহমান - স্কলার",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "হেফজুর রহমান - ইসলামিক স্কলার ও প্রিন্সিপাল",
    description:
      "Official website of Dr. Hefzur Rahman, Islamic Scholar & Principal of Tamirul Millat Kamil Madrasah.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "548jsiiwBxZPY3ss4bgLIk-tirGmZGrJTzHE0DKx2Uo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Hefzur Rahman" />
        <link rel="canonical" href="https://hefzurrahman.vercel.app/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta
          property="article:author"
          content="https://www.facebook.com/hifjur.rahman.386756"
        />
        <meta property="profile:username" content="hifjur.rahman.386756" />
        <meta
          name="google-site-verification"
          content="548jsiiwBxZPY3ss4bgLIk-tirGmZGrJTzHE0DKx2Uo"
        />
      </head>
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
