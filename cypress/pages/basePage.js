// ─── IMPORTS ──────────────────────────────────────────────────────────────────

/**
 * @class BasePage
 * @description Classe base que centraliza seletores e funções comuns a todas as páginas.
 * Deve ser estendida pelas demais pages via `extends BasePage`.
 * Os seletores definidos aqui são herdados automaticamente através de `...super.selectorsList()`.
 */

class BasePage {
  selectorsList() {
    const selectors = {
      submitButton: '[type="submit"]',
    }
    return selectors
  }

  clickSubmit() {
    cy.get(this.selectorsList().submitButton).click()
  }
}

export default BasePage