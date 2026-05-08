import { useEffect, useMemo, useState } from "react";
import { ArViewer } from "@/components/ArViewer";

// Salon images for product showcase
import salonB1096 from "@/assets/salon/art-abstract-warm.jpg";
import salonB1099 from "@/assets/salon/art-botanical.jpg";
import salonB1126 from "@/assets/salon/art-desert.jpg";
import salonB1292 from "@/assets/salon/art-figure.jpg";
import salonB1300 from "@/assets/salon/art-geometric.jpg";
import salonB275 from "@/assets/salon/art-vintage.jpg";

// Cuisine images for product showcase
import cuisineCoffee from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.14 (1).jpeg";
import cuisineLemon from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.15.jpeg";
import cuisineOlive from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.18.jpeg";
import cuisineSpices from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.19.jpeg";
import cuisinePottery from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.20.jpeg";
import cuisineHerbs from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.21.jpeg";
import collection1 from "@/assets/collections/81887183-9b18-4264-a5ba-4b9a8f37c27b.jpg";
import collection2 from "@/assets/collections/be538121-a7e5-44ab-8c1e-0ff8efdc9151.jpg";
import collection3 from "@/assets/collections/c2251ece-b473-4122-9dae-8c610588eb63.jpg";

const collections = [
  collection1,
  collection2,
  collection3,
];

type Category = "Tout" | "Salon" | "Cuisine";

// Available dimension options for tableaux
const dimensionOptions = [
  { label: "20×30 cm", value: "20×30" },
  { label: "30×40 cm", value: "30×40" },
  { label: "40×60 cm", value: "40×60" },
  { label: "50×70 cm", value: "50×70" },
  { label: "60×90 cm", value: "60×90" },
  { label: "80×120 cm", value: "80×120" },
  { label: "100×150 cm", value: "100×150" },
];

const frameOptions = [
  "Toile sans cadre exterieur",
  "Toile avec cadre exterieur dore",
  "Toile avec cadre exterieur argente",
  "Toile avec cadre exterieur noir",
  "Toile avec cadre exterieur blanc",
];

type Product = {
  id: string;
  name: string;
  ref: string;
  basePrice: number;
  category: Exclude<Category, "Tout">;
  image: string;
  badge?: string;
};

// Price multiplier by dimension
const priceBySize: Record<string, number> = {
  "20×30": 1,
  "30×40": 1.3,
  "40×60": 1.6,
  "50×70": 2,
  "60×90": 2.5,
  "80×120": 3.2,
  "100×150": 4,
};

const products: Product[] = [
  // Salon products
  { id: "s1", name: "Fleurs Blanches & Or", ref: "B1096", basePrice: 150, category: "Salon", image: salonB1096, badge: "Nouveau" },
  { id: "s2", name: "Roses Dorées", ref: "B1099", basePrice: 150, category: "Salon", image: salonB1099 },
  { id: "s3", name: "Cerisier en Fleurs", ref: "B1126", basePrice: 150, category: "Salon", image: salonB1126, badge: "Best-seller" },
  { id: "s4", name: "Fleurs Blanches Élégantes", ref: "B1292", basePrice: 150, category: "Salon", image: salonB1292, badge: "Édition limitée" },
  { id: "s5", name: "Branche Dorée", ref: "B1300", basePrice: 150, category: "Salon", image: salonB1300 },
  { id: "s6", name: "Vagues Abstraites", ref: "B275", basePrice: 150, category: "Salon", image: salonB275 },

  // Cuisine products
  { id: "c1", name: "Café Traditionnel", ref: "C001", basePrice: 120, category: "Cuisine", image: cuisineCoffee, badge: "Nouveau" },
  { id: "c2", name: "Citrons Méditerranéens", ref: "C002", basePrice: 120, category: "Cuisine", image: cuisineLemon },
  { id: "c3", name: "Huile d'Olive & Pain", ref: "C003", basePrice: 120, category: "Cuisine", image: cuisineOlive, badge: "Best-seller" },
  { id: "c4", name: "Épices Marocaines", ref: "C004", basePrice: 120, category: "Cuisine", image: cuisineSpices },
  { id: "c5", name: "Poterie Artisanale", ref: "C005", basePrice: 120, category: "Cuisine", image: cuisinePottery, badge: "Édition limitée" },
  { id: "c6", name: "Mortier aux Herbes", ref: "C006", basePrice: 120, category: "Cuisine", image: cuisineHerbs },
];

const categories: Category[] = ["Tout", "Salon", "Cuisine"];

