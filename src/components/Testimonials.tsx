import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Amira B.",
    role: "Sousse",
    quote:
      "Le rendu est encore plus beau en vrai. Les couleurs sont douces et le tableau a completement change mon salon.",
  },
  {
    name: "Yassine K.",
    role: "Tunis",
    quote:
      "Tres bon accompagnement pour choisir le format. La composition est elegante et la finition est propre.",
  },
  {
    name: "Sarra M.",
    role: "Nabeul",
    quote:
      "J'ai pris deux pieces pour ma cuisine et l'ambiance est devenue beaucoup plus chaleureuse. Tres satisfaite.",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-6 py-24 md:py-30">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-display text-sm uppercase tracking-[0.24em] text-brand-red">
            Avis Clients
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Des retours qui confirment
            <span className="block text-accent-green">le style et la qualite</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Des clients qui cherchaient une ambiance plus douce, plus lumineuse et mieux pensee pour leurs espaces.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <article className="surface-card rounded-[1.8rem] p-6 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_-34px_rgba(84,76,38,0.34)]">
                <div className="flex items-center gap-1 text-accent-orange">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg key={starIndex} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="m12 2.5 2.93 5.94 6.56.95-4.75 4.63 1.12 6.54L12 17.47 6.14 20.56l1.12-6.54L2.5 9.39l6.56-.95L12 2.5Z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-5 text-base leading-7 text-foreground/82">
                  “{item.quote}”
                </p>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <p className="font-display text-xl text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
