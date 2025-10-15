# Guia de Contribuição - Comet Mosaico

Este documento estabelece diretrizes claras para contribuições ao projeto Comet Mosaico, incluindo boas práticas de Git, ciclo de revisão de Pull Requests e recomendações para automação com GitHub Copilot.

## 📋 Índice

- [Configuração Inicial](#configuração-inicial)
- [Fluxo de Trabalho Git](#fluxo-de-trabalho-git)
- [Padrões de Nomenclatura](#padrões-de-nomenclatura)
- [Ciclo de Pull Request](#ciclo-de-pull-request)
- [Checklist de PR](#checklist-de-pr)
- [Modelo de Comentários](#modelo-de-comentários)
- [Automação com GitHub Copilot](#automação-com-github-copilot)
- [Padrões de Qualidade](#padrões-de-qualidade)

## ⚙️ Configuração Inicial

### Pré-requisitos
- Git configurado com sua identidade
- Acesso ao repositório
- IDE configurada com extensões recomendadas
- GitHub CLI (opcional, mas recomendado)

### Setup do Projeto
```bash
# Clone o repositório
git clone https://github.com/AD-Thiago/comet-mosaico.git
cd comet-mosaico

# Configure upstream (se for um fork)
git remote add upstream https://github.com/AD-Thiago/comet-mosaico.git

# Instale dependências
npm install
```

## 🔄 Fluxo de Trabalho Git

### 1. Sincronização
```bash
# Sempre sincronize antes de começar
git checkout main
git pull origin main
```

### 2. Criação de Branch
```bash
# Crie uma branch específica para sua funcionalidade
git checkout -b feature/nome-da-funcionalidade
```

### 3. Desenvolvimento
- Faça commits atômicos e descritivos
- Teste localmente antes de cada commit
- Mantenha o histórico limpo

### 4. Sincronização Regular
```bash
# Mantenha sua branch atualizada
git fetch origin
git rebase origin/main
```

## 📝 Padrões de Nomenclatura

### Branches
- `feature/descricao-da-funcionalidade` - Nova funcionalidade
- `fix/descricao-do-bug` - Correção de bug
- `docs/descricao-da-documentacao` - Atualizações de documentação
- `refactor/descricao-da-refatoracao` - Refatoração de código
- `test/descricao-do-teste` - Adição/melhoria de testes
- `chore/descricao-da-tarefa` - Tarefas de manutenção

### Commits
Utilize o padrão Conventional Commits:
```
tipo(escopo): descrição

Corpo da mensagem (opcional)

Footer (opcional)
```

**Exemplos:**
```
feat(auth): adiciona autenticação OAuth
fix(ui): corrige alinhamento do header
docs(readme): atualiza instruções de instalação
refactor(utils): simplifica função de validação
test(api): adiciona testes para endpoint de usuários
```

## 🔁 Ciclo de Pull Request

### Etapa 1: Preparação
- [ ] Branch atualizada com `main`
- [ ] Código testado localmente
- [ ] Lint/format executados
- [ ] Commits organizados

### Etapa 2: Criação do PR
1. **Push da branch**
   ```bash
   git push origin feature/nome-da-funcionalidade
   ```

2. **Abertura do PR**
   - Título claro e descritivo
   - Descrição detalhada usando o template
   - Labels apropriados
   - Reviewers designados

### Etapa 3: Revisão
- **Revisão Automática**: CI/CD executa testes
- **Revisão Manual**: Pelo menos 1 aprovação obrigatória
- **Discussão**: Feedbacks e ajustes

### Etapa 4: Merge
- **Squash and Merge**: Para features simples
- **Merge Commit**: Para features complexas
- **Rebase and Merge**: Para histórico linear

### Etapa 5: Limpeza
```bash
# Após merge, limpe branches locais
git checkout main
git pull origin main
git branch -d feature/nome-da-funcionalidade
```

## ✅ Checklist de PR

### Antes de Abrir o PR
- [ ] Código segue os padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Não há conflitos com `main`
- [ ] Build local bem-sucedido
- [ ] Linter passou sem erros

### Template de PR
```markdown
## 📝 Descrição
Descreva brevemente as mudanças implementadas.

## 🚀 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Alteração com breaking change
- [ ] Atualização de documentação

## 🧪 Testes
- [ ] Testes unitários passando
- [ ] Testes de integração passando
- [ ] Testado manualmente

## 📱 Screenshots (se aplicável)
<!-- Cole screenshots aqui -->

## 🔗 Issues Relacionadas
Resolve #123

## ⚠️ Notas Adicionais
<!-- Informações relevantes para revisores -->
```

## 💬 Modelo de Comentários

### Para Reviewers

#### Feedback Construtivo
```
💡 Sugestão: Considere extrair esta lógica para uma função utilitária
reutilizável.

🤔 Pergunta: Este approach foi escolhido por alguma razão específica?

⚠️ Atenção: Esta mudança pode afetar a performance. Podemos otimizar?

✅ Aprovado: Implementação excelente! Código limpo e bem testado.
```

#### Classificação de Comentários
- **🔴 Crítico**: Deve ser resolvido antes do merge
- **🟡 Importante**: Deveria ser resolvido
- **🟢 Sugestão**: Opcional, melhoria futura
- **💡 Insight**: Compartilhamento de conhecimento

### Para Autores

#### Respondendo a Feedbacks
```
✅ Implementado: Mudança aplicada conforme sugestão

🔄 Modificado: Apliquei uma variação da sua sugestão

❌ Não aplicado: Mantive o approach original pelos seguintes motivos...

🤝 Discussão: Interessante ponto! Que tal discutirmos no Slack?
```

## 🤖 Automação com GitHub Copilot

### Tarefas Recomendadas para Copilot

#### ✅ Automações Simples
- Geração de testes unitários básicos
- Documentação de funções (JSDoc)
- Implementação de interfaces simples
- Validações e sanitizações comuns
- Configurações de linting
- Scripts de build e deployment

#### ❌ Não Delegar ao Copilot
- Lógica de negócio complexa
- Decisões arquiteturais
- Código relacionado à segurança
- Integrações críticas
- Performance-critical code

### Exemplos de Uso

```javascript
// ✅ BOM: Geração de testes com Copilot
// Prompt: "Generate unit tests for this validation function"
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ✅ BOM: Documentação com Copilot
/**
 * Valida formato de email
 * @param {string} email - Email para validar
 * @returns {boolean} True se válido
 */
```

### Prompts Recomendados
```
// Para testes
"Generate comprehensive unit tests for this function"

// Para documentação
"Add JSDoc documentation for this function"

// Para refatoração
"Refactor this code to be more readable and maintainable"

// Para tipo TypeScript
"Add proper TypeScript types for this interface"
```

## 🎯 Padrões de Qualidade

### Código
- **Consistência**: Siga os padrões estabelecidos
- **Legibilidade**: Código auto-explicativo
- **Performance**: Otimizações quando necessário
- **Segurança**: Validações e sanitizações

### Testes
- **Cobertura**: Mínimo 80% de cobertura
- **Casos Edge**: Teste cenários extremos
- **Integração**: Testes end-to-end quando relevante

### Documentação
- **Atualizada**: Sempre sincronizada com o código
- **Clara**: Instruções passo a passo
- **Exemplos**: Casos de uso práticos

## 🚀 Processo de Release

### Versionamento
Seguimos [Semantic Versioning](https://semver.org/):
- `MAJOR.MINOR.PATCH`
- Major: Breaking changes
- Minor: Novas funcionalidades
- Patch: Bug fixes

### Changelog
Mantenha `CHANGELOG.md` atualizado:
```markdown
## [1.2.0] - 2025-01-15
### Added
- Nova funcionalidade X
- Integração com API Y

### Fixed
- Correção no bug Z

### Changed
- Melhoria na performance W
```

## 📞 Suporte

- **Dúvidas**: Abra uma issue com label `question`
- **Bugs**: Use o template de bug report
- **Discussões**: Use GitHub Discussions
- **Chat**: Canal #desenvolvimento no Slack

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

**Lembre-se**: Um bom PR é pequeno, focado e bem documentado. Prefira múltiplos PRs pequenos a um grande PR com muitas mudanças.

*Última atualização: Janeiro 2025*
