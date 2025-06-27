"use client";

import React from "react";

export default function Lectures() {
  const videos = [
    {
      id: "fBKAF59f3Wg",
      title: "",
      src: "https://www.youtube.com/embed/fBKAF59f3Wg?si=SSNclmG8piBKl0Yl",
    },
    {
      id: "jvfhKrrkx-g",
      title: "",
      src: "https://www.youtube.com/embed/jvfhKrrkx-g?si=xlmzJF6nxuxv6Hqm",
    },
    {
      id: "71y3kR0snJ4",
      title: "",
      src: "https://www.youtube.com/embed/71y3kR0snJ4?si=k33dQft3KDtBmzaK",
    },
    {
      id: "_5iz4GH2TgA",
      title: "",
      src: "https://www.youtube.com/embed/_5iz4GH2TgA?si=9fsvH6dXkjvjOR-v",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-green-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-6">
          লেকচার সমূহ
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          ড. মো: হেফজুর রহমানের বাছাই করা কিছু গুরুত্বপূর্ণ ইসলামী আলোচনা দেখুন।
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {videos.map(({ id, title, src }) => (
            <div
              key={id}
              className="rounded-lg shadow-md overflow-hidden bg-white"
            >
              <iframe
                width="100%"
                height="215"
                src={src}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video"
              />
              <h3 className="p-2 text-green-900 font-semibold text-sm truncate">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
