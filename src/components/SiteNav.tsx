import { useState } from "react";

const navLinks = [
  { href: "#galerie", label: "Galerie" },
  { href: "#nouveautes", label: "About Me" },
  { href: "#galerie", label: "Cuisine" },
  { href: "#galerie", label: "Salon" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [openPanel, setOpenPanel] = useState<"panier" | "favoris" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setOpenPanel(null);
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/70 bg-background/84 px-6 py-4 text-foreground shadow-[0_18px_40px_-30px_rgba(90,80,40,0.25)] backdrop-blur-xl md:px-10">
        <div className="flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground transition hover:border-brand-red/50 hover:bg-secondary md:hidden"
            aria-label="Ouvrir le menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <a href="/" className="flex items-center gap-3 text-brand-red">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <div>
              <span className="text-xl font-bold tracking-tight text-foreground font-display">Luxury Art Tab</span>
              <p className="hidden text-[11px] uppercase tracking-[0.24em] text-foreground/45 md:block">
                Atelier mediterraneen
              </p>
            </div>
          </a>

          <nav className="hidden gap-6 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-red"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <span className="hidden rounded-full border border-brand-red/20 bg-brand-red/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-red xl:inline-flex">
            Edition 2026
          </span>

          {navLinks.slice(2).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-red md:inline"
            >
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setOpenPanel("favoris")}
            className="interactive-sheen relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-secondary"
            aria-label="Favoris"
            title="Liste de favoris"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>

          <button
            onClick={() => setOpenPanel("panier")}
            className="interactive-sheen relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground transition hover:-translate-y-0.5 hover:border-brand-red/50 hover:bg-secondary"
            aria-label="Panier"
            title="Panier"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2h2l2.6 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 6H6" />
            </svg>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[95] bg-black/35 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <aside
            className="surface-panel absolute left-4 right-4 top-4 rounded-[1.8rem] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
                  Navigation
                </p>
                <h3 className="mt-2 font-display text-2xl text-foreground">Luxury Art Tab</h3>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/90 text-foreground"
                aria-label="Fermer le menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="surface-card rounded-[1.2rem] px-4 py-4 text-sm font-semibold text-foreground transition hover:border-brand-red/35"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-brand-red/14 bg-brand-red/6 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                Besoin d'aide
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/78">
                Contact rapide, choix des formats et aide pour trouver la bonne composition murale.
              </p>
            </div>
          </aside>
        </div>
      )}

      {openPanel && (
        <div
          className="fixed inset-0 z-[90] bg-black/40 p-4 backdrop-blur-sm"
          onClick={closeAll}
        >
          <div
            className="surface-panel mx-auto mt-16 w-full max-w-lg rounded-[1.75rem] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-foreground">
                {openPanel === "panier" ? "Votre panier" : "Votre liste de favoris"}
              </h3>
              <button
                onClick={() => setOpenPanel(null)}
                className="rounded-full p-2 text-foreground/70 hover:bg-black/5 hover:text-foreground"
                aria-label="Fermer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-8 text-center">
              <p className="text-sm font-semibold text-foreground">
                {openPanel === "panier" ? "Votre panier est vide." : "Votre liste de favoris est vide."}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ajoutez des produits depuis la galerie pour les retrouver ici.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setOpenPanel(null)}
                className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
