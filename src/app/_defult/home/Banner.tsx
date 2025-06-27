import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-green-800 to-green-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            হেফজুর রহমান
          </h1>
          <h2 className="text-xl sm:text-2xl mb-6">
            প্রিন্সিপাল, তামিরুল মিল্লাত কামিল মাদরাসা
          </h2>
          <p className="mb-8 text-base sm:text-lg leading-relaxed max-w-xl">
            হেফজুর রহমান একজন খ্যাতনামা ইসলামি চিন্তাবিদ ও শিক্ষক। তিনি তামিরুল
            মিল্লাত কামিল মাদরাসার প্রিন্সিপাল হিসেবে শিক্ষা ও সমাজ উন্নয়নে
            অগ্রণী ভূমিকা পালন করে যাচ্ছেন।
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            যোগাযোগ করুন
          </Link>
        </div>

        {/* Image on Right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/hefzur-rahman.jpeg"
            alt="হেফজুর রহমান"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}
