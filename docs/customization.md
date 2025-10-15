# Customization Guide

Este guia descreve como personalizar os mosaicos (tiles) e o grid.

## Tokens de design
Defina variáveis CSS globais para cores, tipografia e espaçamento:

```css
:root {
  --bg: #0b1020;
  --card: #121935;
  --primary: #6ee7ff;
  --accent: #a78bfa;
  --radius: 16px;
  --spacing: 16px;
}
```

## Layout do grid
- Básico: `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`
- Avançado: `repeat(12, 1fr)` com classes utilitárias (`.span-3`, `.span-6`, `.row-2`)

## Tiles (cartões)
- Use bordas com `border-image` para acento gradiente
- Aplique `backdrop-filter` para efeito glass (quando suportado)
- Mantenha padding e radius consistentes com tokens

## Responsividade
- Ajuste `grid-auto-rows` por breakpoint
- Reatribua spans em breakpoints menores (ex.: `.span-6 { grid-column: span 12; }`)

## Acessibilidade
- Forneça títulos descritivos (h2/h3) e rótulos ARIA quando necessário
- Garanta contraste adequado e estados de foco visíveis
- Assegure navegação por teclado em elementos interativos

## Interatividade
- Prefira eventos discretos (click/keydown) e feedback não intrusivo
- Para exemplos, mantenha dados mockados encapsulados e idempotentes

## Boas práticas
- Componentize estilos e reutilize tokens
- Evite JS bloqueante e preserve 60fps nas animações
- Valide layout com testes de screenshot (Playwright/Cypress)
