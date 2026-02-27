import { footerData, WHATSAPP_URL } from "../assets/data";

function FooterSection() {
  return (
    <footer className="bg-coolkies-dark py-12">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="inline-flex rounded-lg bg-coolkies-yellow px-3 py-2 font-display text-2xl text-coolkies-dark">
              {footerData.brand.name}
            </div>
            <p className="mt-4 max-w-xs text-gray-400">
              {footerData.brand.description}
            </p>

            <div className="mt-4 flex gap-3">
              {[
                ["IG", "https://www.instagram.com/coolkies.mdz/"],
                ["WP", WHATSAPP_URL],
                ["TT", "https://www.tiktok.com/@coolkies__"],
              ].map(([network, link]) => (
                <a
                  key={network}
                  href={link}
                  aria-label={network}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-500 text-xs font-semibold text-gray-300 transition-colors hover:border-coolkies-yellow hover:text-coolkies-yellow"
                >
                  {network}
                </a>
              ))}
            </div>
          </div>

          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li
                    key={typeof link === "string" ? link : link.label}
                    className="text-gray-400"
                  >
                    {typeof link === "object" && link.href ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-coolkies-yellow"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span>
                        {typeof link === "string" ? link : link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <span>Hecho con</span>
          <svg
            className="h-4 w-4 text-coolkies-yellow"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="corazon"
          >
            <path d="M12 21s-7.35-4.67-9.77-8.1C.5 10.47 1.1 6.9 3.9 5.13c2.02-1.28 4.84-.96 6.6.85L12 7.53l1.5-1.55c1.76-1.81 4.58-2.13 6.6-.85 2.8 1.77 3.4 5.34 1.67 7.77C19.35 16.33 12 21 12 21z" />
          </svg>
          <span>y muchas ganas de endulzar tu dia.</span>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
