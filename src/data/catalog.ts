import salonB1096 from "@/assets/salon/art-abstract-warm.jpg";
import salonB1099 from "@/assets/salon/art-botanical.jpg";
import salonB1126 from "@/assets/salon/art-desert.jpg";
import salonB1292 from "@/assets/salon/art-figure.jpg";
import salonB1300 from "@/assets/salon/art-geometric.jpg";
import salonB275 from "@/assets/salon/art-vintage.jpg";

import cuisineCoffee from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.14 (1).jpeg";
import cuisineLemon from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.15.jpeg";
import cuisineOlive from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.18.jpeg";
import cuisineSpices from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.19.jpeg";
import cuisinePottery from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.20.jpeg";
import cuisineHerbs from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.21.jpeg";
import cuisineKitchen1 from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.14.jpeg";
import cuisineKitchen2 from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.02.22.jpeg";
import cuisineKitchen3 from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.09.39.jpeg";
import cuisineKitchen4 from "@/assets/Cuisine/WhatsApp Image 2026-04-19 at 23.09.40.jpeg";

export type CatalogCategoryLabel = "Salon" | "Cuisine";
export type CatalogCategorySlug = "salon" | "cuisine";

export type CatalogSizeOption = {
  label: string;
  value: string;
};

export type CatalogCategory = {
  label: CatalogCategoryLabel;
  slug: CatalogCategorySlug;
  description: string;
  image: string;
  accentClass: string;
  heroWord: string;
  images: string[];
};

export type CatalogProduct = {
  id: string;
  slug: string;
  name: string;
  category: CatalogCategoryLabel;
  categorySlug: CatalogCategorySlug;
  ref: string;
  basePrice: number;
  image: string;
  description: string;
  badge?: string;
  sizes: CatalogSizeOption[];
  frames: string[];
  tags: string[];
};

export type HeroCategory = {
  slug: CatalogCategorySlug;
  word: string;
  color: string;
  images: string[];
};

export const defaultSizeOptions: CatalogSizeOption[] = [
  { label: "20 x 30 cm", value: "20x30" },
  { label: "30 x 40 cm", value: "30x40" },
  { label: "40 x 60 cm", value: "40x60" },
  { label: "50 x 70 cm", value: "50x70" },
  { label: "60 x 90 cm", value: "60x90" },
  { label: "80 x 120 cm", value: "80x120" },
  { label: "100 x 150 cm", value: "100x150" },
];

export const defaultFrameOptions = [
  "Toile sans cadre exterieur",
  "Toile avec cadre exterieur dore",
  "Toile avec cadre exterieur argente",
  "Toile avec cadre exterieur noir",
  "Toile avec cadre exterieur blanc",
] as const;

export const priceBySize: Record<string, number> = {
  "20x30": 1,
  "30x40": 1.3,
  "40x60": 1.6,
  "50x70": 2,
  "60x90": 2.5,
  "80x120": 3.2,
  "100x150": 4,
};

export const catalogCategories: CatalogCategory[] = [
  {
    label: "Salon",
    slug: "salon",
    description:
      "Des tableaux decoratifs lumineux et elegants pour structurer les murs du salon avec une presence douce et contemporaine.",
    image: salonB1096,
    accentClass: "text-accent-green",
    heroWord: "salon",
    images: [salonB1096, salonB1099, salonB1126, salonB1292, salonB1300],
  },
  {
    label: "Cuisine",
    slug: "cuisine",
    description:
      "Des pieces murales chaleureuses inspirees des matieres, des saveurs et des couleurs du quotidien pour une cuisine plus vivante.",
    image: cuisineCoffee,
    accentClass: "text-accent-blue",
    heroWord: "cuisine",
    images: [cuisineKitchen1, cuisineKitchen2, cuisineKitchen3, cuisineKitchen4, cuisineHerbs],
  },
];

export const boutiqueFilters = ["Tout", "Salon", "Cuisine"] as const;

export type BoutiqueFilter = (typeof boutiqueFilters)[number];

