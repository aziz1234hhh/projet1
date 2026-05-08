import { useState } from "react";

export function SiteNav() {
  const [openPanel, setOpenPanel] = useState<"panier" | "favoris" | null>(null);

  return (
    <>
      <header className="relative z-30 flex items-center justify-between border-b border-white/10 bg-[#3b2418] px-6 py-5 text-[#f7efe2] md:px-10">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 text-[#f4a15d]">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <span className="text-xl font-bold tracking-tight font-display">Luxury Art Tab</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#galerie" className="text-sm font-semibold text-[#f7efe2] transition-colors hover:text-[#f4a15d]">
              Galerie
            </a>
            <a href="#nouveautes" className="text-sm font-semibold text-[#f7efe2] transition-colors hover:text-[#f4a15d]">
              About Me
            </a>
          </nav>
        </div>

        <nav className="flex items-center gap-2 md:gap-4">
          <a href="#" className="hidden text-sm font-semibold text-[#f7efe2] transition-colors hover:text-[#f4a15d] md:inline">Cuisine</a>
          <a href="#" className="hidden text-sm font-semibold text-[#f7efe2] transition-colors hover:text-[#f4a15d] md:inline">Salon</a>
          <a href="#" className="hidden text-sm font-semibold text-[#f7efe2] transition-colors hover:text-[#f4a15d] md:inline">Contact</a>

          <button
            onClick={() => setOpenPanel("favoris")}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#f7efe2] transition hover:border-[#f4a15d]/80 hover:bg-white/20"
            aria-label="Favoris"
            title="Liste de favoris"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          <button
            onClick={() => setOpenPanel("panier")}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#f7efe2] transition hover:border-[#f4a15d]/80 hover:bg-white/20"
            aria-label="Panier"
            title="Panier"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2h2l2.6 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 6H6" />
            </svg>
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-red px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

        </nav>
      </header>

      {openPanel && (
        <div
          className="fixed inset-0 z-[90] bg-black/40 p-4 backdrop-blur-sm"
          onClick={() => setOpenPanel(null)}
        >
          <div
            className="mx-auto mt-16 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
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
                className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:opacity-90"
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
