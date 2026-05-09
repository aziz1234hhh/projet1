import { useEffect, useRef, useState } from "react";
import { heroCategories as categories } from "@/data/heroCategories";
import { Reveal } from "@/components/Reveal";

// Per-column layout + parallax speed (px translation per scroll px)
const columns = [
  { baseY: -24, height: "h-72 md:h-80", speed: 0.18 },
  { baseY: 16, height: "h-80 md:h-96", speed: -0.12 },
  { baseY: -40, height: "h-72 md:h-80", speed: 0.22 },
  { baseY: 24, height: "h-80 md:h-96", speed: -0.16 },
  { baseY: -16, height: "h-72 md:h-80", speed: 0.14 },
];

const CYCLE_MS = 4200;
const STAGGER_MS = 110;
const OUT_DURATION = 500;
const heroHighlights = [
  "Palette douce et lumineuse",
  "Formats sur demande",
  "Livraison rapide en Tunisie",
];

export function AnimatedHero() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const switchTimeoutRef = useRef<number | null>(null);

  const queueCategorySwitch = (nextIndex?: number) => {
    setPhase("out");
    const totalOut = OUT_DURATION + STAGGER_MS * (columns.length - 1);

    if (switchTimeoutRef.current !== null) {
      window.clearTimeout(switchTimeoutRef.current);
    }

    switchTimeoutRef.current = window.setTimeout(() => {
      setIndex((i) => (typeof nextIndex === "number" ? nextIndex : (i + 1) % categories.length));
      setPhase("in");
      switchTimeoutRef.current = null;
    }, totalOut);
  };

  // Cycle: animate out (staggered), swap, animate in (staggered)
  useEffect(() => {
    const id = setInterval(() => {
      queueCategorySwitch();
    }, CYCLE_MS);

    return () => {
      clearInterval(id);
      if (switchTimeoutRef.current !== null) {
        window.clearTimeout(switchTimeoutRef.current);
      }
    };
  }, []);

  // Scroll parallax — spring-smoothed via a continuous rAF lerp loop.
  // Target is updated on scroll; rendered value eases toward it each frame
  // using a critically-damped-feeling stiffness/damping pair.
  useEffect(() => {
    const target = { y: 0 };
    let current = 0;
    let velocity = 0;
    let raf = 0;
    let lastTime = performance.now();
    let running = true;

    // Spring constants — tuned for "fluid, slightly heavy" feel.
    const STIFFNESS = 120; // higher = snappier
    const DAMPING = 22; // higher = less oscillation
    const PRECISION = 0.05;

    const readTarget = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      target.y = -rect.top;
    };

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 1 / 30); // clamp dt
      lastTime = now;

      const displacement = current - target.y;
      const springForce = -STIFFNESS * displacement;
      const dampingForce = -DAMPING * velocity;
      const acceleration = springForce + dampingForce;

      velocity += acceleration * dt;
      current += velocity * dt;

      // Snap & idle when we've effectively settled.
      if (
        Math.abs(displacement) < PRECISION &&
        Math.abs(velocity) < PRECISION
      ) {
        current = target.y;
        velocity = 0;
        setScrollY(current);
        running = false;
        return;
      }

      setScrollY(current);
      raf = requestAnimationFrame(tick);
    };

    const ensureRunning = () => {
      if (running) return;
      running = true;
      lastTime = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      ensureRunning();
    };

    readTarget();
    current = target.y;
    setScrollY(current);
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      running = false;
    };
  }, []);


  const current = categories[index];

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-background pb-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--accent-yellow) 70%, transparent), transparent 72%), radial-gradient(45% 38% at 88% 22%, color-mix(in oklab, var(--accent-orange) 26%, transparent), transparent 72%), radial-gradient(38% 32% at 12% 58%, color-mix(in oklab, var(--accent-green) 20%, transparent), transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] mix-blend-multiply"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--background) 100%, transparent) 100%)",
        }}
      />
      <div
        aria-hidden
        className="animate-glow-shift pointer-events-none absolute left-[8%] top-28 -z-10 h-40 w-40 rounded-full bg-accent-green/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-glow-shift pointer-events-none absolute bottom-12 right-[10%] -z-10 h-48 w-48 rounded-full bg-accent-orange/18 blur-3xl"
      />

      <Reveal className="relative z-20 mx-auto max-w-5xl px-6 pt-16 text-center md:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-card/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red shadow-sm">
          <span className="h-2 w-2 rounded-full bg-brand-red" />
          Art mural et decoration
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          L'art qui transforme
          <br />
          <span className="inline-block min-h-[1.2em]">
            <span
              key={current.word}
              className={`animate-word-in inline-block italic ${current.color}`}
            >
              {current.word}
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
          Des tableaux decoratifs aux tons mediterraneens et aux details soignes,
          pour donner une presence plus douce, plus elegante et plus vivante a vos espaces.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#galerie"
            className="interactive-sheen inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Decouvrir la galerie
          </a>
          <a
            href="#nouveautes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-brand-red/35 hover:bg-card"
          >
            Voir les collections
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {heroHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/90 bg-background/70 px-4 py-2 text-xs font-medium text-foreground/80 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => queueCategorySwitch(i)}
              aria-label={`Show category ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-foreground" : "w-2 bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </Reveal>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl px-3 pb-24 md:px-6 md:pb-32">
        <div className="pointer-events-none absolute left-2 top-8 hidden md:block">
          <div className="surface-panel animate-float-gentle rounded-[1.5rem] px-5 py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-red">
              Collection signature
            </p>
            <p className="mt-2 max-w-[12rem] font-display text-xl leading-tight text-foreground">
              Pieces encadrees pensees pour le salon et la cuisine.
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-28 right-2 hidden md:block">
          <div className="surface-panel animate-float-gentle-delayed rounded-[1.5rem] px-5 py-4">
            <p className="text-sm font-semibold text-foreground">Apercu AR disponible</p>
            <p className="mt-1 max-w-[11rem] text-sm leading-6 text-muted-foreground">
              Visualisez chaque toile chez vous avant de commander.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-5">
          {columns.map((col, i) => {
            const src = current.images[i];
            const hideOnMobile = i > 1 ? "hidden md:block" : "";
            // parallax offset combined with base column offset
            const parallax = scrollY * col.speed;
            const translateY = col.baseY + parallax;
            // staggered delay — outgoing reverses so motion feels like a wave
            const delay =
              phase === "in"
                ? i * STAGGER_MS
                : (columns.length - 1 - i) * STAGGER_MS;

            return (
              <div
                key={i}
                className={hideOnMobile}
                style={{
                  transform: `translate3d(0, ${translateY}px, 0)`,
                  willChange: "transform",
                }}
              >
                <div
                  className={`surface-card interactive-sheen overflow-hidden rounded-3xl ${col.height}`}
                >
                  <img
                    key={`${index}-${i}-${phase}`}
                    src={src}
                    alt=""
                    width={512}
                    height={704}
                    loading={i < 2 ? "eager" : "lazy"}
                    className={
                      phase === "in" ? "animate-tile-in h-full w-full object-cover" : "animate-tile-out h-full w-full object-cover"
                    }
                    style={{ animationDelay: `${delay}ms` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Category CTA */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 md:bottom-10 flex justify-center">
          <a
            href={`/category/${current.slug}`}
            className="interactive-sheen pointer-events-auto inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition-transform hover:-translate-y-0.5"
            aria-label={`Explorer la categorie ${current.word}`}
          >
            Explorer la categorie
          </a>
        </div>
      </div>
    </section>
  );
}
