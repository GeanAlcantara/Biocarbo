# Landing page Biocarbo

Landing page institucional e comercial para apresentar as soluções Biocarbo separadas entre linha Agro e produtos industriais.

## Descrição

Projeto de landing page com foco em conversão e mensuração. Contém conteúdo estruturado por produto, CTAs que abrem WhatsApp com mensagens pré-preenchidas e atributos para integração com analytics.

## Tecnologias

- Next.js / React
- TypeScript
- CSS (Tailwind / custom)

## Executar (desenvolvimento)

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

O build gera em `dist/` um bundle vinext compatível com a hospedagem Sites.

## Estrutura de conteúdo

- `data/products.ts`: catálogo, categorias, textos, links técnicos e números de WhatsApp por produto.
- `components/LandingPage.tsx`: composição e conteúdo da landing page.
- `app/globals.css`: identidade visual e responsividade.
- `app/privacidade/page.tsx`: política de privacidade.
- `public/images`: assets oficiais otimizados e imagem hero original.

## Conversão e mensuração

Os CTAs abrem conversas pré-preenchidas no WhatsApp. A linha Agro usa o contato comercial específico informado nos materiais oficiais; as demais demandas usam o contato geral.

Os elementos de conversão possuem atributos `data-track` e disparam eventos no `dataLayer`. Para registrar esses eventos em uma plataforma de analytics, ainda é necessário informar e instalar o contêiner GTM/GA4 aprovado pela Biocarbo.

## Antes de apontar o domínio

- Confirmar com a Biocarbo os textos comerciais, números de atendimento e documentos técnicos vigentes.
- Preservar ou redirecionar as URLs WordPress usadas nos links técnicos dos produtos.
- Configurar o domínio final, analytics e política de cookies conforme a operação real.

## Contribuir

1. Fork o repositório
2. Crie uma branch com sua mudança (`git checkout -b feature/nome-da-feature`)
3. Faça commit das suas mudanças (`git commit -m "feat: descrição curta"`)
4. Abra um Pull Request

## Licença

Este repositório está coberto pela licença MIT — veja o arquivo LICENSE para detalhes.
