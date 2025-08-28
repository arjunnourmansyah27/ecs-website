import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#078781] to-[#03524E] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <img src="img/header/ECS-white.svg" alt="ECS Logo" className="h-32 w-auto" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-[16px] mb-3">Kantor</h3>
            <p>Rukan Taman Meruya Plaza 2 Blok A2</p>
            <p>Jl. Permata Meruya 2, Meruya Utara</p>
            <p>Kembangan — Jakarta Barat 11620</p>
            <p>Email: <a href="mailto:sales@titisgroup.com" className="text-[#A8DADC]">sales@titisgroup.com</a></p>
            <p>Phone: <a href="tel:+628111460707" className="text-[#A8DADC]">+62 811-460-707</a></p>
          </div>

          {/* ECS Section */}
          <div>
            <h3 className="font-semibold text-[16px] mb-3">ECS</h3>
            <ul>
              <li><a href="#tentang" className="hover:text-[#A8DADC] transition">Tentang ECS</a></li>
              <li><a href="#artikel" className="hover:text-[#A8DADC] transition">Artikel Kami</a></li>
              <li><a href="#faq" className="hover:text-[#A8DADC] transition">FAQ</a></li>
            </ul>
          </div>

          {/* Contact & Social Media Section */}
          <div>
            <h3 className="font-semibold text-[16px] mb-3">Kontak</h3>
            <ul>
              <li><a href="#pustakbantuan" className="hover:text-[#A8DADC] transition">Pusat Bantuan</a></li>
              <li><a href="#hubungikami" className="hover:text-[#A8DADC] transition">Hubungi Kami</a></li>
              <li><a href="#privacy" className="hover:text-[#A8DADC] transition">Kebijakan Privasi</a></li>
              <li><a href="#usage" className="hover:text-[#A8DADC] transition">Kebijakan Penggunaan</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="flex justify-between items-center border-t border-white pt-6 mt-6">
          <div className="flex space-x-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.svg" alt="Instagram" className="h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.svg" alt="Facebook" className="h-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.svg" alt="Twitter" className="h-6" />
            </a>
          </div>
          <span className="text-sm">© 2025 Exelly Cahaya Servisindo. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}