export function ProductShowcase() {
  const [active, setActive] = useState<Category>("Tout");
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
  const [selectedFrame, setSelectedFrame] = useState<Record<string, string>>({});
  const [qtyByProduct, setQtyByProduct] = useState<Record<string, number>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [arImage, setArImage] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [collectionIndex, setCollectionIndex] = useState(0);

  const filtered = useMemo(
    () => (active === "Tout" ? products : products.filter((p) => p.category === active)),
    [active],
  );

  const getPrice = (basePrice: number, size: string) => {
    const multiplier = priceBySize[size] ?? 1;
    return Math.round(basePrice * multiplier);
  };

  const getDescription = (p: Product) => {
    if (p.category === "Salon") {
      return "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.";
    }

    return "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.";
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
        {/* Heading */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-brand-red">
              La Galerie
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Tableaux <em className="text-accent-orange">muraux</em>
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Une sélection d'œuvres encadrées pour habiller vos murs — tons
              chauds, impressions soignées, finitions durables.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-md"
                      : "border-border bg-background/60 text-foreground hover:border-foreground/40 hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => {
            const isLiked = !!liked[p.id];
            const size = selectedSize[p.id] ?? dimensionOptions[2].value; // default 40×60

            return (
              <article
                key={p.id}
                className="group animate-card-rise"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* Image area */}
                <div className="relative overflow-hidden rounded-3xl bg-muted shadow-[0_18px_40px_-25px_rgba(80,30,10,0.45)]">
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

                  {/* Ref badge top-right area */}
                  <span className="absolute right-4 bottom-4 rounded-full bg-foreground/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background backdrop-blur-sm">
                    Réf: {p.ref}
                  </span>

                  {/* Badge */}
                  {p.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur">
                      {p.badge}
                    </span>
                  )}

                  {/* Heart */}
                  <button
                    onClick={() =>
                      setLiked((prev) => ({ ...prev, [p.id]: !prev[p.id] }))
                    }
                    aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition-all duration-300 ${
                      isLiked
                        ? "scale-110 bg-brand-red text-white"
                        : "bg-background/80 text-foreground hover:bg-background"
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

                  {/* Quick actions */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button
                      onClick={() => setDetailProduct(p)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-background/85 text-foreground backdrop-blur transition hover:bg-background"
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
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Meta */}
                <div className="mt-4 flex items-start justify-between gap-3 px-1">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                      {p.category} · Réf: {p.ref}
                    </p>
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    à partir de {p.basePrice} DH
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Collections */}
        <div className="mt-24">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-red/10 bg-gradient-to-br from-[#f9f1df] via-[#fcf8ef] to-[#f4e3c7] p-3 shadow-[0_30px_80px_-35px_rgba(80,30,10,0.55)] md:p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(236, 90, 60, 0.12), transparent 24%), radial-gradient(circle at 80% 30%, rgba(244, 162, 97, 0.15), transparent 28%), radial-gradient(circle at 50% 80%, rgba(126, 151, 107, 0.12), transparent 30%)",
                }}
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-white/35 backdrop-blur-sm">
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
                        <div className="absolute right-6 bottom-6 h-28 w-28 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm" />
                      </div>
                    </div>
                  );
                })}

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
        </div>

      </div>

      {/* Product details modal */}
      {detailProduct && (
        <div
          className="fixed inset-0 z-[80] bg-black/45 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setDetailProduct(null)}
        >
          <div
            className="mx-auto grid h-full max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl md:grid-cols-[1fr_1fr]"
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
                  selectedSize[detailProduct.id] ?? dimensionOptions[2].value,
                )} DH
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">Taille du tableau</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {dimensionOptions.map((dim) => {
                    const isSel = (selectedSize[detailProduct.id] ?? dimensionOptions[2].value) === dim.value;
                    return (
                      <button
                        key={dim.value}
                        onClick={() =>
                          setSelectedSize((prev) => ({ ...prev, [detailProduct.id]: dim.value }))
                        }
                        className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                          isSel
                            ? "border-[#ad9562] bg-[#ad9562] text-white"
                            : "border-border bg-white text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {dim.value.replace("×", "/")}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-foreground">Type d'encadrement</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {frameOptions.map((frame) => {
                    const isSel = (selectedFrame[detailProduct.id] ?? frameOptions[0]) === frame;
                    return (
                      <button
                        key={frame}
                        onClick={() =>
                          setSelectedFrame((prev) => ({ ...prev, [detailProduct.id]: frame }))
                        }
                        className={`rounded-md border px-4 py-2 text-sm font-semibold uppercase transition ${
                          isSel
                            ? "border-[#ad9562] bg-[#ad9562] text-white"
                            : "border-border bg-white text-foreground hover:border-foreground/40"
                        }`}
                      >
                        {frame}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {getDescription(detailProduct)}
              </p>

              <p className="mt-4 text-sm text-muted-foreground">
                Categorie : <span className="font-semibold text-foreground">{detailProduct.category}</span>
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="inline-flex h-11 items-center rounded-md border border-border bg-white">
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

                <button className="inline-flex h-11 flex-1 items-center justify-center rounded-md bg-[#ad9562] px-6 text-sm font-semibold text-white transition hover:opacity-90">
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AR Viewer Modal */}
      <ArViewer
        isOpen={!!arImage}
        onClose={() => setArImage(null)}
        imageSrc={arImage}
      />
    </section>
  );
}
