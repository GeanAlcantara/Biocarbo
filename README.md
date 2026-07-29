# Landing page Biocarbo

Landing page institucional e comercial para apresentar as soluções Biocarbo
separadas entre linha Agro e produtos industriais.

## Executar

Requisitos: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar e publicar

```bash
npm run lint
npm run build
npm run start
```

O build gera a exportação estática em `dist/`, pronta para hospedagem.

## Estrutura de conteúdo

- `data/products.ts`: catálogo, categorias, textos, links técnicos e números de
  WhatsApp por produto.
- `components/LandingPage.tsx`: composição e conteúdo da landing page.
- `app/globals.css`: identidade visual e responsividade.
- `app/privacidade/page.tsx`: política de privacidade.
- `public/images`: assets oficiais otimizados e imagem hero original.

## Conversão e mensuração

Os CTAs abrem conversas pré-preenchidas no WhatsApp. A linha Agro usa o contato
comercial específico informado nos materiais oficiais; as demais demandas usam
o contato geral.

Os elementos de conversão possuem atributos `data-track` e disparam eventos no
`dataLayer`. Para registrar esses eventos em uma plataforma de analytics, ainda
é necessário informar e instalar o contêiner GTM/GA4 aprovado pela Biocarbo.

## Antes de apontar o domínio

- Confirmar com a Biocarbo os textos comerciais, números de atendimento e
  documentos técnicos vigentes.
- Preservar ou redirecionar as URLs WordPress usadas nos links técnicos dos
  produtos.
- Configurar o domínio final, analytics e política de cookies conforme a
  operação real.
