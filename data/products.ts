export type ProductCategory =
  | "agricultura"
  | "energia"
  | "materiais"
  | "quimica";

export type Product = {
  id: string;
  name: string;
  shortName: string;
  eyebrow: string;
  category: ProductCategory;
  categories: ProductCategory[];
  description: string;
  highlight: string;
  benefits: string[];
  applications: string[];
  image: string;
  imageAlt: string;
  officialUrl: string;
  officialLinkLabel?: string;
  whatsappNumber?: string;
  mediaVariant?: "product" | "banner";
  accent: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  agricultura: "Agricultura",
  energia: "Energia",
  materiais: "Materiais e ligantes",
  quimica: "Química fina e alimentos"
};

export const products: Product[] = [
  {
    id: "bion-complex",
    name: "BION+ Complex",
    shortName: "BION+ Complex",
    eyebrow: "Solução agrícola",
    category: "agricultura",
    categories: ["agricultura"],
    description:
      "Solução aquosa de carbono orgânico pirolenhoso desenvolvida para uso como adjuvante em diferentes composições de calda agrícola.",
    highlight: "Apresentações de 250 ml a granel",
    benefits: [
      "Uso descrito em bula com biológicos e fertilizantes",
      "Aplicação prevista com óleo de neem e óleos essenciais",
      "Orientação e recomendação técnica para cada aplicação"
    ],
    applications: ["Biológicos", "Fertilizantes", "Óleo de neem", "Manejo"],
    image: "/images/hero-biocarbo.webp",
    imageAlt: "Campanha oficial do BION+ Complex e BIOPIROL",
    officialUrl:
      "https://drive.google.com/file/d/1g13pu0Wrm0DHI_vslfLiqOQeUXb-Bhkj/view",
    officialLinkLabel: "Abrir ficha técnica",
    whatsappNumber: "5531995258997",
    mediaVariant: "banner",
    accent: "#69a301"
  },
  {
    id: "biopirol",
    name: "BIOPIROL — Extrato Pirolenhoso",
    shortName: "BIOPIROL",
    eyebrow: "Adjuvante natural",
    category: "agricultura",
    categories: ["agricultura"],
    description:
      "Fração aquosa refinada do alcatrão vegetal, desenvolvida para aplicações agrícolas e para compor caldas de fertilizantes e defensivos.",
    highlight: "pH entre 2,0 e 2,7",
    benefits: [
      "Tecnologia de biorrefino para obtenção de extrato puro e isento de alcatrão",
      "Uso como aditivo em caldas agrícolas",
      "Aplicação em diferentes culturas e estratégias de manejo"
    ],
    applications: ["Grãos", "Citros", "Fertilizantes", "Manejo agrícola"],
    image: "/images/biopirol-20l.webp",
    imageAlt: "Embalagem de 20 litros do extrato pirolenhoso BIOPIROL",
    officialUrl:
      "https://biocarbo.com/produto/biopirol-extrato-pirolenhoso/",
    officialLinkLabel: "Ver página técnica",
    whatsappNumber: "5531995258997",
    mediaVariant: "product",
    accent: "#78b82a"
  },
  {
    id: "eucatar-fuel",
    name: "EUCATAR FUEL",
    shortName: "EUCATAR FUEL",
    eyebrow: "Biocombustível industrial",
    category: "energia",
    categories: ["energia"],
    description:
      "Combustível obtido no fracionamento do alcatrão vegetal para abastecimento de caldeiras e fornos industriais.",
    highlight: "Especificações técnicas sob consulta",
    benefits: [
      "Alternativa vegetal aos óleos combustíveis fósseis",
      "Características direcionadas ao uso industrial",
      "Isento de enxofre e nitrogênio, conforme especificação institucional"
    ],
    applications: ["Caldeiras", "Fornos", "Processos térmicos", "Indústria"],
    image: "/images/eucatar-fuel.jpg",
    imageAlt: "Estrutura industrial associada ao Eucatar Fuel",
    officialUrl: "https://biocarbo.com/produto/eucatar-fuel/",
    officialLinkLabel: "Ver página técnica",
    accent: "#d48b42"
  },
  {
    id: "biopiche",
    name: "Biopiche de Alcatrão Vegetal",
    shortName: "Biopiche",
    eyebrow: "Materiais e ligantes",
    category: "materiais",
    categories: ["materiais"],
    description:
      "Bioligante vegetal versátil para formulações, aglomeração, impermeabilização e diferentes aplicações industriais.",
    highlight: "Uma base vegetal, múltiplas formulações",
    benefits: [
      "Ligante e aglomerante para briquetes",
      "Aplicações em massas refratárias, asfaltos e vedantes",
      "Uso como selante e impermeabilizante de madeira"
    ],
    applications: [
      "Briquetes",
      "Refratários",
      "Pavimentação",
      "Construção civil"
    ],
    image: "/images/biopiche.jpg",
    imageAlt: "Rodovia representando aplicações do biopiche vegetal",
    officialUrl:
      "https://biocarbo.com/produto/biopiche-de-alcatrao-vegetal/",
    officialLinkLabel: "Ver página técnica",
    accent: "#67786e"
  },
  {
    id: "oleo-alcatrao",
    name: "Óleo de Alcatrão Vegetal",
    shortName: "Óleo vegetal",
    eyebrow: "Química fina",
    category: "quimica",
    categories: ["quimica", "materiais"],
    description:
      "Frações de óleo vegetal com características específicas para formulações químicas, alimentícias e desenvolvimento de novos materiais.",
    highlight: "Frações especiais para diferentes indústrias",
    benefits: [
      "Notas próprias da madeira de eucalipto para aroma defumado",
      "Aplicação em resinas fenólicas e precursores de poliuretanos",
      "Fonte para isolamento e síntese de substâncias de interesse industrial"
    ],
    applications: [
      "Química fina",
      "Alimentos",
      "Resinas",
      "Indústria farmacêutica"
    ],
    image: "/images/oleo-laboratorio.jpg",
    imageAlt: "Laboratório representando o óleo de alcatrão vegetal",
    officialUrl:
      "https://biocarbo.com/produto/oleo-de-alcatrao-vegetal/",
    officialLinkLabel: "Ver página técnica",
    accent: "#4a82a0"
  }
];

export const solutionOptions = [
  {
    id: "agro-biologicos",
    label: "Compor caldas com biológicos",
    supporting: "Biológicos, fertilizantes, neem e óleos essenciais",
    productId: "bion-complex",
    category: "agricultura" as ProductCategory
  },
  {
    id: "agro-defensivos",
    label: "Potencializar caldas de defensivos",
    supporting: "Extrato pirolenhoso para diferentes estratégias de manejo",
    productId: "biopirol",
    category: "agricultura" as ProductCategory
  },
  {
    id: "energia",
    label: "Abastecer caldeiras ou fornos",
    supporting: "Alternativa vegetal para processos térmicos",
    productId: "eucatar-fuel",
    category: "energia" as ProductCategory
  },
  {
    id: "materiais",
    label: "Criar ligantes ou materiais",
    supporting: "Briquetes, vedantes, refratários e pavimentação",
    productId: "biopiche",
    category: "materiais" as ProductCategory
  },
  {
    id: "quimica",
    label: "Desenvolver formulações especiais",
    supporting: "Química fina, alimentos, resinas e novos materiais",
    productId: "oleo-alcatrao",
    category: "quimica" as ProductCategory
  }
];
