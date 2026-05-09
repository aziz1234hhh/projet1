import authorArt from "@/assets/salon/art-botanical.jpg";
import { Reveal } from "@/components/Reveal";

const values = [
  "Inspiration marocaine et mediterraneenne",
  "Pieces pensees pour salon et cuisine",
  "Style simple, premium et intemporel",
];

export function LatestDecor() {
  return (
    <section
      id="nouveautes"
      className="relative overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--accent-green) 8%, var(--background)) 62%, var(--background) 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.08fr_1fr] md:gap-16">
        <Reveal>
          <div className="mb-5 inline-flex items-center rounded-full border border-brand-red/20 bg-brand-red/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-red">
            About Me
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Artiste derriere <em className="text-accent-green">chaque toile</em>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Je cree des tableaux decoratifs inspires du quotidien marocain :
            des tons chauds, des formes organiques et des details qui apportent
            une vraie presence a votre salon ou votre cuisine.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Chaque piece est pensee pour raconter une histoire simple,
            elegante et facile a integrer dans des interieurs modernes comme traditionnels.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="surface-card rounded-[1.4rem] px-4 py-4 text-sm leading-6 text-foreground/78"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#galerie"
              className="interactive-sheen rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              Voir la galerie
            </a>
            <a
              href="#"
              className="rounded-full border border-border bg-card/90 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-red/40"
            >
              Me contacter
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent-green/18 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent-orange/24 blur-2xl" />
          <div className="animate-float-gentle absolute -right-3 top-10 hidden h-28 w-28 rounded-[2rem] border border-border/60 bg-card/50 md:block" />
          <div className="surface-panel relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={authorArt}
              alt="Portrait artistique"
              className="h-[360px] w-full rounded-[1.45rem] object-cover md:h-[460px]"
              loading="lazy"
            />
            <div className="absolute bottom-7 left-7 rounded-[1.25rem] border border-white/40 bg-white/16 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                Signature atelier
              </p>
              <p className="mt-2 max-w-[12rem] font-display text-xl leading-tight">
                Une presence douce, naturelle et elegante.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
