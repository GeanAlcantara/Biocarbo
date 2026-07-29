import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Beaker,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Droplets,
  ExternalLink,
  Factory,
  Flame,
  FlaskConical,
  Gauge,
  Leaf,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  PackageCheck,
  Phone,
  Recycle,
  Send,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wheat,
  X
} from "lucide-react";
import {
  categoryLabels,
  products,
  solutionOptions,
  type Product,
  type ProductCategory
} from "@/data/products";
import type { CSSProperties } from "react";

const WHATSAPP_NUMBER = "553131917444";

type ProductFilter = "todos" | "industriais" | ProductCategory;

const filterOptions: Array<{ value: ProductFilter; label: string }> = [
  { value: "todos", label: "Todas as soluções" },
  { value: "agricultura", label: "Linha Agro" },
  { value: "industriais", label: "Linhas industriais" },
  { value: "energia", label: "Energia" },
  { value: "materiais", label: "Materiais" },
  { value: "quimica", label: "Química fina" }
];

const initialSolution = solutionOptions[0];
const initialRecommendedProduct = products.find(
  (product) => product.id === initialSolution.productId
)!;

const applicationCards = [
  {
    icon: Wheat,
    title: "Agricultura",
    copy: "Extrato pirolenhoso para compor estratégias de manejo e caldas agrícolas.",
    category: "agricultura" as ProductCategory,
    productId: undefined
  },
  {
    icon: Flame,
    title: "Energia térmica",
    copy: "Combustível vegetal destinado ao abastecimento de caldeiras e fornos.",
    category: "energia" as ProductCategory,
    productId: undefined
  },
  {
    icon: Layers3,
    title: "Materiais e ligantes",
    copy: "Bases vegetais para briquetes, refratários, vedação e pavimentação.",
    category: "materiais" as ProductCategory,
    productId: undefined
  },
  {
    icon: Beaker,
    title: "Química fina",
    copy: "Frações especiais para resinas, poliuretanos e sínteses industriais.",
    category: "quimica" as ProductCategory,
    productId: undefined
  },
  {
    icon: Droplets,
    title: "Alimentos",
    copy: "Óleos com notas próprias da madeira de eucalipto para aroma defumado.",
    category: "quimica" as ProductCategory,
    productId: undefined
  },
  {
    icon: ShieldCheck,
    title: "Saúde animal",
    copy: "Matérias-primas vegetais para formulações do segmento veterinário.",
    category: "materiais" as ProductCategory,
    productId: "biopiche"
  }
];

const faqItems = [
  {
    question: "Como saber qual solução Biocarbo é adequada para minha operação?",
    answer:
      "Comece informando a aplicação, o processo, o volume estimado e o objetivo técnico. A equipe comercial encaminha a demanda para avaliação e indica a linha mais aderente, além das informações técnicas necessárias."
  },
  {
    question: "A Biocarbo atende demandas agrícolas e industriais?",
    answer:
      "Sim. O portfólio apresentado contempla agricultura, energia térmica, materiais e ligantes, química fina, alimentos e outras aplicações industriais."
  },
  {
    question: "É possível solicitar ficha técnica e especificações do produto?",
    answer:
      "Sim. Use o botão “Solicitar especificações” no produto desejado ou envie sua demanda pelo formulário. A conversa será iniciada com o contexto do produto já preenchido."
  },
  {
    question: "A empresa desenvolve soluções para novas aplicações?",
    answer:
      "Pesquisa e desenvolvimento fazem parte da atuação institucional da Biocarbo. Projetos para novas aplicações devem ser avaliados pela equipe técnica conforme matéria-prima, processo, escala e requisitos do cliente."
  },
  {
    question: "Onde ficam as unidades da Biocarbo?",
    answer:
      "A matriz fica na Fazenda Morro Grande, em Brumadinho/MG, e a filial na Fazenda Santa Helena, em Morada Nova de Minas/MG."
  }
];

const processSteps = [
  {
    icon: Leaf,
    number: "01",
    title: "Origem vegetal",
    copy: "A cadeia começa em matérias-primas renováveis provenientes da biomassa."
  },
  {
    icon: Factory,
    number: "02",
    title: "Processamento",
    copy: "O alcatrão vegetal é processado em escala industrial com tecnologia própria."
  },
  {
    icon: FlaskConical,
    number: "03",
    title: "Biorrefino",
    copy: "O fracionamento gera correntes com características específicas para cada uso."
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Aplicação",
    copy: "As frações atendem demandas do campo, da energia e de diferentes indústrias."
  }
];

