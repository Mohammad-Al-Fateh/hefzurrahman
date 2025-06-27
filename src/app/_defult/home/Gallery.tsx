"use client";

import React, { useState } from "react";
import Image from "next/image";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  caption?: string;
};

const images: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery1.jpg",
    alt: "Gallery Image 1",
    caption: "ছবি ১: একটি সুন্দর দৃশ্য",
  },
  {
    id: 2,
    src: "/images/gallery2.jpg",
    alt: "Gallery Image 2",
    caption: "ছবি ২: প্রকৃতির মনোরম চিত্র",
  },
  {
    id: 3,
    src: "/images/gallery3.jpg",
    alt: "Gallery Image 3",
    caption: "ছবি ৩: শান্ত পরিবেশ",
  },
  {
    id: 4,
    src: "/images/gallery4.jpg",
    alt: "Gallery Image 4",
    caption: "ছবি ৪: সূর্যাস্তের দৃশ্য",
  },
  // add more images here
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-green-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">
          গ্যালারি
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          প্রিয় মুহূর্তের কিছু ছবি এখানে দেখতে পাবেন।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="group relative block w-full rounded-lg overflow-hidden shadow-lg focus:outline-none"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 truncate">
              {img.caption}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] p-4 bg-white rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="object-contain rounded"
            />
            {selectedImage.caption && (
              <p className="mt-4 text-center text-gray-800">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
