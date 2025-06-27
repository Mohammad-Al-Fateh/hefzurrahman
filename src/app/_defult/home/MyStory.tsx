import React from "react";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function MyStory() {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-green-100 opacity-50"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="flex justify-center items-center gap-2 text-3xl sm:text-4xl font-extrabold text-green-800 mb-6">
          <BiBookOpen className="h-8 w-8 text-green-700" />
          আমার গল্প
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 text-justify">
          ড. মো: হেফজুর রহমান কুমিল্লা জেলার দেবিদ্বার থানাধীন জয়পুর গ্রামে ১৯৭২
          সালে ২রা মার্চ মাতুলালয়ে জন্মগ্রহন করেন। নয় ভাই বোনের মধ্যে তিনি
          ষষ্ঠ্য সন্তান। পিতা মো:আবিদুর রহমান, মাতা মাজেদা বেগমের জেষ্ঠ পুত্র।
          কুমিল্লা জেলার ব্রাহ্মণপাড়া উপজেলার দক্ষিণ তেতাভূমি গ্রামে তার পরিবার
          বসবাস করেন। গ্রামের প্রাইমারী স্কুলে তার পড়ালেখার খড়ি হয়। পরবর্তীতে
          পিতার চাকুরীস্থল দেবিদ্বার উপজেলার সুলতানপুর ফাজিল মাদরাসায় ১৯৭৮ সালে
          এবতেদায়ী ৪র্থ শ্রেণীতে ভর্তি হন। তখন তার পিতা উক্ত মাদরাসার অধ্যক্ষ
          হিসাবে কর্মরত ছিলেন। অতঃপর ১৯৭৯ সালে তার পিতা কুমিল্লা জেলার দেবিদ্বার
          উপজেলার ধামতি ইসলামিয়া কামিল মাদরাসায় মুহাদ্দিস নিযুক্ত হলে তিনি তার
          পিতার সঙ্গে চলেযান এবং এবতেদায়ী ৫ম শ্রেণীতে উক্ত মাদরাসায় ভর্তি হন।
          পিতার নিবিড় তত্ত্বাবধানে তার পড়াশোনা চলতে থাকে। ৮ম শ্রেণীর তৎকালীন
          বৃত্তি পরীক্ষায় তিনি বৃত্তিপ্রাপ্ত হন এবং ধর্মমন্ত্রি ও জামিয়াতুল
          মোদাররেসীনের প্রতিষ্ঠাতা সভাপতি জনাব মাও: আব্দুল মান্নান সাহেবের কাছ
          থেকে পুরষ্কার গ্রহন করেন। এবতেদায়ী ৫ম শ্রেণী থেকে কামিল (হাদিস)
          পর্যন্ত তিনি ধামতি ইসলামিয়া কামিল মাদরাসায় পিতার পরিচর্যায় ও
          সান্নিধ্যে শিক্ষালাভ করেন। ১৯৮৬ সালে সাধারণ বিভাগ হতে মেধাবৃত্তি
          সহকারে দাখিল পরীক্ষায় প্রথম বিভাগে উত্তীর্ন হন। ...
        </p>

        <Link
          href="/about-scholar"
          className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          আরও পড়ুন <HiArrowNarrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
