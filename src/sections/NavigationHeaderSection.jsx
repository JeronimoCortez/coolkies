import { useState } from "react";
import { navigationLinks } from "../assets/data";
import useAnchorOffset from "../hooks/useAnchorOffset";

function NavigationHeaderSection() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useAnchorOffset(92);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 shadow-card backdrop-blur">
      <nav
        className="section-shell flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="/"
          className="h-full flex items-center"
          aria-label="Coolkies home"
        >
          <img
            src="/coolkies-logo.webp"
            alt="Coolkies"
            className="
              h-full w-auto object-contain
            "
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-medium text-coolkies-dark transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.pedidosya.com"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-coolkies-yellow px-6 py-2.5 font-semibold text-coolkies-dark transition-all duration-200 hover:scale-[1.02] hover:opacity-90 lg:inline-flex"
        >
          PedidosYa
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 transition-transform duration-200 hover:scale-105 lg:hidden"
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-label="Abrir menu"
          aria-expanded={isMobileOpen}
        >
          <span className="text-2xl leading-none">
            {isMobileOpen ? "\u00D7" : "\u2261"}
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden ${
          isMobileOpen ? "max-h-80 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <ul className="section-shell space-y-4 py-4">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="block font-medium text-coolkies-dark transition-opacity duration-200 hover:opacity-70"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.pedidosya.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-coolkies-yellow px-6 py-2.5 font-semibold text-coolkies-dark transition-transform duration-200 hover:scale-[1.02]"
              onClick={() => setIsMobileOpen(false)}
            >
              PedidosYa
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavigationHeaderSection;