function whatsappUrl(message: string, number = WHATSAPP_NUMBER) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function ProductCard({
  product,
  isLastVisible = false
}: {
  product: Product;
  isLastVisible?: boolean;
}) {
  const productStyle = {
    "--product-accent": product.accent
  } as CSSProperties;
  const quoteMessage = [
    "Olá, equipe Biocarbo!",
    "",
    `Gostaria de solicitar informações comerciais sobre ${product.name}.`,
    "Minha aplicação é:",
    "Volume estimado:",
    "Cidade/UF:"
  ].join("\n");

  return (
    <article
      id={`product-${product.id}`}
      className={`product-card reveal ${isLastVisible ? "is-last-visible" : ""} ${
        product.mediaVariant === "product" ? "product-card--product-shot" : ""
      } ${
        product.mediaVariant === "banner" ? "product-card--banner" : ""
      }`}
      data-product-card
      data-product-id={product.id}
      data-product-categories={product.categories.join(" ")}
      style={productStyle}
    >
      <div className="product-card__media">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 720px) 92vw, (max-width: 1100px) 46vw, 560px"
        />
        <span className="product-card__category">
          {categoryLabels[product.category]}
        </span>
      </div>

      <div className="product-card__body">
        <p className="eyebrow">{product.eyebrow}</p>
        <h3>{product.name}</h3>
        <p className="product-card__description">{product.description}</p>

        <details className="product-card__more">
          <summary>
            <span>Detalhes e aplicações</span>
            <ChevronDown size={17} aria-hidden="true" />
          </summary>

          <div className="product-card__details">
            <div className="product-card__highlight">
              <Sparkles size={17} aria-hidden="true" />
              <span>{product.highlight}</span>
            </div>

            <ul className="product-card__benefits" aria-label="Principais pontos">
              {product.benefits.map((benefit) => (
                <li key={benefit}>
                  <CircleCheck size={17} aria-hidden="true" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="tag-list" aria-label="Aplicações">
              {product.applications.map((application) => (
                <span key={application}>{application}</span>
              ))}
            </div>
          </div>
        </details>

        <div className="product-card__actions">
          <a
            className="button button--dark button--full"
            href={whatsappUrl(
              quoteMessage,
              product.whatsappNumber || WHATSAPP_NUMBER
            )}
            target="_blank"
            rel="noreferrer"
            data-track="product_quote_click"
            data-track-product={product.id}
          >
            Solicitar cotação
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            className="text-link"
            href={product.officialUrl}
            target="_blank"
            rel="noreferrer"
            data-track="official_product_click"
            data-track-product={product.id}
          >
            {product.officialLinkLabel || "Ver página técnica"}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function LandingPage() {
  return (
    <>
      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="trust-bar">
        <div className="container trust-bar__inner">
          <div>
            <BadgeCheck size={15} aria-hidden="true" />
            <span>Pioneirismo em carboquímica vegetal desde 1994</span>
          </div>
          <a
            href="tel:+553131917444"
            aria-label="Ligar para a Biocarbo no número (31) 3191-7444"
          >
            <Phone size={14} aria-hidden="true" />
            <span>(31) 3191-7444</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <a
            className="brand"
            href="#inicio"
            aria-label="Biocarbo — voltar ao início"
          >
            <Image
              src="/images/logo-biocarbo.svg"
              alt="Biocarbo"
              width={160}
              height={48}
              priority
            />
          </a>

          <nav
            id="main-navigation"
            className="main-nav"
            aria-label="Navegação principal"
            data-main-nav
          >
            <div className="main-nav__mobile-head" aria-hidden="true">
              <span>Menu</span>
              <small>Carboquímica vegetal desde 1994</small>
            </div>
            <a href="#solucoes">Soluções</a>
            <a href="#produtos">Produtos</a>
            <a href="#tecnologia">Tecnologia</a>
            <a href="#biocarbo">A Biocarbo</a>
            <a href="#faq">Dúvidas</a>
            <a
              className="button button--primary main-nav__mobile-cta"
              href={whatsappUrl(
                "Olá, equipe Biocarbo! Gostaria de falar com um especialista."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Falar com especialista
              <MessageCircle size={18} aria-hidden="true" />
            </a>
            <div className="main-nav__mobile-footer">
              <a href="tel:+553131917444">
                <Phone size={16} aria-hidden="true" />
                <span>(31) 3191-7444</span>
              </a>
              <p>Brumadinho e Morada Nova de Minas · MG</p>
            </div>
          </nav>

          <button
            className="menu-backdrop"
            type="button"
            tabIndex={-1}
            aria-label="Fechar menu"
            data-menu-backdrop
          />

          <div className="site-header__actions">
            <a
              className="button button--primary site-header__cta"
              href={whatsappUrl(
                "Olá, equipe Biocarbo! Gostaria de falar com um especialista."
              )}
              target="_blank"
              rel="noreferrer"
              data-track="header_whatsapp_click"
            >
              Falar com especialista
              <MessageCircle size={18} aria-hidden="true" />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Abrir menu"
              aria-expanded="false"
              aria-controls="main-navigation"
              data-menu-toggle
            >
              <Menu
                className="menu-toggle__open"
                size={24}
                aria-hidden="true"
              />
              <X
                className="menu-toggle__close"
                size={24}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__media" aria-hidden="true">
            <Image
              src="/images/hero-biorefinaria.webp"
              alt=""
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__kicker">
                <span />
                Ciência brasileira. Origem vegetal.
              </p>
              <h1 id="hero-title">
                Da biomassa vegetal a{" "}
                <em>soluções de alto valor</em> para o campo e a indústria.
              </h1>
              <p className="hero__lead">
                Tecnologia própria para transformar o alcatrão vegetal em
                produtos aplicados à agricultura, energia, materiais, química
                fina e alimentos.
              </p>
              <div className="hero__actions">
                <a
                  className="button button--lime button--large"
                  href="#encontre"
                  data-track="hero_solution_click"
                >
                  Encontre sua solução
                  <ArrowRight size={19} aria-hidden="true" />
                </a>
                <a
                  className="button button--glass button--large"
                  href="#produtos"
                  data-track="hero_products_click"
                >
                  Conhecer produtos
                  <ChevronDown size={18} aria-hidden="true" />
                </a>
              </div>

              <div className="hero__proof" aria-label="Diferenciais Biocarbo">
                <div>
                  <strong>Desde 1994</strong>
                  <span>experiência industrial</span>
                </div>
                <div>
                  <strong>Tecnologia própria</strong>
                  <span>do processo à aplicação</span>
                </div>
                <div>
                  <strong>Brasil + exterior</strong>
                  <span>atuação em diferentes mercados</span>
                </div>
              </div>
            </div>
          </div>
          <a
            className="hero__scroll"
            href="#solucoes"
            aria-label="Avançar para soluções"
          >
            <span>Explore</span>
            <ChevronDown size={18} aria-hidden="true" />
          </a>
        </section>

        <section className="value-strip" aria-label="Compromissos da Biocarbo">
          <div className="container value-strip__grid">
            <div>
              <Recycle size={23} aria-hidden="true" />
              <span>
                <strong>Origem vegetal</strong>
                Valorização da biomassa
              </span>
            </div>
            <div>
              <Microscope size={23} aria-hidden="true" />
              <span>
                <strong>Pesquisa aplicada</strong>
                Desenvolvimento contínuo
              </span>
            </div>
            <div>
              <Gauge size={23} aria-hidden="true" />
              <span>
                <strong>Escala industrial</strong>
                Controle ao longo do processo
              </span>
            </div>
            <div>
              <Building2 size={23} aria-hidden="true" />
              <span>
                <strong>Atuação B2B</strong>
                Soluções para diferentes cadeias
              </span>
            </div>
          </div>
        </section>

        <section className="section applications" id="solucoes">
          <div className="container">
            <div className="section-heading section-heading--split reveal">
              <div>
                <p className="eyebrow">Soluções por aplicação</p>
                <h2>Uma plataforma vegetal para desafios diferentes.</h2>
              </div>
              <p>
                A Biocarbo fraciona e direciona correntes do alcatrão vegetal
                para usos específicos, conectando sustentabilidade, desempenho
                e viabilidade industrial.
              </p>
            </div>

            <p className="mobile-scroll-hint">Deslize para explorar as aplicações</p>
            <div className="applications__grid">
              {applicationCards.map((application) => {
                const Icon = application.icon;
                return (
                  <button
                    className="application-card reveal"
                    key={application.title}
                    type="button"
                    data-product-filter={application.category}
                    data-product-target={application.productId}
                    data-scroll-products
                  >
                    <span className="application-card__icon">
                      <Icon size={25} aria-hidden="true" />
                    </span>
                    <span className="application-card__content">
                      <strong>{application.title}</strong>
                      <span>{application.copy}</span>
                    </span>
                    <ArrowUpRight
                      className="application-card__arrow"
                      size={19}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="solution-finder" id="encontre">
          <div className="container solution-finder__grid">
            <div className="solution-finder__intro reveal">
              <p className="eyebrow eyebrow--light">Escolha guiada</p>
              <h2>O que você precisa resolver agora?</h2>
              <p>
                Selecione o objetivo mais próximo da sua demanda e veja por onde
                começar. A indicação inicial deve ser validada com a equipe
                técnica.
              </p>
              <div className="solution-finder__note">
                <ShieldCheck size={20} aria-hidden="true" />
                <span>
                  Recomendação comercial inicial, sem substituir avaliação
                  técnica.
                </span>
              </div>
            </div>

            <div className="solution-finder__panel reveal">
              <div className="solution-options" role="radiogroup">
                {solutionOptions.map((solution, index) => {
                  const product = products.find(
                    (item) => item.id === solution.productId
                  )!;

                  return (
                    <button
                      className={`solution-option ${
                        index === 0 ? "is-selected" : ""
                      }`}
                      key={solution.id}
                      type="button"
                      role="radio"
                      aria-checked={index === 0}
                      tabIndex={index === 0 ? 0 : -1}
                      data-solution-option
                      data-solution-category={solution.category}
                      data-solution-product={product.id}
                      data-solution-name={product.shortName}
                      data-solution-interest={product.name}
                    >
                      <span className="solution-option__check">
                        <Check size={16} aria-hidden="true" />
                      </span>
                      <span>
                        <strong>{solution.label}</strong>
                        <small>{solution.supporting}</small>
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                className="solution-result"
                aria-live="polite"
                data-solution-result
              >
                <div>
                  <span>Comece por</span>
                  <strong data-solution-result-name>
                    {initialRecommendedProduct.shortName}
                  </strong>
                </div>
                <button
                  className="button button--lime"
                  type="button"
                  data-show-recommendation
                  data-category={initialSolution.category}
                  data-product={initialRecommendedProduct.id}
                  data-interest={initialRecommendedProduct.name}
                >
                  Ver recomendação
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="section products-section" id="produtos">
          <div className="container">
            <div className="section-heading section-heading--center reveal">
              <p className="eyebrow">Portfólio Biocarbo</p>
              <h2>Produtos separados por finalidade.</h2>
              <p>
                Compare aplicações e encontre rapidamente a linha mais próxima
                da sua necessidade.
              </p>
            </div>

            <div className="product-families reveal">
              <button
                className="product-family"
                type="button"
                aria-pressed="false"
                data-product-filter="agricultura"
              >
                <span className="product-family__icon">
                  <Sprout size={23} aria-hidden="true" />
                </span>
                <span>
                  <small>Família 01</small>
                  <strong>Soluções para o Agro</strong>
                  <em>BION+ Complex · BIOPIROL</em>
                </span>
                <ChevronRight size={19} aria-hidden="true" />
              </button>
              <button
                className="product-family"
                type="button"
                aria-pressed="false"
                data-product-filter="industriais"
              >
                <span className="product-family__icon">
                  <Factory size={23} aria-hidden="true" />
                </span>
                <span>
                  <small>Família 02</small>
                  <strong>Produtos Industriais</strong>
                  <em>Eucatar Fuel · Biopiche · Óleo vegetal</em>
                </span>
                <ChevronRight size={19} aria-hidden="true" />
              </button>
            </div>

            <div
              className="product-filters reveal"
              role="group"
              aria-label="Filtrar produtos por finalidade"
            >
              {filterOptions.map((filter) => (
                <button
                  className={filter.value === "todos" ? "is-active" : ""}
                  key={filter.value}
                  type="button"
                  aria-pressed={filter.value === "todos"}
                  data-product-filter={filter.value}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="products-grid" aria-live="polite">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isLastVisible={index === products.length - 1}
                />
              ))}
            </div>

            <p className="products-section__disclaimer">
              Informações resumidas a partir do portfólio institucional. Para
              especificações, disponibilidade, aplicação e orientação de uso,
              consulte a equipe técnica da Biocarbo.
            </p>
          </div>
        </section>

        <section className="agro-spotlight" aria-labelledby="agro-title">
          <div className="container">
            <div className="agro-spotlight__card reveal">
              <div className="agro-spotlight__image">
                <Image
                  src="/images/hero-biocarbo.webp"
                  alt="Campanha Biocarbo com BIOPIROL e BION+ Complex para a lavoura"
                  fill
                  sizes="(max-width: 900px) 94vw, 62vw"
                />
              </div>
              <div className="agro-spotlight__content">
                <p className="eyebrow">Em destaque no campo</p>
                <h2 id="agro-title">
                  BIOPIROL e BION+ Complex: uma conversa para cada lavoura.
                </h2>
                <p>
                  A linha agrícola atual da Biocarbo combina conhecimento em
                  adjuvantes naturais e suporte técnico-comercial. Leve o
                  contexto da sua cultura para a equipe e avalie a melhor
                  estratégia.
                </p>
                <ul>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Atendimento orientado à aplicação
                  </li>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Informações técnicas sob consulta
                  </li>
                  <li>
                    <Check size={17} aria-hidden="true" />
                    Conversa direta com o time Biocarbo
                  </li>
                </ul>
                <a
                  className="button button--dark"
                  href={whatsappUrl(
                    "Olá, equipe Biocarbo! Quero avaliar BIOPIROL e BION+ Complex para a minha lavoura.",
                    "5531995258997"
                  )}
                  target="_blank"
                  rel="noreferrer"
                  data-track="agro_spotlight_click"
                >
                  Avaliar para minha lavoura
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section technology" id="tecnologia">
          <div className="container">
            <div className="section-heading section-heading--split reveal">
              <div>
                <p className="eyebrow">Como a tecnologia gera valor</p>
                <h2>Da origem vegetal à solução específica.</h2>
              </div>
              <p>
                A biorrefinaria transforma uma corrente vegetal complexa em
                frações direcionadas, ampliando o potencial de aplicação da
                carboquímica vegetal.
              </p>
            </div>

            <p className="mobile-scroll-hint">Acompanhe as etapas do processo</p>
            <div className="process">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className="process__step reveal" key={step.number}>
                    <div className="process__top">
                      <span>{step.number}</span>
                      <div>
                        <Icon size={24} aria-hidden="true" />
                      </div>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                    {index < processSteps.length - 1 && (
                      <ChevronRight
                        className="process__connector"
                        size={20}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="technology-services reveal">
              <div>
                <span>
                  <Recycle size={22} aria-hidden="true" />
                </span>
                <h3>Recuperação de vapores</h3>
                <p>
                  Soluções para recuperar vapores da carbonização e gerar
                  extrato pirolenhoso e alcatrão vegetal.
                </p>
              </div>
              <div>
                <span>
                  <Factory size={22} aria-hidden="true" />
                </span>
                <h3>Engenharia e implantação</h3>
                <p>
                  Projeto, fabricação, instalação e suporte a equipamentos e
                  etapas do processo.
                </p>
              </div>
              <div>
                <span>
                  <Sparkles size={22} aria-hidden="true" />
                </span>
                <div className="technology-services__title">
                  <h3>Forno Biocarbo</h3>
                  <small>Em desenvolvimento</small>
                </div>
                <p>
                  Frente tecnológica apresentada pela empresa para evolução dos
                  sistemas de carbonização.
                </p>
              </div>
            </div>

            <div className="technology__statement reveal">
              <div className="technology__mark">
                <Image
                  src="/images/brand-mark.svg"
                  alt=""
                  width={90}
                  height={90}
                />
              </div>
              <div>
                <p>Nosso ponto de vista</p>
                <blockquote>
                  Transformar melhor a biomassa é abrir novas possibilidades
                  para indústrias que buscam matérias-primas, processos e
                  produtos de origem vegetal.
                </blockquote>
              </div>
              <a
                className="text-link text-link--light"
                href={whatsappUrl(
                  "Olá, equipe Biocarbo! Tenho um projeto de desenvolvimento e gostaria de conversar."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Apresentar um projeto
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section about" id="biocarbo">
          <div className="container about__grid">
            <div className="about__content reveal">
              <p className="eyebrow">A Biocarbo</p>
              <h2>Pioneirismo que virou plataforma de inovação vegetal.</h2>
              <p>
                A Biocarbo foi a primeira empresa a destilar alcatrão vegetal
                em escala comercial no Brasil. Ao longo da sua trajetória,
                combinou produção industrial, pesquisa aplicada e
                desenvolvimento de mercado.
              </p>
              <p>
                Hoje, sua tecnologia conecta o potencial químico da biomassa a
                aplicações no campo e em cadeias industriais no Brasil e no
                exterior.
              </p>

              <div className="about__pillars">
                <div>
                  <Sprout size={21} aria-hidden="true" />
                  <span>
                    <strong>Pioneirismo</strong>
                    experiência desde 1994
                  </span>
                </div>
                <div>
                  <Microscope size={21} aria-hidden="true" />
                  <span>
                    <strong>Autoridade</strong>
                    pesquisa e desenvolvimento
                  </span>
                </div>
                <div>
                  <Factory size={21} aria-hidden="true" />
                  <span>
                    <strong>Tecnologia própria</strong>
                    operação em escala industrial
                  </span>
                </div>
              </div>
            </div>

            <div className="about__visual reveal">
              <div className="about__image">
                <Image
                  src="/images/equipamento-vapores.jpg"
                  alt="Equipamento de recuperação de vapores da carbonização desenvolvido pela Biocarbo"
                  fill
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
              </div>
              <div className="about__metric about__metric--top">
                <strong>1994</strong>
                <span>início da trajetória</span>
              </div>
              <div className="about__metric about__metric--bottom">
                <strong>Américas + Ásia</strong>
                <span>histórico de atuação internacional</span>
              </div>
            </div>
          </div>
        </section>

        <section className="research">
          <div className="container research__inner reveal">
            <div className="research__icon">
              <Microscope size={31} aria-hidden="true" />
            </div>
            <div>
              <p className="eyebrow eyebrow--light">Pesquisa & desenvolvimento</p>
              <h2>Novas aplicações começam com boas perguntas.</h2>
            </div>
            <p>
              A Biocarbo mantém uma trajetória de pesquisa com instituições
              públicas e privadas para ampliar o alcance da carboquímica
              vegetal e desenvolver alternativas a materiais e processos de
              origem fóssil.
            </p>
            <a
              className="button button--lime"
              href={whatsappUrl(
                "Olá, equipe Biocarbo! Gostaria de conversar sobre pesquisa, desenvolvimento ou uma nova aplicação."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre P&D
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq__grid">
            <div className="faq__intro reveal">
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2>Informação para avançar com segurança.</h2>
              <p>
                Não encontrou sua aplicação? A equipe pode ajudar a qualificar
                a demanda antes da cotação.
              </p>
              <a
                className="text-link"
                href={whatsappUrl(
                  "Olá, equipe Biocarbo! Tenho uma dúvida sobre uma aplicação."
                )}
                target="_blank"
                rel="noreferrer"
              >
                Fazer uma pergunta
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="faq__list reveal">
              {faqItems.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="faq__toggle">
                      <ChevronDown size={19} aria-hidden="true" />
                    </span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact__grid">
            <div className="contact__content reveal">
              <p className="eyebrow eyebrow--light">Próximo passo</p>
              <h2>Conte sua necessidade. A conversa já começa direcionada.</h2>
              <p>
                Preencha os dados essenciais e abra uma mensagem pronta no
                WhatsApp da Biocarbo. Nenhum dado é armazenado nesta página.
              </p>

              <div className="contact__direct">
                <a href="tel:+553131917444">
                  <span>
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <small>Telefone comercial</small>
                    <strong>(31) 3191-7444</strong>
                  </span>
                </a>
                <a
                  href={whatsappUrl(
                    "Olá, equipe Biocarbo! Gostaria de falar com o comercial."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    <MessageCircle size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <small>Atendimento rápido</small>
                    <strong>Chamar no WhatsApp</strong>
                  </span>
                </a>
              </div>
            </div>

            <form className="lead-form reveal" data-lead-form>
              <div className="lead-form__interactive">
                <div className="lead-form__row">
                <label>
                  <span>Nome *</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Como podemos chamar você?"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Empresa</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da empresa"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className="lead-form__row">
                <label>
                  <span>Cidade / UF</span>
                  <input
                    type="text"
                    name="state"
                    placeholder="Ex.: Uberlândia / MG"
                    autoComplete="address-level2"
                  />
                </label>
                <label>
                  <span>Telefone ou e-mail *</span>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Seu melhor contato"
                    autoComplete="tel"
                    required
                  />
                </label>
              </div>

              <label>
                <span>Produto ou interesse *</span>
                <select
                  name="interest"
                  defaultValue="Quero orientação técnica"
                  required
                >
                  <option value="Quero orientação técnica">
                    Quero orientação técnica
                  </option>
                  {products.map((product) => (
                    <option
                      key={product.id}
                      value={product.name}
                      data-whatsapp={
                        product.whatsappNumber || WHATSAPP_NUMBER
                      }
                    >
                      {product.name}
                    </option>
                  ))}
                  <option value="Pesquisa e desenvolvimento">
                    Pesquisa e desenvolvimento
                  </option>
                  <option value="Outra aplicação">Outra aplicação</option>
                </select>
              </label>

              <label>
                <span>Conte um pouco sobre a demanda</span>
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Aplicação, volume estimado, cultura ou processo..."
                />
              </label>

                <button
                  className="button button--lime button--full"
                  type="button"
                  data-lead-submit
                >
                  Enviar pelo WhatsApp
                  <Send size={18} aria-hidden="true" />
                </button>
                <p className="lead-form__privacy">
                  Ao continuar, você será direcionado ao WhatsApp e poderá
                  revisar a mensagem antes de enviá-la.{" "}
                  <a href="/privacidade">Política de Privacidade</a>
                </p>
              </div>
              <noscript>
                <div className="lead-form__noscript">
                  <strong>O formulário precisa de JavaScript.</strong>
                  <p>
                    Para falar com a equipe agora, use o atendimento direto pelo
                    WhatsApp.
                  </p>
                  <a
                    className="button button--lime button--full"
                    href={whatsappUrl(
                      "Olá, equipe Biocarbo! Gostaria de falar com o comercial."
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chamar no WhatsApp
                    <MessageCircle size={18} aria-hidden="true" />
                  </a>
                </div>
              </noscript>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Image
              src="/images/logo-biocarbo.svg"
              alt="Biocarbo"
              width={170}
              height={51}
            />
            <p>
              Gestão consciente da biomassa para gerar soluções vegetais de
              valor para o campo e a indústria.
            </p>
          </div>

          <div>
            <h2>Navegação</h2>
            <a href="#solucoes">Soluções</a>
            <a href="#produtos">Produtos</a>
            <a href="#tecnologia">Tecnologia</a>
            <a href="#biocarbo">A Biocarbo</a>
          </div>

          <div>
            <h2>Matriz</h2>
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>
                Fazenda Morro Grande, s/n
                <br />
                Brumadinho – MG
                <br />
                CEP 35460-000
              </span>
            </p>
          </div>

          <div>
            <h2>Filial</h2>
            <p>
              <MapPin size={16} aria-hidden="true" />
              <span>
                Rodovia Traçadal, km 5
                <br />
                Fazenda Santa Helena, s/n
                <br />
                Morada Nova de Minas – MG
              </span>
            </p>
          </div>
        </div>

        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} Biocarbo. Todos os direitos reservados.</span>
          <span>
            <a href="/privacidade">Privacidade</a>
            {" · "}
            Conteúdo técnico sujeito à validação da equipe Biocarbo.
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl(
          "Olá, equipe Biocarbo! Gostaria de falar com um especialista."
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Biocarbo pelo WhatsApp"
        data-track="floating_whatsapp_click"
      >
        <MessageCircle size={24} aria-hidden="true" />
        <span>Fale com a Biocarbo</span>
      </a>

      <div className="mobile-cta">
        <a
          href={whatsappUrl(
            "Olá, equipe Biocarbo! Gostaria de solicitar uma cotação."
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={19} aria-hidden="true" />
          Solicitar cotação
        </a>
      </div>

      <script src="/enhancements.js" defer />
    </>
  );
}
