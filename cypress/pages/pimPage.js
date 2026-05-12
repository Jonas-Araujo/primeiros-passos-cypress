// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import BasePage from '../pages/basePage.js'

/**
 * @class PimPage
 * @description Page Object da página PIM | Configuration.
 * Responsável por habilitar campos opcionais antes do preenchimento de dados.
 * Estende BasePage para herdar seletores e funções comuns.
 */
class PimPage extends BasePage {

  // ─── SELECTORS ────────────────────────────────────────────────────────────
  selectorsList() {
    const selectors = {
      ...super.selectorsList(),
      breadcrumbModule: '.oxd-topbar-header-breadcrumb-module',
      genericTopBarNav: '.oxd-topbar-body-nav-tab-item',
      genericMenuItem:  '[role="menuitem"]',
      genericInput:     '.oxd-switch-input',
    }
    return selectors
  }

  // ─── METHODS ──────────────────────────────────────────────────────────────
  checkPimPage() {
    cy.get(this.selectorsList().breadcrumbModule).should('contain', 'PIM')
  }

  accessOptionalFields() {
    cy.get(this.selectorsList().genericTopBarNav).eq(0).click()
    cy.get(this.selectorsList().genericMenuItem).eq(0).click()
  }

  showNickName() {
    cy.get(this.selectorsList().genericInput).eq(0).click()
  }

  showSsnNumber() {
    cy.get(this.selectorsList().genericInput).eq(1).click()
  }

  showSinNumber() {
    cy.get(this.selectorsList().genericInput).eq(2).click()
  }

  // clickSubmit() → herdado do BasePage

}

export default PimPage