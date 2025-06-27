import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { MdSchool, MdHome, MdApartment } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Green Theme Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 py-16 px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          আমাদের সাথে যে কোনোভাবে যোগাযোগ করতে পারেন
        </p>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Home Address */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="bg-green-600 p-4 text-white flex items-center">
              <MdHome className="text-2xl mr-3" />
              <h2 className="text-xl font-semibold">বাসার ঠিকানা</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  দক্ষিণ তেতাভূমি গ্রাম, ব্রাহ্মণপাড়া উপজেলা, কুমিল্লা জেলা,
                  বাংলাদেশ
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">+880 1234 567890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">example@email.com</p>
              </div>
            </div>
          </div>

          {/* Madrasah Address */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="bg-green-600 p-4 text-white flex items-center">
              <MdSchool className="text-2xl mr-3" />
              <h2 className="text-xl font-semibold">মাদ্রাসার ঠিকানা</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  হাজিগঞ্জ দারুল উলুম আহমাদিয়া কামিল মাদ্রাসা, চাঁদপুর, বাংলাদেশ
                </p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">+880 1234 567891</p>
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-green-600 mr-3 flex-shrink-0" />
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                >
                  www.madrasahwebsite.com
                </a>
              </div>
            </div>
          </div>

          {/* Society Address */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
            <div className="bg-green-600 p-4 text-white flex items-center">
              <MdApartment className="text-2xl mr-3" />
              <h2 className="text-xl font-semibold">সমাজের ঠিকানা</h2>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  ইনসাফ হাউজিং সোসাইটি, দৌলতপুর, কুমিল্লা মহানগরী, বাংলাদেশ
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-green-600 mr-3 flex-shrink-0" />
                <p className="text-gray-700">+880 1234 567892</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border-t-4 border-green-500">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            সোশ্যাল মিডিয়ায় অনুসরণ করুন
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center w-16 h-16"
              aria-label="Facebook"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="#"
              className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center w-16 h-16"
              aria-label="YouTube"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="#"
              className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center w-16 h-16"
              aria-label="Twitter"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              className="bg-green-600 text-white p-4 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center w-16 h-16"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              আমাদের ইউটিউব চ্যানেল: আস সালেহীন
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
            >
              সাবস্ক্রাইব করুন
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              আমাদের অবস্থান
            </h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map - replace with actual map component */}
              <div className="w-full h-64 flex items-center justify-center text-gray-500">
                [গুগল ম্যাপ এম্বেড কোড]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
