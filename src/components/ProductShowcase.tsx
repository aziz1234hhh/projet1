import { useEffect, useMemo, useState } from "react";
import { ArViewer } from "@/components/ArViewer";
import { Reveal } from "@/components/Reveal";
import {
  boutiqueFilters,
  catalogProducts,
  defaultFrameOptions,
  defaultSizeOptions,
  priceBySize,
  type BoutiqueFilter,
  type CatalogProduct,
} from "@/data/catalog";

import collection1 from "@/assets/collections/81887183-9b18-4264-a5ba-4b9a8f37c27b.jpg";
import collection2 from "@/assets/collections/be538121-a7e5-44ab-8c1e-0ff8efdc9151.jpg";
import collection3 from "@/assets/collections/c2251ece-b473-4122-9dae-8c610588eb63.jpg";

const collections = [collection1, collection2, collection3];

const collectionStories = [
  {
    title: "Salon lumineux",
    description:
      "Des tableaux amples et apaises pour structurer le mur principal sans alourdir l'espace.",
  },
  {
    title: "Accents mediterraneens",
    description:
      "Des details sable, olive et botanique pour une ambiance plus douce et plus naturelle.",
  },
  {
    title: "Mur galerie elegant",
    description:
      "Un mix de cadres et de formats pour creer une composition premium et chaleureuse.",
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState<BoutiqueFilter>("Tout");
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
  const [selectedFrame, setSelectedFrame] = useState<Record<string, string>>({});
  const [qtyByProduct, setQtyByProduct] = useState<Record<string, number>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [arImage, setArImage] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<CatalogProduct | null>(null);
  const [collectionIndex, setCollectionIndex] = useState(0);

  const filtered = useMemo(
    () =>
      active === "Tout"
        ? catalogProducts
        : catalogProducts.filter((product) => product.category === active),
    [active],
  );

  const getPrice = (basePrice: number, size: string) => {
    const multiplier = priceBySize[size] ?? 1;
    return Math.round(basePrice * multiplier);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCollectionIndex((i) => (i + 1) % collections.length);
    }, 3200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="galerie" className="relative bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-brand-red">
              La Galerie
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Tableaux <em className="text-accent-green">muraux</em>
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Une selection d'oeuvres encadrees pour habiller vos murs avec des
              tons doux, des impressions soignees et des finitions durables.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-card/85 px-3 py-1 text-xs font-medium text-foreground/75">
                Cadres soignes
              </span>
              <span className="rounded-full border border-border bg-card/85 px-3 py-1 text-xs font-medium text-foreground/75">
                Apercu AR
              </span>
              <span className="rounded-full border border-border bg-card/85 px-3 py-1 text-xs font-medium text-foreground/75">
                Livraison rapide
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {boutiqueFilters.map((cat) => {
              const isActive = active === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-brand-red bg-brand-red text-primary-foreground shadow-md"
                      : "border-border bg-card/85 text-foreground hover:-translate-y-0.5 hover:border-brand-red/35 hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const isLiked = !!liked[p.id];
            const defaultSize = p.sizes[2]?.value ?? defaultSizeOptions[0].value;
            const size = selectedSize[p.id] ?? defaultSize;

            return (
              <Reveal key={p.id} delay={i * 70} className="group">
                <article className="surface-card interactive-sheen overflow-hidden rounded-[1.9rem] transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_-34px_rgba(84,76,38,0.36)]">
                  <div className="relative overflow-hidden rounded-[1.65rem] bg-muted">
                    <div className="aspect-[4/5] w-full">
                      <img
                        src={p.image}
                        alt={p.name}
                        width={768}
                        height={960}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/5 opacity-80" />

                    <span className="absolute bottom-4 right-4 rounded-full bg-foreground/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background backdrop-blur-sm">
                      Ref: {p.ref}
                    </span>

                    {p.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                        {p.badge}
                      </span>
                    )}

                    <button
                      onClick={() =>
                        setLiked((prev) => ({ ...prev, [p.id]: !prev[p.id] }))
                      }
                      aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
                      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition-all duration-300 ${
                        isLiked
                          ? "scale-110 bg-brand-red text-primary-foreground"
                          : "bg-card/88 text-foreground hover:bg-card"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill={isLiked ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>

                    <div className="absolute bottom-4 left-4 flex gap-2">
                      <button
                        onClick={() => setDetailProduct(p)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-card/88 text-foreground backdrop-blur transition hover:bg-card"
                        aria-label="Ouvrir les details du produit"
                        title="Voir details"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="8" cy="21" r="1" />
                          <circle cx="19" cy="21" r="1" />
                          <path d="M2.05 2h2l2.6 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 6H6" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setArImage(p.image);
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-90"
                        aria-label="Tester en AR"
                        title="Tester dans votre piece"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3 px-5 pb-5 pt-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                        {p.category} · Ref: {p.ref}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg font-semibold text-foreground">
                        a partir de {p.basePrice} DH
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                        {size.replace("x", " x ")}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-24" delay={120}>
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-red/10 bg-gradient-to-br from-[color:var(--accent-yellow)] via-[color:var(--background)] to-[color:var(--accent)] p-3 shadow-[0_30px_80px_-35px_rgba(96,86,46,0.34)] md:p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--accent-orange) 26%, transparent), transparent 24%), radial-gradient(circle at 80% 30%, color-mix(in oklab, var(--accent-yellow) 55%, transparent), transparent 28%), radial-gradient(circle at 50% 80%, color-mix(in oklab, var(--accent-green) 22%, transparent), transparent 30%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-card/72 backdrop-blur-sm">
                {collections.map((item, i) => {
                  const isActive = i === collectionIndex;

                  return (
                    <div
                      key={item}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive
                          ? "translate-x-0 scale-100 opacity-100"
                          : i < collectionIndex
                            ? "-translate-x-8 scale-[0.985] opacity-0"
                            : "translate-x-8 scale-[0.985] opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="relative min-h-[520px] md:min-h-[720px]">
                        <img
                          src={item}
                          alt={`Collection ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        <div className="absolute left-6 top-6 h-20 w-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm" />
                        <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>
                  );
                })}

                <div className="absolute left-5 top-5 z-20 max-w-sm rounded-[1.5rem] border border-white/40 bg-white/16 p-5 text-white backdrop-blur-md md:left-8 md:top-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                    Ambiance choisie
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">
                    {collectionStories[collectionIndex]?.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    {collectionStories[collectionIndex]?.description}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center">
                  <div className="rounded-full border border-white/50 bg-black/20 px-4 py-2 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      {collections.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          type="button"
                          onClick={() => setCollectionIndex(dotIndex)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            dotIndex === collectionIndex
                              ? "w-10 bg-white"
                              : "w-2 bg-white/45"
                          }`}
                          aria-label={`Afficher la collection ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="invisible">
                  <div className="min-h-[520px] md:min-h-[720px]" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {detailProduct && (
        <div
          className="fixed inset-0 z-[80] bg-black/45 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setDetailProduct(null)}
        >
          <div
            className="surface-panel mx-auto grid h-full max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl md:grid-cols-[1fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-muted">
              <img
                src={detailProduct.image}
                alt={detailProduct.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative overflow-y-auto p-5 md:p-8">
              <button
                onClick={() => setDetailProduct(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-foreground/70 transition hover:bg-black/5 hover:text-foreground"
                aria-label="Fermer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <h3 className="pr-10 font-display text-3xl font-bold leading-tight text-foreground">
                {detailProduct.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">(4.9)</p>

              <p className="mt-2 font-display text-3xl font-semibold text-foreground">
                {getPrice(
                  detailProduct.basePrice,
                  selectedSize[detailProduct.id] ?? detailProduct.sizes[2]?.value ?? defaultSizeOptions[0].value,
                )} DH
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">Taille du tableau</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {detailProduct.sizes.map((dim) => {
                    const isSel =
                      (selectedSize[detailProduct.id] ?? detailProduct.sizes[2]?.value ?? defaultSizeOptions[0].value) === dim.value;

                    return (
                      <button
                        key={dim.value}
                        onClick={() =>
                          setSelectedSize((prev) => ({ ...prev, [detailProduct.id]: dim.value }))
                        }
                        className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                          isSel
                            ? "border-brand-red bg-brand-red text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-brand-red/35"
                        }`}
                      >
                        {dim.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">Type d'encadrement</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {detailProduct.frames.map((frame) => {
                    const isSel =
                      (selectedFrame[detailProduct.id] ?? detailProduct.frames[0] ?? defaultFrameOptions[0]) === frame;

                    return (
                      <button
                        key={frame}
                        onClick={() =>
                          setSelectedFrame((prev) => ({ ...prev, [detailProduct.id]: frame }))
                        }
                        className={`rounded-md border px-4 py-2 text-sm font-semibold uppercase transition ${
                          isSel
                            ? "border-brand-red bg-brand-red text-primary-foreground"
                            : "border-border bg-card text-foreground hover:border-brand-red/35"
                        }`}
                      >
                        {frame}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {detailProduct.description}
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                Categorie : <span className="font-semibold text-foreground">{detailProduct.category}</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="inline-flex h-11 items-center rounded-md border border-border bg-card">
                  <button
                    onClick={() =>
                      setQtyByProduct((prev) => ({
                        ...prev,
                        [detailProduct.id]: Math.max(1, (prev[detailProduct.id] ?? 1) - 1),
                      }))
                    }
                    className="h-11 w-10 text-lg text-foreground/80 hover:bg-black/5"
                    aria-label="Diminuer quantite"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-semibold">
                    {qtyByProduct[detailProduct.id] ?? 1}
                  </span>
                  <button
                    onClick={() =>
                      setQtyByProduct((prev) => ({
                        ...prev,
                        [detailProduct.id]: (prev[detailProduct.id] ?? 1) + 1,
                      }))
                    }
                    className="h-11 w-10 text-lg text-foreground/80 hover:bg-black/5"
                    aria-label="Augmenter quantite"
                  >
                    +
                  </button>
                </div>

                <button className="interactive-sheen inline-flex h-11 flex-1 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ArViewer
        isOpen={!!arImage}
        onClose={() => setArImage(null)}
        imageSrc={arImage}
      />
    </section>
  );
}
