export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#2f1b12] px-6 py-12 text-[#f7efe2] md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <a href="/" className="font-display text-2xl font-bold tracking-tight text-[#f4a15d]">
            Luxury Art Tab
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#eadcc9]">
            Tableaux decoratifs pour salon et cuisine, imprimes avec soin pour un rendu elegant et durable.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#f7efe2]">Navigation</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href="#galerie" className="text-[#eadcc9] transition hover:text-[#f4a15d]">Galerie</a>
            <a href="#nouveautes" className="text-[#eadcc9] transition hover:text-[#f4a15d]">About Me</a>
            <a href="#" className="text-[#eadcc9] transition hover:text-[#f4a15d]">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#f7efe2]">Services</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[#eadcc9]">
            <span>Livraison rapide</span>
            <span>Formats personnalises</span>
            <span>Support WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-[#d9c8b3] md:flex-row md:items-center">
        <p>© 2026 Luxury Art Tab. Tous droits reserves.</p>
        <p>Fait avec passion pour votre decoration murale.</p>
      </div>
    </footer>
  );
}
