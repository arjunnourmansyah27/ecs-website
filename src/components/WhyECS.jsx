// src/components/WhyECS.jsx
import React from "react";

export default function WhyECS() {
  return (
    <section className="min-h-screen bg-white text-gray-600 flex items-center justify-center py-16 px-6">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">Kenapa Harus ECS?</h2>
        <p className="text-lg mb-12">
          ECS, solusi terpercaya instalasi Home Charging untuk kendaraan listrik yang aman dan cepat.<br />
          Dengan ECS, Anda dapat mengisi daya kendaraan Anda dengan lebih efisien.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">
              <img src="path-to-your-icon-1.svg" alt="Icon 1" className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Dukungan Bahasa Indonesia</h3>
            <p className="text-sm">
              Merupakan produk buatan Indonesia dengan bahasa Indonesia sebagai bahasa utama. Dapatkan dukungan dari tim support kami tanpa rasa khawatir.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">
              <img src="path-to-your-icon-2.svg" alt="Icon 2" className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Affordable</h3>
            <p className="text-sm">
              Memberikan penawaran dengan harga spesial dan terjangkau dibandingkan produk lain karena terdapat 3 modul dalam 1 aplikasi.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">
              <img src="path-to-your-icon-3.svg" alt="Icon 3" className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Bisa Melakukan Kustomisasi</h3>
            <p className="text-sm">
              Menyediakan solusi monitoring jaringan sesuai kebutuhan perusahaan, termasuk permintaan kustomisasi untuk menyesuaikan kebutuhan spesifik perusahaan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}