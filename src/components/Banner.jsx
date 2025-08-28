import React from "react";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-[#078781] to-[#03524E] p-8 md:p-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          ECS siap membantu Anda dalam instalasi SPKLU Charging Station untuk
          kendaraan listrik di rumah, kantor, maupun area publik. Aman, cepat,
          dan efisien.
        </h2>
        <a
          href="#"
          className="inline-block bg-white text-[#078781] py-2 px-6 rounded-full font-medium mt-4 hover:bg-gray-100 transition"
        >
          HUBUNGI ECS &rarr;
        </a>
      </div>
    </section>
  );
}
