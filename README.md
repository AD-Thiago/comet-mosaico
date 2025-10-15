# comet-mosaico

Página inicial moderna em mosaico para navegadores baseada em agentes de IA.

## Descrição

Comet-mosaico é uma página inicial moderna e interativa em formato de mosaico, desenvolvida para navegadores baseados em agentes de IA. O projeto oferece uma interface visual atrativa e funcional com layout totalmente responsivo.

## ✨ Características

- 🎨 **Layout Responsivo**: Adapta-se automaticamente a diferentes tamanhos de tela
- 📱 **Mobile-First**: Otimizado para dispositivos móveis
- ♿ **Acessível**: Suporte completo a navegação por teclado e leitores de tela
- 🎯 **Semântico**: HTML5 semântico com estrutura adequada
- 🔧 **Personalizável**: Suporte a diferentes tamanhos de tiles (small, wide, tall, large)
- ⚡ **Performance**: CSS otimizado sem dependências externas

## 📱 Responsividade

O layout adapta-se automaticamente para:

- **Mobile** (< 576px): 1 coluna
- **Tablet** (576px - 768px): 2 colunas
- **Desktop** (768px - 1024px): 3 colunas
- **Large Desktop** (≥ 1024px): 4 colunas
- **Extra Large** (≥ 1440px): 5 colunas

## 🎯 Classes CSS Disponíveis

### Containers
- `.container`: Container principal com max-width
- `.mosaic-grid`: Grid de mosaico responsivo
- `.page-header`: Cabeçalho da página

### Tiles
- `.mosaic-tile`: Tile padrão
- `.mosaic-tile--small`: Tile pequeno (1x1)
- `.mosaic-tile--wide`: Tile largo (2x1)
- `.mosaic-tile--tall`: Tile alto (1x2)
- `.mosaic-tile--large`: Tile grande (2x2)

### Elementos de Tile
- `.mosaic-tile__icon`: Ícone do tile
- `.mosaic-tile__title`: Título do tile
- `.mosaic-tile__description`: Descrição do tile

Para documentação completa das classes CSS, consulte [CSS_DOCUMENTATION.md](CSS_DOCUMENTATION.md).

## 🧪 Testes

Os testes de responsividade foram realizados em múltiplos dispositivos e navegadores. Para detalhes completos, consulte [TESTES_RESPONSIVIDADE.md](TESTES_RESPONSIVIDADE.md).

### Dispositivos Testados
- ✅ iPhone (375px)
- ✅ iPad (768px)
- ✅ Desktop (1920px)
- ✅ Large Desktop (1440px+)

## Exemplos Práticos

Foram adicionados exemplos na pasta `examples/`:

- Básico: `examples/basic-mosaic.html`
  - Grid responsivo (CSS Grid) com cards e efeitos de hover
  - Interatividade simples com JavaScript (alert ao clicar)
- Avançado: `examples/advanced-mosaic.html`
  - Grid de 12 colunas com spans dinâmicos e tiles com glassmorphism
  - Mock de dados (tarefas, eventos, timeline) e métrica dinâmica
  - Responsividade progressiva (breakpoints 1024px e 640px)

Para visualizar localmente, basta abrir os arquivos `.html` no navegador ou servir via um servidor simples:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

E acessar `http://localhost:8080/examples/basic-mosaic.html` ou `.../advanced-mosaic.html`.

## Roadmap (Incremental)

- [x] Exemplo básico de mosaico
- [x] Exemplo avançado com animações e dados mockados
- [ ] Ajustes de responsividade fina (mobile-first) — delegar ao Copilot/manutentores
- [ ] Interatividade acessível (focus states, teclado, ARIA)
- [ ] Testes automatizados (Playwright/Cypress) para layout e acessibilidade
- [ ] Documentação expandida em `/docs` com guias e boas práticas

## Como Contribuir

Contribuições são bem-vindas! Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feat/minha-feature`)
3. Commit suas mudanças (`git commit -m 'feat: descrição da feature'`)
4. Push para a branch (`git push origin feat/minha-feature`)
5. Abra um Pull Request

Por favor, certifique-se de que seu código segue as boas práticas e está bem documentado.

## Licença

Este projeto está sob licença MIT.
