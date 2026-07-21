# Revisão Completa — YL Odontologia

Objetivo: elevar a página existente a padrão profissional de alta conversão, sem recriar. Mantenho paleta (preto/off-white/bege/dourado), tipografia serif+sans, fotos e estrutura de seções atuais.

## Princípio geral: nada de dados inventados

Vou substituir **todo número, formação, tempo de experiência, avaliação e depoimento que hoje está chutado** por marcadores `[INFORMAÇÃO A CONFIRMAR]`, centralizando-os num único arquivo `src/lib/clinic-data.ts` para a Dra. Yasmin editar em um lugar só. Os depoimentos atuais serão claramente rotulados como demonstrativos até ela enviar os reais. A contradição "30.000 sorrisos" vs "1.000 atendimentos" some.

## Mudanças por seção

**Config central (novo `src/lib/clinic-data.ts` + `src/lib/whatsapp.ts` reforçado)**
- Um único ponto para número do WhatsApp, CRO, nome completo, formações, telefones, unidades, horários, Instagram, Google Business.
- `waLink(origin, message?)` com parâmetro de origem (`hero`, `resultados`, `tratamento:facetas`, `unidade:aldeota`, `cta-final`, etc.) para métricas futuras.

**Hero**
- Reduzo escala do H1 em mobile, ajusto object-position responsivo pra não cortar rosto, escurecimento por gradiente mais suave à direita.
- CTA primário: "Agendar minha avaliação". Secundário: "Ver resultados" com scroll suave para `#resultados`.
- Removo "Resposta em até 5 minutos", troco por "Fale com nossa equipe pelo WhatsApp".
- Números do social proof do hero (avaliação/estrelas) marcados como confirmar.

**Navbar**
- Já é fixo; adiciono blur mais consistente, scroll suave via CSS `scroll-behavior`, `scroll-margin-top` nas seções para o menu não cobrir títulos, e estado ativo discreto via IntersectionObserver.
- Hamburguer mobile revisado (foco visível, área de toque ≥44px).

**Prova social (SocialProof)**
- Corrige inconsistência: todos os números viram tokens editáveis com `[INFORMAÇÃO A CONFIRMAR]` quando não confirmados.
- Contador anima uma vez via IntersectionObserver (respeita `prefers-reduced-motion`).
- Grid 2 colunas no mobile, alinhamento consistente.

**Antes & Depois**
- Slider acessível por teclado (setas ← →, `role="slider"`, `aria-valuenow`).
- Instrução "Arraste para comparar" visível.
- Proporção fixa por caso com `object-cover object-center` e altura máxima controlada no mobile.
- Transição suave entre casos (fade).
- Filtro ativo mais evidente (não só cor — também underline/peso).
- Metadados abaixo: procedimento, sessões, breve descrição, disclaimer "Resultados podem variar conforme cada caso".
- Todos os textos ficam em `clinic-data.ts` com marcadores `[INFORMAÇÃO A CONFIRMAR]` onde não temos autorização confirmada.

**Procedimentos**
- Cards com `h-full`, ícones padronizados (mesmo tamanho `size-6`, mesmo stroke).
- Hover discreto (translate-y-1 + shadow), sem exageros.
- Botão "Saiba mais" abre WhatsApp com mensagem específica por procedimento.
- Mobile: coluna única.

**Sobre a Dra.**
- Enquadramento da foto revisado, aspect ratio fixo.
- Bloco de informações com campos: nome, CRO, especialidades, formação, cursos, tempo de experiência — todos `[INFORMAÇÃO A CONFIRMAR]` até ela enviar.
- Mobile: foto primeiro, texto depois.
- CTA WhatsApp com origem `sobre`.

**Depoimentos**
- Banner discreto no topo: "Depoimentos demonstrativos — em breve substituídos por avaliações reais".
- Cards padronizados, carrossel simples no mobile (scroll-snap, sem autoplay).
- Botão "Ver avaliações no Google" só renderiza quando `GOOGLE_REVIEWS_URL` estiver preenchido em `clinic-data.ts`.

**Jornada / HowItWorks**
- 5 etapas revisadas nos títulos sugeridos, linha vertical no mobile, animação de reveal por etapa (leve).

**FAQ**
- Componente accordion (Radix via shadcn) — teclado nativo, uma aberta por vez.
- Respostas revisadas com a fórmula "definido após avaliação profissional" onde couber.

**Localização (nova seção antes do Footer)**
- Card por unidade: nome, endereço, horário, telefone, botão Google Maps, botão "Agendar nesta unidade" (WhatsApp com nome da unidade).
- Mapas em lazy-load: preview estático (placeholder + botão) que só carrega o iframe ao clicar — reduz peso.

**CTA Final**
- Título: "Dê o primeiro passo para cuidar do seu sorriso."
- Apoio: "Converse com nossa equipe e agende uma avaliação profissional."
- Botão "Agendar minha avaliação" → WhatsApp origem `cta-final`.

**Footer**
- Reestruturado com: logo, nome completo, CRO, telefone, WhatsApp, Instagram, unidades, horários, links rápidos, Política de Privacidade e Termos (rotas placeholder `/politica-privacidade` e `/termos`), aviso de resultados individuais, © com `new Date().getFullYear()`.

**WhatsApp Flutuante**
- Tooltip "Fale com nossa equipe" no hover/focus.
- `safe-area-inset-bottom` no mobile, não sobrepõe CTA final.

## Responsividade, performance, acessibilidade, SEO

- Revisão de `object-fit`, `aspect-ratio`, `min-h-dvh` (no lugar de `min-h-screen` onde couber) e `scroll-margin-top` global.
- `loading="lazy"` + `width`/`height` em todas as imagens abaixo do hero; hero fica com `fetchPriority="high"`.
- `alt` descritivo em todas as imagens; `aria-label` nos botões de ícone; foco visível padronizado; suporte a `prefers-reduced-motion`.
- SEO: title e description reescritos, JSON-LD `Dentist` populado a partir de `clinic-data.ts` (com campos vazios omitidos, não inventados), Open Graph consistente. Um único `<h1>` por página, hierarquia H2/H3 revisada.

## Métricas (preparação, sem códigos falsos)

- `src/lib/analytics.ts` com `track(event, params)` no-op por padrão.
- Placeholders em `.env`-style comment para `VITE_GA_ID` e `VITE_META_PIXEL_ID`.
- Chamadas `track('whatsapp_click', { origin })`, `track('procedure_click', ...)`, etc. já plugadas nos handlers.

## O que NÃO vou fazer

- Não trocar a paleta, tipografia, layout geral ou fotos existentes.
- Não adicionar Lovable Cloud/backend — nada disso é necessário.
- Não inventar CRO, formações, números, depoimentos ou reviews Google.
- Não inserir GA/Pixel de verdade — só o gancho.

## Entrega

Ao final, aviso os pontos exatos que precisam do input real da Dra. Yasmin (arquivo `clinic-data.ts` com uma lista de campos a preencher).