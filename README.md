# comet-mosaico

Página inicial moderna em mosaico para navegadores baseada em agentes de IA.

## Descrição

Comet-mosaico é uma página inicial moderna e interativa em formato de mosaico, desenvolvida para navegadores baseados em agentes de IA. O projeto oferece uma interface visual atrativa e funcional.

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
