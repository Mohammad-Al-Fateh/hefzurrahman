"use client"; // <-- Keep this line for Next.js App Router

import React, { useState } from "react";
import Link from "next/link"; // Import Link for Next.js internal navigation
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons for hamburger menu

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with Bengali names and their corresponding English paths
  const navItems = [
    { name: "হোম", href: "/" }, // Home
    { name: "স্কলার সম্পর্কে", href: "/about-scholar" }, // About Scholar
    { name: "তামিরুল মিল্লাত কামিল মাদরাসা", href: "/madrasah" }, // Tamirul Millat Kamil Madrasah
    { name: "প্রকাশনা", href: "/publications" }, // Publications
    { name: "লেকচার", href: "/lectures" }, // Lectures
    { name: "যোগাযোগ", href: "/contact" }, // Contact
  ];

  return (
    <nav className="bg-gradient-to-r static top-0 from-green-700 to-green-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo/Site Title in Bengali */}
            <Link href="/" className="flex-shrink-0 text-xl font-bold">
              হেফজুর রহমান {/* [Scholar's Name] */}
              <span className="block text-sm font-normal">
                প্রিন্সিপাল, তামিরুল মিল্লাত কামিল মাদরাসা{" "}
                {/* Principal, Tamirul Millat Kamil Madrasah */}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">মূল মেনু খুলুন</span>{" "}
              {/* Open main menu */}
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-100 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)} // Close menu on item click
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
