import { Reveal } from "@/components/Reveal";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative mt-20 overflow-hidden border-t border-border/60 bg-primary px-6 py-12 text-primary-foreground md:px-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"
      />

      <Reveal className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <a href="/" className="font-display text-2xl font-bold tracking-tight text-primary-foreground">
            Luxury Art Tab
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            Tableaux decoratifs pour salon et cuisine, imprimes avec soin pour
            un rendu elegant, chaleureux et durable.
          </p>
          <div className="mt-6 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary-foreground/78">
            Art mural premium
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground">
            Navigation
          </h4>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a href="#galerie" className="text-primary-foreground/80 transition hover:text-white">Galerie</a>
            <a href="#nouveautes" className="text-primary-foreground/80 transition hover:text-white">About Me</a>
            <a href="#" className="text-primary-foreground/80 transition hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground">
            Services
          </h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/80">
            <span>Livraison rapide</span>
            <span>Formats personnalises</span>
            <span>Support WhatsApp</span>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-primary-foreground/70 md:flex-row md:items-center">
        <p>© 2026 Luxury Art Tab. Tous droits reserves.</p>
        <p>Fait avec passion pour votre decoration murale.</p>
      </div>
    </footer>
  );
}
