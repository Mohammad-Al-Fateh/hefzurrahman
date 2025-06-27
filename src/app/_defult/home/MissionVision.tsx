"use client";

import React from "react";
import { MdOutlineVisibility } from "react-icons/md";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">
            আমার লক্ষ্য ও দৃষ্টি
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            একটি সুন্দর সমাজ বিনির্মাণে জ্ঞান, গবেষণা ও নৈতিকতা চর্চার মাধ্যমে
            ইসলামী মূল্যবোধ প্রতিষ্ঠাই আমার জীবনের মূল উদ্দেশ্য।
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-green-800">
                আমার লক্ষ্য (Mission)
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              ইসলামী শিক্ষা, গবেষণা ও নৈতিকতা বিকাশে নিবেদিত থাকা আমার লক্ষ্য।
              তরুণদের মাঝে দ্বীনের প্রতি ভালোবাসা সৃষ্টি করে একটি আদর্শ ও
              সুন্নাহভিত্তিক সমাজ প্রতিষ্ঠা করতে চাই। একজন শিক্ষক ও গবেষক হিসেবে
              আমি বিশ্বাস করি— ইলম ছড়িয়ে দেওয়া এবং মানুষের আত্মিক উন্নয়নের
              মাধ্যমে একটি সচেতন ও আলোকিত জাতি গড়া সম্ভব।
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center gap-3 mb-4">
              <MdOutlineVisibility className="text-green-700 text-4xl" />
              <h3 className="text-2xl font-bold text-green-800">
                আমার দৃষ্টি (Vision)
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              ভবিষ্যৎ প্রজন্ম যেন ইসলামি আদর্শ, জ্ঞান ও গবেষণায় সমৃদ্ধ হয়, এমন
              একটি সমাজ বিনির্মাণই আমার দৃষ্টি। আমি চাই একটি নৈতিক, আত্মিক ও
              জ্ঞাননির্ভর সমাজ যেখানে সত্য, সততা ও ইনসাফের উপর জীবন পরিচালিত
              হবে। আমার গবেষণা, লেখালেখি এবং দাওয়াতি কাজের মাধ্যমে আমি একটি
              দীর্ঘস্থায়ী প্রভাব ফেলতে চাই, যা আগামী প্রজন্মের জন্য অনুপ্রেরণার
              উৎস হয়ে থাকবে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