export const catalogProducts: CatalogProduct[] = [
  {
    id: "s1",
    slug: "fleurs-blanches-or-b1096",
    name: "Fleurs Blanches & Or",
    category: "Salon",
    categorySlug: "salon",
    ref: "B1096",
    basePrice: 150,
    image: salonB1096,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    badge: "Nouveau",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["floral", "lumineux", "salon"],
  },
  {
    id: "s2",
    slug: "roses-dorees-b1099",
    name: "Roses Dorees",
    category: "Salon",
    categorySlug: "salon",
    ref: "B1099",
    basePrice: 150,
    image: salonB1099,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["floral", "dore", "salon"],
  },
  {
    id: "s3",
    slug: "cerisier-en-fleurs-b1126",
    name: "Cerisier en Fleurs",
    category: "Salon",
    categorySlug: "salon",
    ref: "B1126",
    basePrice: 150,
    image: salonB1126,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    badge: "Best-seller",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["nature", "apaisant", "salon"],
  },
  {
    id: "s4",
    slug: "fleurs-elegantes-b1292",
    name: "Fleurs Elegantes",
    category: "Salon",
    categorySlug: "salon",
    ref: "B1292",
    basePrice: 150,
    image: salonB1292,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    badge: "Edition limitee",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["elegant", "premium", "salon"],
  },
  {
    id: "s5",
    slug: "branche-doree-b1300",
    name: "Branche Doree",
    category: "Salon",
    categorySlug: "salon",
    ref: "B1300",
    basePrice: 150,
    image: salonB1300,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["botanique", "dore", "salon"],
  },
  {
    id: "s6",
    slug: "vagues-abstraites-b275",
    name: "Vagues Abstraites",
    category: "Salon",
    categorySlug: "salon",
    ref: "B275",
    basePrice: 150,
    image: salonB275,
    description:
      "Un tableau decoratif pense pour sublimer votre salon avec une touche elegante, lumineuse et contemporaine.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["abstrait", "texture", "salon"],
  },
  {
    id: "c1",
    slug: "cafe-traditionnel-c001",
    name: "Cafe Traditionnel",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C001",
    basePrice: 120,
    image: cuisineCoffee,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    badge: "Nouveau",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["cafe", "cuisine", "chaleureux"],
  },
  {
    id: "c2",
    slug: "citrons-mediterraneens-c002",
    name: "Citrons Mediterraneens",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C002",
    basePrice: 120,
    image: cuisineLemon,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["citrons", "mediterraneen", "cuisine"],
  },
  {
    id: "c3",
    slug: "huile-olive-pain-c003",
    name: "Huile d'Olive & Pain",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C003",
    basePrice: 120,
    image: cuisineOlive,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    badge: "Best-seller",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["olive", "artisan", "cuisine"],
  },
  {
    id: "c4",
    slug: "epices-marocaines-c004",
    name: "Epices Marocaines",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C004",
    basePrice: 120,
    image: cuisineSpices,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["epices", "maroc", "cuisine"],
  },
  {
    id: "c5",
    slug: "poterie-artisanale-c005",
    name: "Poterie Artisanale",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C005",
    basePrice: 120,
    image: cuisinePottery,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    badge: "Edition limitee",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["poterie", "artisanat", "cuisine"],
  },
  {
    id: "c6",
    slug: "mortier-aux-herbes-c006",
    name: "Mortier aux Herbes",
    category: "Cuisine",
    categorySlug: "cuisine",
    ref: "C006",
    basePrice: 120,
    image: cuisineHerbs,
    description:
      "Une piece artistique ideale pour la cuisine, chaleureuse et expressive, inspiree des matieres et des couleurs du quotidien.",
    sizes: defaultSizeOptions,
    frames: [...defaultFrameOptions],
    tags: ["herbes", "nature", "cuisine"],
  },
];

export const heroCategories: HeroCategory[] = catalogCategories.map((category) => ({
  slug: category.slug,
  word: category.heroWord,
  color: category.accentClass,
  images: category.images,
}));

export const getCatalogCategoryBySlug = (slug: string) =>
  catalogCategories.find((category) => category.slug === slug);

export const getCatalogProductsByCategorySlug = (slug: string) =>
  catalogProducts.filter((product) => product.categorySlug === slug);
