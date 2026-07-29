import LandingPage from "@/components/LandingPage";
import { products } from "@/data/products";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Biocarbo",
  url: "https://biocarbo.com",
  logo: "https://biocarbo.com/images/logo-biocarbo.svg",
  telephone: "+55 31 3191-7444",
  foundingDate: "1994",
  description:
    "Empresa brasileira de tecnologia e produção em carboquímica vegetal.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Fazenda Morro Grande, s/n",
      addressLocality: "Brumadinho",
      addressRegion: "MG",
      postalCode: "35460-000",
      addressCountry: "BR"
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Rodovia Traçadal, km 5, Fazenda Santa Helena, s/n",
      addressLocality: "Morada Nova de Minas",
      addressRegion: "MG",
      postalCode: "35628-000",
      addressCountry: "BR"
    }
  ]
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Soluções Biocarbo",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: product.officialUrl,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `https://biocarbo.com${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Biocarbo"
      }
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListSchema)
        }}
      />
      <LandingPage />
    </>
  );
}
