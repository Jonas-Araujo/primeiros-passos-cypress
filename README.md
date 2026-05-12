# 🧪 Primeiros Passos com Cypress

Projeto de automação de testes E2E desenvolvido com **Cypress** aplicando boas práticas de QA, como **Page Objects**, **BasePage com herança**, **dados dinâmicos** e **organização profissional de código**.

> Desenvolvido como estudo prático durante curso de automação, com melhorias e arquitetura próprias além do conteúdo ministrado.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Executar](#como-executar)
- [Testes Disponíveis](#testes-disponveis)
- [Destaques Técnicos](#destaques-tcnicos)
- [Autor](#autor)

---

## Sobre o Projeto

Automação de testes do sistema [OrangeHRM](https://opensource-demo.orangehrmlive.com) — uma plataforma de RH open source utilizada como ambiente de demonstração.

Os testes cobrem os principais fluxos de:
- Autenticação (login com sucesso e falha)
- Atualização de dados pessoais do usuário
- Configuração de campos opcionais via módulo PIM

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework de testes E2E |
| [Chance.js](https://chancejs.com/) | Geração de dados aleatórios |
| [Node.js](https://nodejs.org/) | Ambiente de execução |
| Prettier ESLint | Formatação de código |

---

## Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── login.spec.cy.js          # Testes de autenticação
│   ├── user.spec.cy.js           # Testes de atualização de dados
│   └── user.with.pim.spec.cy.js  # ⭐ Automação própria — habilita campos opcionais
│
├── fixtures/
│   └── users/
│       └── userData.json         # Dados de teste (credenciais)
│
├── pages/
│   ├── basePage.js               # Classe base com seletores e funções comuns
│   ├── dashboardPage.js          # Page Object do Dashboard
│   ├── loginPage.js              # Page Object do Login
│   ├── menuPage.js               # Page Object do Menu de navegação
│   ├── myInfoPage.js             # Page Object de dados pessoais
│   └── pimPage.js                # Page Object do módulo PIM
│
└── support/
    ├── commands.js               # Custom Commands (ex: logOptions para debug)
    └── e2e.js
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Git](https://git-scm.com/) instalado

---

## Como Executar

**1. Clone o repositório:**
```bash
git clone https://github.com/Jonas-Araujo/primeiros-passos-cypress.git
cd primeiros-passos-cypress
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Abra o Cypress:**
```bash
npx cypress open
```

**4. Selecione o teste desejado na interface do Cypress.**

---

## Testes Disponveis

### `login.spec.cy.js` — Autenticação

Cobre os fluxos básicos de login da aplicação.

| Teste | Descrição |
|---|---|
| `Login - Success` | Realiza login com credenciais válidas e verifica o redirecionamento para o Dashboard |
| `Login - Fail` | Tenta login com credenciais inválidas e verifica a exibição do alerta de erro |

---

### `user.spec.cy.js` — Atualização de Dados

Cobre o fluxo completo de atualização dos dados pessoais do usuário.

| Teste | Descrição |
|---|---|
| `User Info Update - Success` | Realiza login, navega até My Info e preenche todos os campos com dados gerados aleatoriamente |

> **Dados gerados dinamicamente:** firstName, middleName, lastName e nickName são gerados a cada execução via Chance.js, garantindo independência entre os testes.

---

### ⭐ `user.with.pim.spec.cy.js` — Automação Própria

Este teste foi desenvolvido de forma **independente**, além do conteúdo do curso.

**Problema identificado:** Os campos Nickname, SSN Number e SIN Number só aparecem no formulário quando habilitados manualmente no módulo PIM → Configuration → Optional Fields.

**Solução criada:** Antes de preencher o formulário, o teste automaticamente:

1. Acessa o módulo PIM
2. Verifica se está na página correta
3. Habilita os três campos opcionais
4. Salva a configuração
5. Navega para My Info e preenche todos os campos

```
Login → Dashboard → PIM Config → Habilita campos → MyInfo → Preenche → Salva
```

---

## Destaques Tcnicos

### Page Objects com herança (BasePage)

Todos os Page Objects herdam da `BasePage`, que centraliza seletores e funções comuns, evitando repetição de código.

```javascript
class LoginPage extends BasePage {
  selectorsList() {
    return {
      ...super.selectorsList(), // herda submitButton do BasePage
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
    }
  }
}
```

### Seletores estáveis

Priorizados seletores semânticos e resistentes a mudanças de build, evitando atributos gerados dinamicamente pelo Vue.js.

```javascript
// ❌ Frágil — muda a cada build
'[data-v-7b563373]'

// ✅ Estável — atributo semântico
'[role="listbox"] > *'
```

### Custom Command para debug

```javascript
// commands.js
Cypress.Commands.add('logOptions', (selector) => {
  cy.get(selector).then(items => {
    items.each((index, el) => cy.log(`${index} → ${el.innerText}`))
  })
})
```

### Timeouts inteligentes

Configurados no `cypress.config.js` para evitar falhas em ambientes lentos sem uso de `.wait()` fixo.

```javascript
defaultCommandTimeout: 15000,
pageLoadTimeout:       60000,
```

---

## Autor

**Jonas Araujo**
- GitHub: [@Jonas-Araujo](https://github.com/Jonas-Araujo)

---

## Licença

Este projeto está sob a licença MIT.
