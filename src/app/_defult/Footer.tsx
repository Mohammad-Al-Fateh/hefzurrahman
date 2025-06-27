"use client";

import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-700 text-green-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full mb-4"
            priority
          />
          <h2 className="text-2xl font-bold mb-2">হেফজুর রহমান</h2>
          <p className="text-green-200 text-center md:text-left max-w-sm leading-relaxed">
            ইসলামি জ্ঞান প্রচার ও সমাজের উন্নয়নের লক্ষ্যে ড. মো: হেফজুর রহমানের
            ব্যক্তিগত ওয়েবসাইট। এখানে পাবেন তাঁর লেখনী, ভিডিও ও মূল্যবান শিক্ষা।
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3 text-green-200">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">
            দ্রুত লিঙ্ক
          </h3>
          <nav className="flex flex-col space-y-2 text-lg">
            <Link href="/" className="hover:text-white transition">
              হোম
            </Link>
            <Link href="/about-scholar" className="hover:text-white transition">
              স্কলার সম্পর্কে
            </Link>
            <Link href="/madrasah" className="hover:text-white transition">
              তামিরুল মিল্লাত কামিল মাদরাসা
            </Link>
            <Link href="/publications" className="hover:text-white transition">
              প্রকাশনা
            </Link>
            <Link href="/lectures" className="hover:text-white transition">
              লেকচার
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              যোগাযোগ
            </Link>
          </nav>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items-start text-green-200">
          <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2">
            যোগাযোগ
          </h3>
          <p className="mb-4 max-w-sm text-center md:text-left leading-relaxed">
            ফোন:{" "}
            <a
              href="tel:+8801617688805"
              className="hover:text-white transition"
            >
              +8801617688805
            </a>
            <br />
            ইমেইল:{" "}
            <a
              href="mailto:hafazrobiussani@gmail.com"
              className="hover:text-white transition"
            >
              hafazrobiussani@gmail.com
            </a>
          </p>

          <div className="flex space-x-5 text-lg">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:hafazrobiussani@gmail.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-green-300 text-sm select-none">
        © ২০২৫ ড. মো: হেফজুর রহমান | সকল অধিকার সংরক্ষিত
      </div>
    </footer>
  );
}
