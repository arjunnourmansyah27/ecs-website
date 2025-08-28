import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Selalu gradient, tapi saat scroll tambah shadow
  const headerTone = isScrolled
    ? "bg-gradient-to-r from-[#078781] to-[#03524E] text-white shadow-md"
    : "bg-gradient-to-r from-[#078781] to-[#03524E] text-white";

  const iconTone = "text-white";

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300 ${headerTone}`}>
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Beranda">
            <img
              src="img/header/ECS-white.svg"
              alt="ECS Logo"
              width="240"
              height="120"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-16 w-auto md:h-16 md:w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link className="transition hover:opacity-80" to="/tentang">
              Tentang Kami
            </Link>
            <Link className="transition hover:opacity-80" to="/produk">
              Produk
            </Link>
            <Link className="transition hover:opacity-80" to="/event">
              Event &amp; Blog
            </Link>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 transition hover:opacity-80"
                aria-haspopup="menu"
                aria-expanded={isHelpOpen}
                aria-controls="help-menu"
                onClick={() => setIsHelpOpen((v) => !v)}
                onBlur={() => setIsHelpOpen(false)}
              >
                Bantuan <span aria-hidden>▾</span>
              </button>

              <div
                id="help-menu"
                role="menu"
                className={`absolute right-0 mt-2 w-52 rounded-md border bg-white text-gray-900 shadow-lg p-2 transition
                  ${
                    isHelpOpen
                      ? "opacity-100 scale-100"
                      : "pointer-events-none opacity-0 scale-95"
                  }`}
              >
                <Link
                  role="menuitem"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                  to="/pusat"
                >
                  Pusat Bantuan
                </Link>
                <Link
                  role="menuitem"
                  className="block rounded px-3 py-2 hover:bg-gray-100"
                  to="/hubungi"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA (desktop) */}
          <Link
            to="/coba"
            className="hidden md:inline-block rounded-lg bg-yellow-400 px-4 py-2 text-gray-900 shadow transition hover:bg-yellow-500"
          >
            Coba ECS
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden transition ${iconTone}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden px-6 py-4 space-y-3 transition-[max-height,opacity]
            ${
              isOpen
                ? "max-h-[480px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0 overflow-hidden"
            }
            bg-gradient-to-r from-[#078781] to-[#03524E] text-white shadow
            `}
          aria-hidden={!isOpen}
        >
          <Link to="/produk" className="block hover:opacity-50">
            Produk
          </Link>
          <Link to="/tentang" className="block hover:opacity-50">
            Tentang Kami
          </Link>
          <Link to="/event" className="block hover:opacity-50">
            Event &amp; Blog
          </Link>

          <details className="group">
            <summary className="list-none flex cursor-pointer items-center justify-between hover:opacity-80">
              <span>Bantuan</span>
              <span className="transition group-open:rotate-180">▾</span>
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <Link to="/pusat" className="block hover:opacity-80">
                Pusat Bantuan
              </Link>
              <Link to="/hubungi" className="block hover:opacity-80">
                Hubungi Kami
              </Link>
            </div>
          </details>

          <Link
            to="/coba"
            className="block rounded-lg bg-yellow-400 px-4 py-2 text-center text-gray-900 shadow transition hover:bg-yellow-500"
          >
            Coba ECS
          </Link>
        </div>
      </header>

      {/* Spacer biar konten tidak ketimpa header */}
      <div className="h-16 md:h-20" aria-hidden />
    </>
  );
}