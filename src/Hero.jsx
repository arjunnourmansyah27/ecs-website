import React from "react";
import WhyECS from "./components/WhyECS";

export default function Hero() {
  return (
    <main className="w-full text-white bg-gradient-to-b from-[#078781] to-[#03524E] snap-y snap-mandatory">
      {/* aksen garis kiri (opsional) */}
      <div className="relative">
        <div
          className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden sm:block"
          aria-hidden
        />

        <section className="min-h-screen snap-start flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 pt-24 pb-16 lg:pt-28">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Copy */}
              <div className="space-y-6">
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[]">
                  Penyedia Jaringan Pengisian
                  <br /> Daya Terkemuka di Indonesia
                </h1>

                <p className="max-w-xl text-white/80">
                  Memenuhi segala kebutuhan Home Charging yang sudah terpercaya
                  di seluruh Indonesia.
                </p>

                <div>
                  <a
                    href="#hubungi-ecs"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    HUBUNGI ECS
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Media tile */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="img/hero/electric-car.svg"
                  alt="ECS Charger"
                  className="w-60 sm:w-72 md:w-270"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — 1 layar penuh */}
        <section className="min-h-screen snap-start flex items-center">
          <div className="mx-auto max-w-7xl w-full px-6 pt-20 pb-16 lg:pt-24">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(220px,360px)_1fr]">
              {/* Media kiri */}
              <div className="order-2 lg:order-1">
                <div
                  className="aspect-square w-full rounded-2xl bg-white/30 shadow-2xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-[2px]"
                  aria-hidden
                />
              </div>

              {/* Teks kanan */}
              <div className="order-1 space-y-4 lg:order-2">
                <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                  Solusi Pengisian Kendaraan Listrik (EV).
                  <br /> Isi daya cepat dan ramah lingkungan.
                </h2>
                <p className="max-w-2xl text-white/80">
                  Mewujudkan Masa Depan Kendaraan Listrik bersama ECS. Solusi
                  Home Charging Terpercaya untuk Pengisian Kendaraan Listrik.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Target anchor tombol HUBUNGI ECS */}
      <div id="hubungi-ecs" className="h-1 scroll-mt-24" />
    </main>
  );
}
